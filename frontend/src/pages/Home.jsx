import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Modal from "react-modal";
import { Link } from "react-router-dom";

const buttonStyle = {
  background: "#ff6600",
  color: "white",
  padding: "10px 20px",
  textDecoration: "none",
  borderRadius: "5px",
  display: "inline-block",
  margin: "10px",
};

const caseStudies = [
  {
    id: 1,
    client: "TechNova Solutions",
    challenge: "Low website traffic and poor lead conversion.",
    solution: "Implemented advanced SEO, PPC ads, and email marketing campaigns.",
    results: {
      trafficIncrease: "300%",
      leadGrowth: "150%",
      engagementBoost: "85%",
    },
    testimonial:
      "Code Storm transformed our digital presence! We saw an instant boost in website visitors and leads.",
    clientName: "Jane Doe",
    clientRole: "CMO, TechNova Solutions",
    image: "https://images.squarespace-cdn.com/content/v1/62ae1b5b6198473d6821a4be/e5acd3f5-61d3-4677-939e-2f5c5f04c670/Artwork46_TechStorn.jpg",
  },
  {
    id: 2,
    client: "GreenGrove E-Commerce",
    challenge: "Struggled to retain customers and increase repeat purchases.",
    solution: "Launched retargeting ads, optimized website UX, and improved email engagement.",
    results: {
      trafficIncrease: "250%",
      leadGrowth: "120%",
      engagementBoost: "95%",
    },
    testimonial:
      "Thanks to Code Storm, our conversion rates skyrocketed! Their strategies are truly game-changing.",
    clientName: "John Smith",
    clientRole: "Founder, GreenGrove E-Commerce",
    image: "https://img.freepik.com/premium-vector/nature-nature-inspired-tree-logo-named-greengrove-illustration-design_650144-3419.jpg",
  },
];

function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      {/* Header Section */}
      <header style={{ background: "#000", color: "#fff", textAlign: "center", padding: "20px" }}>
        <h1>CODESTORM Studios</h1>
        <h2>VISION INTO LIFE</h2>
        <Link to={'/service'} style={buttonStyle}>
          Explore Our Services
        </Link>
        <Link to={'/contact'} style={buttonStyle}>
          Contact Us
        </Link>
      </header>

      {/* Image Carousel */}
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div>
          <img
            src="https://img.freepik.com/premium-photo/movie-shooting-video-filming-production-by-crew-team-professional-equipment-such-as-super-ultra-high-definition-digital-camera-with-tripod-lighting-set-studio-black-white-styles_258335-3656.jpg"
            alt="Media Production"
            className="object-contain"
          />
          <p className="legend">Media Production</p>
        </div>
        <div>
          <img
            src="https://img.freepik.com/premium-photo/3d-rendering-offline-text-with-screen-effects-technological-glitches_232104-15611.jpg?semt=ais_hybrid"
            alt="Live Streaming"
            className="object-contain"
          />
          <p className="legend">Live Streaming</p>
        </div>
        <div>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/023/517/333/small/digital-marketing-internet-marketing-and-digital-marketing-background-photo.jpg"
            alt="Digital Marketing"
            className="object-contain"
          />
          <p className="legend">Digital Marketing</p>
        </div>
      </Carousel>

      {/* Services Section */}
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h2>Our Key Services</h2>
        <p>Bringing ideas to life through media production, live streaming, and digital marketing solutions.</p>
        <p>We specialize in media production, live streaming, digital marketing, and event management.</p>
        <button style={buttonStyle} onClick={() => setModalIsOpen(true)}>
          Learn More
        </button>
      </div>

      {/* Case Studies / Success Stories Section */}
      <div className="p-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">🚀 Success Stories</h2>
        <p className="text-center text-gray-600 mb-8">
          See how Code Storm has helped brands achieve remarkable growth!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((caseStudy) => (
            <div key={caseStudy.id} className="bg-white rounded-lg shadow-lg p-6">
              <img
                src={caseStudy.image}
                alt={caseStudy.client}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-2xl font-semibold mt-4">{caseStudy.client}</h3>
              <p className="text-gray-600 mt-2">
                <strong>Challenge:</strong> {caseStudy.challenge}
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Solution:</strong> {caseStudy.solution}
              </p>
              <div className="mt-4 bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-500">📈 Results:</h4>
                <ul className="list-disc list-inside text-gray-700 mt-2">
                  <li>🚀 Traffic Increase: {caseStudy.results.trafficIncrease}</li>
                  <li>🔥 Lead Growth: {caseStudy.results.leadGrowth}</li>
                  <li>📊 Engagement Boost: {caseStudy.results.engagementBoost}</li>
                </ul>
              </div>
              <blockquote className="mt-4 italic text-gray-600">
                “{caseStudy.testimonial}”
              </blockquote>
              <p className="mt-2 text-gray-500 font-semibold">
                — {caseStudy.clientName}, {caseStudy.clientRole}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
          },
        }}
      >
        <h2>Welcome to CODESTORM Studios</h2>
        <p>We bring your vision into life with expert media solutions.</p>
        <button style={buttonStyle} onClick={() => setModalIsOpen(false)}>
          Close
        </button>
      </Modal>
    </div>
  );
}

export default Home;
