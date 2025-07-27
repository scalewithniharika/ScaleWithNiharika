import project1 from '../assets/project1.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Base.css';

const pillStyle = {
  background: "rgba(255, 255, 255, 0.65)",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
  backdropFilter: "saturate(180%) blur(20px)",
  WebkitBackdropFilter: "saturate(180%) blur(20px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  color: "#000",
  fontWeight: 500,
  borderRadius: "50px",
  padding: "0.2rem 0.5rem",
  fontSize: "0.55rem",
  whiteSpace: "nowrap",
};


// Data
const portfolioData = [
  {
    title: "Fashion E-Commerce",
    description: "Increased ROAS by 280% in 3 months.",
    tags: ["Google Ads", "Facebook Ads"],
  },
  {
    title: "Fitness App",
    description: "50k+ downloads in 6 weeks.",
    tags: ["Google Ads", "Facebook Ads"],
  },
  {
    title: "Real Estate",
    description: "Generated 200+ qualified leads.",
    tags: ["Google Ads", "Facebook Ads"],
  },
  
  
];

// Background color cycle
const bgColors = [
  "linear-gradient(135deg, #f3e8ff, #d8b4fe)",   // 0 % 3
  "linear-gradient(135deg, #d5fdeb, #d1f3ff)",   // 1 % 3
  "linear-gradient(135deg,#FAD0C4, #FFD1FF)"     // 2 % 3
];

// Reusable Card Component
function PortfolioCard({ title, description, tags, bg, image }) {
  return (
    <div className="col-12 col-md-6 col-lg-3 d-flex">
      <div className="p-5 rounded-4 text-center d-flex flex-column w-100" style={{ background: bg }}>
        <div className="mb-4">
          <img src={image} alt={title} className="img-fluid rounded-4" />
        </div>
        <h4 className="fw-bold card-heading">{title}</h4>
        <p className="text-secondary card-text">{description}</p>
        <div className="mt-auto pt-3 d-flex justify-content-center justify-content-lg-between flex-wrap">
          {tags.map((tag, index) => (
            <div key={index} className="rounded-pill border px-2 py-2 m-2" style={pillStyle}>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Main Component
function Portfolio() {
  return (
    <>
      <section className="bg-white text-center my-5 py-5" id="work">
        <h1 className="fw-bold mb-3 section-heading">Portfolio</h1>
        <p className="text-secondary mb-5 px-5 pt-3 section-subtext">
          Real results from real campaigns.
        </p>

        <div className="container-fluid px-4 px-lg-5">
          <div className="row g-5 justify-content-center">
            {portfolioData.map((item, index) => (
              <PortfolioCard
                key={index}
                title={item.title}
                description={item.description}
                tags={item.tags}
                bg={bgColors[index % 3]}  // Color cycling here
                image={project1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="my-5 pb-5">
        <div className="container-fluid px-4 px-lg-5 d-flex justify-content-center mb-5">
          <div className="p-5 rounded-4 text-center col-12 col-lg-9" style={{ background: "linear-gradient(135deg, #f3e8ff, #fcd9f9)" }}>
            <h3 className="fw-bold mb-4">Campaign Performance Video</h3>
            <div className="ratio ratio-16x9 rounded-4 overflow-hidden mx-auto" style={{ maxWidth: "720px" }}>
              <iframe
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="Campaign Performance"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
