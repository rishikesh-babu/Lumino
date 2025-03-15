import React from 'react';

function AboutEPAM() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800">About EPAM Systems</h2>
        <p className="text-center text-gray-600 mt-2">
          A leading global provider of digital platform engineering and software development services.
        </p>

        {/* Company Overview */} 
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800">Who We Are</h3>
          <p className="text-gray-700 mt-2">
            Since 1993, EPAM Systems has been at the forefront of innovation, delivering cutting-edge technology solutions
            to businesses worldwide. With a presence in over 50 countries, we leverage our expertise in software engineering,
            consulting, and digital transformation to help enterprises thrive in an ever-evolving digital landscape.
          </p>
        </div>
        {/* Services Section */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800">Our Expertise</h3>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Software Engineering & Development</li>
            <li>Cloud & DevOps Solutions</li>
            <li>Artificial Intelligence & Machine Learning</li>
            <li>Customer Experience & Digital Transformation</li>
            <li>Cybersecurity & Risk Management</li>
          </ul>
        </div>

        {/* Mission Statement */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800">Our Vision</h3>
          <p className="text-gray-700 mt-2">
            Our mission is to solve complex challenges by combining engineering excellence with
            innovative technologies, empowering businesses to lead in the digital-first world.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutEPAM;
