import 'bootstrap/dist/css/bootstrap.min.css';
import './Base.css';
import targetIcon from '../assets/target.png'; // PNG icon
import handshakeIcon from '../assets/handshake.png'; // PNG icon


const aboutData = [
  {
    title: "Built for Scale",
    description: "Scaling isn't luck — it's strategy. I build ad systems that work hard for every rupee spent.",
    iconType: "bootstrap",
    icon: "bi-graph-up-arrow",
    iconColor: "text-primary",
    bgColor: "#E9D8FD",
  },
  {
    title: "Strategy-First Execution",
    description: "Data meets creativity. I go beyond dashboards to uncover what really moves the needle.",
    iconType: "png",
    iconSrc: targetIcon,
    bgColor: "#D1FAE5",
  },
  {
    title: "Partner > Vendor",
    description: "You get a performance marketer who thinks like your business partner — not an outsourced hand.",
    iconType: "png",
    iconSrc: handshakeIcon,
    bgColor: "#FFE5B4",
  },
];

// Reusable Card Component
function AboutCard({ title, description, icon, iconSrc, iconColor, bgColor }) {
  return (
    <div className="col-12 col-md-6 col-lg-3 mx-3">
      <div className="p-5 rounded-4 text-center h-100" style={{ backgroundColor: bgColor }}>
        {iconSrc ? (
          <img
            src={iconSrc}
            alt={title}
            className="icon-style mb-3"
            style={{ width: '60px', height: '60px', objectFit: 'contain' }}
          />
        ) : (
          <i className={`bi ${icon} icon-style ${iconColor}`}></i>
        )}
        <h4 className="fw-bold card-heading">{title}</h4>
        <p className="text-secondary card-text">{description}</p>
      </div>
    </div>
  );
}

function About() {
  return (
    <section className="bg-white text-center my-5 py-5" id="about">
      <h1 className="fw-bold mb-3 section-heading">💡 Why Work With Me?</h1>
      <p className="text-secondary mb-5 px-5 pt-3 section-subtext">
        Because you deserve a Marketing Partner who actually drives results, not just clicks.
      </p>

      <div className="container-fluid px-5">
        <div className="row g-5 justify-content-center">
          {aboutData.map((item, index) => (
            <AboutCard
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
              iconSrc={item.iconSrc}
              iconColor={item.iconColor}
              bgColor={item.bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
