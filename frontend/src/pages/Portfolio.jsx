import React from 'react';

const projects = [
  {
    title: "SEO Optimization Tool",
    description: "A powerful AI-driven SEO analytics tool to boost search rankings.",
    image: "/images/seo-tool.jpg",
    link: "#",
  },
  {
    title: "Social Media Campaigns",
    description: "A strategic marketing suite for managing and automating social media campaigns.",
    image: "/images/social-media.jpg",
    link: "#",
  },
  {
    title: "Brand Identity Design",
    description: "A comprehensive branding solution for businesses looking to stand out.",
    image: "/images/brand-identity.jpg",
    link: "#",
  }
];

function Portfolio() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Page Header */}
      <h1 className="text-3xl font-bold text-center text-gray-800">Welcome to CodeStorm</h1>
      <p className="text-center mt-2 text-gray-600">Innovative marketing solutions for your business growth.</p>

      {/* Projects Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <a href={project.link} className="mt-3 inline-block text-blue-600 font-semibold hover:underline">
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Services Section */}
      <div className="mt-12 p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Our Expertise</h2>
        <p className="mt-4 text-gray-700 text-center">
          SEO, PPC Advertising, Social Media Marketing, Branding, Web Development, Content Strategy
        </p>
      </div>

      {/* Contact Section */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Let's Grow Your Business!</h2>
        <p className="mt-2 text-gray-600">Get in touch for tailored marketing strategies.</p>
        <a href="mailto:contact@codestorm.com" className="mt-3 inline-block text-blue-600 font-semibold hover:underline">
          Contact Us →
        </a>
      </div>
    </div>
  );
}

export default Portfolio;