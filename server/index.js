const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const csvWriter = require('csv-writer').createObjectCsvWriter;

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Serve static files from /uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// 📂 Path to the CSV file
const csvPath = path.join(__dirname, '../public/databases/reviews.csv');

// 📸 Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, 'uploads')),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

// 📥 Handle POST request
app.post('/api/reviews', upload.single('image'), async (req, res) => {
  const { name, role, text, rating } = req.body;
  const imagePath = req.file ? `uploads/${req.file.filename}` : '';

  const newReview = { name, role, text, rating, image: imagePath };

  try {
    const fileExists = fs.existsSync(csvPath);
    const writer = csvWriter({
      path: csvPath,
      header: [
        { id: 'name', title: 'name' },
        { id: 'role', title: 'role' },
        { id: 'text', title: 'text' },
        { id: 'rating', title: 'rating' },
        { id: 'image', title: 'image' },
      ],
      append: fileExists,
    });

    if (!fileExists) {
      fs.writeFileSync(csvPath, 'name,role,text,rating,image\n');
    }

    await writer.writeRecords([newReview]);
    res.status(200).json({ message: 'Review submitted successfully' });
  } catch (err) {
    console.error('CSV write failed:', err);
    res.status(500).json({ message: 'Failed to submit review' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
