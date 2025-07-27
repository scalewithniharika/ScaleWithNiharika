import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row } from 'react-bootstrap';
import './Base.css';
import './Services.css';
import googleAdsIcon from '../assets/GoogleAds.png'; // PNG icon example
import googleAnalyticsIcon from '../assets/googleAnalytics.png';
import creativesIcon from '../assets/creatives.png';
const servicesData = [
  {
    title: "Google Ads",
    description: ["📌 Search, Display, Performance Max, YouTube",
      "📌 Keyword planning, audience layering, landing page input",
      "📌 High-intent traffic that drives conversions"],
    price: "Starting at ₹55,000/month*",
    iconType: "png",
    iconColor: "text-primary",
    iconSrc: googleAdsIcon,
  },
  {
    title: "Meta Ads",
    description:["📌 Funnel strategy, audience building, media buying",
                 "📌 Lead gen, D2C, remarketing, conversion scaling",
                 "📌 Daily campaign hygiene & optimizations"],

    price: "Starting at ₹45,000/month*",
    iconType: "svg",
    iconColor: "text-primary",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-meta" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M8.217 5.243C9.145 3.988 10.171 3 11.483 3 13.96 3 16 6.153 16.001 9.907c0 2.29-.986 3.725-2.757 3.725-1.543 0-2.395-.866-3.924-3.424l-.667-1.123-.118-.197a55 55 0 0 0-.53-.877l-1.178 2.08c-1.673 2.925-2.615 3.541-3.923 3.541C1.086 13.632 0 12.217 0 9.973 0 6.388 1.995 3 4.598 3q.477-.001.924.122c.31.086.611.22.913.407.577.359 1.154.915 1.782 1.714m1.516 2.224q-.378-.615-.727-1.133L9 6.326c.845-1.305 1.543-1.954 2.372-1.954 1.723 0 3.102 2.537 3.102 5.653 0 1.188-.39 1.877-1.195 1.877-.773 0-1.142-.51-2.61-2.87zM4.846 4.756c.725.1 1.385.634 2.34 2.001A212 212 0 0 0 5.551 9.3c-1.357 2.126-1.826 2.603-2.581 2.603-.777 0-1.24-.682-1.24-1.9 0-2.602 1.298-5.264 2.846-5.264q.137 0 .27.018"/>
      </svg>
    ),
  },
  {
    title: "Analytics & Reporting",
    description:["📌 Weekly performance dashboards",
                 "📌 ROI insights, scaling levers, budget optimization",
                 "📌 Identification of high-performing indexed audiences for sharper targeting"],
    price: "Included in all packages",
    iconType: "png",
    iconColor: "text-success",
    iconSrc: googleAnalyticsIcon,
  },
  {
    title: "Landing Page Audits",
    description:["📌 Review of user flow, copy, CTA, and speed",
                 "📌 Review of Google and Facebook ad campaigns"],
    price: "Starting at ₹12,000 one-time",
    iconType: "svg",
    iconColor: "text-primary",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
      </svg>
    ),
  },
  {
    title: "Campaign Setup Only (One-Time)",
    description:["📌 Full ad account setup, campaign structure, targeting",
                 "📌 1-week performance tracking + handover"],
    price: "Starting at ₹12,000 one-time",
    iconType: "svg",
    iconColor: "text-dark",
    svg:(<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
      <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
      <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
    </svg>)
  },
  {
    title: "Ad Copy & Creatives Consultation",
    description:["📌 Static ad copy, video script guidance, creative testing",
                 "📌  Includes feedback on existing creatives",],
    price: "Starting at ₹6,000",
    iconType: "png",
    iconColor: "text-success",
    iconSrc: creativesIcon,
  },
];

// Reusable Card Component
function ServiceCard({ title, description, price, iconColor, svg, iconType, iconSrc }) {
  return (
    <div className="col-12 col-md-6 col-lg-3 mx-3">
      <Card className="h-100 shadow-sm rounded-4 p-5 service-card text-center">
        <div className={`${iconColor} icon-style mb-3`}>
          {iconType === "svg" ? (
            svg
          ) : (
            <img src={iconSrc} alt={title} width={60} height={60} />
          )}
        </div>
        <h4 className="fw-bold card-heading pb-3">{title}</h4>
        <div className="text-secondary card-text">
          {Array.isArray(description) ? (
            <div className="text-start px-1 pb-2">
              {description.map((point, i) => (
                <div key={i}>{point}</div>
              ))}
            </div>
          ) : (
            description
          )}
        </div>

        <div className="mt-auto">
          <p className="text-purple fw-semibold mb-0 fs-5">{price}</p>
        </div>
      </Card>
    </div>
  );
}

function Services() {
  return (
    <div className="py-5 services-section" id="services">
      <h1 className="text-center fw-bold mb-3 section-heading"> 💼 What I Offer</h1>
      <p className="text-center text-secondary mb-5 px-5 pt-3 section-subtext">
        Custom digital ad solutions that are performance-focused and business-aligned.
      </p>
      <div className="container-fluid px-5 pb-5">
        <Row className="g-5 justify-content-center">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              price={service.price}
              iconColor={service.iconColor}
              svg={service.svg}
              iconType={service.iconType}
              iconSrc={service.iconSrc}
            />
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Services;
