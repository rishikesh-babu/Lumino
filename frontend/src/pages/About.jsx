import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <motion.div 
        className="text-center mb-10"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-extrabold text-blue-500 dark:text-blue-400 drop-shadow-lg">About Us</h1>
        <p className="text-lg mt-2 italic text-blue-400 dark:text-blue-300 animate-pulse">"Empowering Brands, Inspiring Growth."</p>
      </motion.div>

      {/* Main Content */}
      <motion.div 
        className="shadow-2xl rounded-2xl p-8 max-w-3xl w-full backdrop-blur-md border border-gray-300 dark:border-gray-700 transform transition-all duration-300 hover:scale-105"
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1.2 }}
      >
        <h2 className="text-4xl font-extrabold text-center text-blue-500 dark:text-blue-400 drop-shadow-lg">Who We Are</h2>
        <p className="text-center mt-3 text-lg ">
          A results-driven marketing team specializing in digital growth, branding, and customer engagement.
        </p>
        
        {/* Company Overview */} 
        <motion.div 
          className="mt-6"
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-semibold text-blue-500 dark:text-blue-400">Our Story</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-gray-300">
            Since its inception, Code Storm has been dedicated to crafting impactful marketing strategies that drive business success.
            Our team of experts blends creativity with data-driven insights to help brands grow and thrive in a competitive digital world.
          </p>
        </motion.div>
        
        {/* Services Section */}
        <motion.div 
          className="mt-6"
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-semibold text-blue-500 dark:text-blue-400">Our Expertise</h3>
          <ul className="list-disc list-inside mt-3 space-y-2 ">
            {["SEO & Content Marketing", "Social Media Strategy & Management", "Brand Identity & Storytelling", "Paid Advertising & PPC Campaigns", "Email Marketing & Lead Generation"].map((service, index) => (
              <motion.li 
                key={index}
                className="hover:text-blue-500 dark:hover:text-blue-300 transition duration-200"
                whileHover={{ scale: 1.1 }}
              >
                {service}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Mission Statement */}
        <motion.div 
          className="mt-6"
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-semibold text-blue-500 dark:text-blue-400">Our Vision</h3>
          <p className="mt-2 leading-relaxed ">
            Our mission is to empower businesses with cutting-edge marketing strategies that enhance brand presence, 
            boost engagement, and drive conversions. At Code Storm, we turn ideas into impactful campaigns that deliver results.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;
