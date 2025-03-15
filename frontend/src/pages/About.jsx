import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center p-6">
      <div className="bg-white shadow-2xl rounded-lg p-10 max-w-3xl w-full transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-4xl font-extrabold text-center text-gray-900">About Code Storm</h2>
        <p className="text-center text-gray-700 mt-3 leading-relaxed">
          A results-driven marketing team specializing in digital growth, branding, and customer engagement.
        </p>

        {/* Company Overview */} 
        <div className="mt-8">
          <h3 className="text-2xl font-bold text-gray-900">Who We Are</h3>
          <p className="text-gray-700 mt-3 leading-relaxed">
            Since its inception, Code Storm has been dedicated to crafting impactful marketing strategies that drive business success.
            Our team of experts blends creativity with data-driven insights to help brands grow and thrive in a competitive digital world.
          </p>
        </div>

        {/* Services Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-bold text-gray-900">Our Expertise</h3>
          <ul className="list-disc list-inside text-gray-700 mt-3 leading-relaxed space-y-2">
            <li>SEO & Content Marketing</li>
            <li>Social Media Strategy & Management</li>
            <li>Brand Identity & Storytelling</li>
            <li>Paid Advertising & PPC Campaigns</li>
            <li>Email Marketing & Lead Generation</li>
          </ul>
        </div>

        {/* Mission Statement */}
        <div className="mt-8">
          <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
          <p className="text-gray-700 mt-3 leading-relaxed">
            Our mission is to empower businesses with cutting-edge marketing strategies that enhance brand presence, 
            boost engagement, and drive conversions. At Code Storm, we turn ideas into impactful campaigns that deliver results.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <a href="/contact" className="inline-block bg-blue-600 text-white font-semibold text-lg px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all">
            Work With Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
