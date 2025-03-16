import React from "react";

function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold">About Code Storm</h1>
        <p className="text-lg mt-2 italic">"Empowering Brands, Inspiring Growth."</p>
      </div>

      {/* Main Content */}
      <div className="shadow-2xl rounded-2xl p-8 max-w-3xl w-full bg-white text-gray-900 transform transition-all duration-300 hover:scale-105">
        <h2 className="text-4xl font-extrabold text-center text-gray-800">Who We Are</h2>
        <p className="text-center mt-3 text-gray-600 text-lg">
          A results-driven marketing team specializing in digital growth, branding, and customer engagement.
        </p>
        
        {/* Company Overview */} 
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-gray-700">Our Story</h3>
          <p className="mt-2 text-gray-600 leading-relaxed">
            Since its inception, Code Storm has been dedicated to crafting impactful marketing strategies that drive business success.
            Our team of experts blends creativity with data-driven insights to help brands grow and thrive in a competitive digital world.
          </p>
        </div>
        
        {/* Services Section */}
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-gray-700">Our Expertise</h3>
          <ul className="list-disc list-inside mt-3 space-y-2 text-gray-600">
            <li className="hover:text-blue-500 transition duration-200">SEO & Content Marketing</li>
            <li className="hover:text-blue-500 transition duration-200">Social Media Strategy & Management</li>
            <li className="hover:text-blue-500 transition duration-200">Brand Identity & Storytelling</li>
            <li className="hover:text-blue-500 transition duration-200">Paid Advertising & PPC Campaigns</li>
            <li className="hover:text-blue-500 transition duration-200">Email Marketing & Lead Generation</li>
          </ul>
        </div>

        {/* Mission Statement */}
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-gray-700">Our Vision</h3>
          <p className="mt-2 text-gray-600 leading-relaxed">
            Our mission is to empower businesses with cutting-edge marketing strategies that enhance brand presence, 
            boost engagement, and drive conversions. At Code Storm, we turn ideas into impactful campaigns that deliver results.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
