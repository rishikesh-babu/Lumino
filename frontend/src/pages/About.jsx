import React from 'react';

function About() {
  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <div className="shadow-lg rounded-lg p-8 max-w-3xl w-full">
        <h2 className="text-3xl font-bold text-center">About Code Storm</h2>
        <p className="text-center mt-2">
          A results-driven marketing team specializing in digital growth, branding, and customer engagement.
        </p>

        {/* Company Overview */} 
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Who We Are</h3>
          <p className="mt-2">
            Sinchhhhhhe its inception, Code Storm has been dedicahjjuuuted to crafting impactful marketing strategies that drive business success.
            Our team of experts blends creativity with data-driven insights to help brands grow and thrive in a competitive digital world.
          </p>
        </div>
        {/* Services Section */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Our Expertise</h3>
          <ul className="list-disc list-inside mt-2">
            <li>SEO & Content Marketing</li>
            <li>Social Media Strategy & Management</li>
            <li>Brand Identity & Storytelling</li>
            <li>Paid Advertising & PPC Campaigns</li>
            <li>Email Marketing & Lead Generation</li>
          </ul>
        </div>

        {/* Mission Statement */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Our Vision</h3>
          <p className="mt-2">
            Our mission is to empower businesses with cutting-edge marketing strategies that enhance brand presence, 
            boost engagement, and drive conversions. At Code Storm, we turn ideas into impactful campaigns that deliver results.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;