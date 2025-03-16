import React from "react";

function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 ">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-blue-400">About Us</h1>
        <p className="text-lg mt-2 italic">"Empowering Brands, Inspiring Growth."</p>
      </div>

      {/* Main Content */}
      <div className="shadow-2xl rounded-2xl p-8 max-w-3xl w-full transform transition-all duration-300 hover:scale-105">
        <h4 className="text-3xl font-extrabold text-center text-blue-400 ">Who We Are</h4>
        <p className="text-center mt-3 text-lg">
          A results-driven marketing team specializing in digital growth, branding, and customer engagement.
        </p>
        
        {/* Company Overview */} 
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-blue-400 ">Our Story</h3>
          <p className="mt-2  leading-relaxed">
            Since its inception, Code Storm has been dedicated to crafting impactful marketing strategies that drive business success.
            Our team of experts blends creativity with data-driven insights to help brands grow and thrive in a competitive digital world.
          </p>
        </div>
        
        {/* Services Section */}
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-blue-400">Our Expertise</h3>
          <ul className="list-disc list-inside mt-3 space-y-2 ">
            <li className="hover:text-blue-500 transition duration-200">SEO & Content Marketing</li>
            <li className="hover:text-blue-500 transition duration-200">Social Media Strategy & Management</li>
            <li className="hover:text-blue-500 transition duration-200">Brand Identity & Storytelling</li>
            <li className="hover:text-blue-500 transition duration-200">Paid Advertising & PPC Campaigns</li>
            <li className="hover:text-blue-500 transition duration-200">Email Marketing & Lead Generation</li>
          </ul>
        </div>

        {/* Mission Statement */}
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-blue-400">Our Vision</h3>
          <p className="mt-2 leading-relaxed">
            Our mission is to empower businesses with cutting-edge marketing strategies that enhance brand presence, 
            boost engagement, and drive conversions. At Code Storm, we turn ideas into impactful campaigns that deliver results.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
