import React from 'react';

const projects = [
  {
    title: "E-Commerce Website",
    description: "A fully responsive e-commerce platform with payment integration.",
    image: "/images/ecommerce.jpg",
    link: "#",
  },
  {
    title: "Event Management System",
    description: "A web app to manage and book events effortlessly.",
    image: "/images/event-management.jpg",
    link: "#",
  },
  {
    title: "AI Chatbot",
    description: "An AI-powered chatbot for automated customer service.",
    image: "/images/ai-chatbot.jpg",
    link: "#",
  }
];

function Portfolio() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Page Header */}
      <h1 className="text-3xl font-bold text-center">My Portfolio</h1>
      <p className="text-center mt-2 text-gray-600">Here are some of my recent projects.</p>

      {/* Projects Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <a href={project.link} className="mt-3 inline-block text-blue-600 font-semibold hover:underline">
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="mt-12 p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center">Skills & Technologies</h2>
        <p className="mt-4 text-gray-700 text-center">
          React, JavaScript, Node.js, Tailwind CSS, MongoDB, Firebase, Git, Next.js, Express.js
        </p>
      </div>

      {/* Contact Section */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold">Let's Work Together!</h2>
        <p className="mt-2 text-gray-600">Feel free to reach out for collaboration or freelance work.</p>
        <a href="mailto:your.email@example.com" className="mt-3 inline-block text-blue-600 font-semibold hover:underline">
          Contact Me →
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
