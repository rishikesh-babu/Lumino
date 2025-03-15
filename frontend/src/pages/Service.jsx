import React from 'react';
import { Video, Camera, BarChart, Calendar } from "lucide-react";

const services = [
    {
        name: "Live Streaming",
        description: "We offer professional live streaming services for virtual and hybrid events, ensuring a seamless and engaging experience.",
        icon: <Video size={60} color="#3b82f6" />, // Blue color
        image: "/images/live-streaming.jpg",
    },
    {
        name: "Media Production",
        description: "Our expert team specializes in videography, photography, and high-quality video editing to bring your vision to life.",
        icon: <Camera size={60} color="#10b981" />, // Green color
        image: "/images/media-production.jpg",
    },
    {
        name: "Digital Marketing",
        description: "We help businesses grow with SEO, social media management, and targeted ad campaigns for maximum online reach.",
        icon: <BarChart size={60} color="#8b5cf6" />, // Purple color
        image: "/images/digital-marketing.jpg",
    },
    {
        name: "Event Management",
        description: "From planning to execution, we ensure seamless events with professional coordination and logistics support.",
        icon: <Calendar size={60} color="#ef4444" />, // Red color
        image: "/images/event-management.jpg",
    },
];

function Service() {
    return (
        <div>
            {/* Hero Section */}
            <div className="relative h-[350px] bg-cover bg-center flex items-center justify-center text-center"
                style={{ backgroundImage: "url('/images/services-hero.jpg')" }}>
                <div className="absolute inset-0 bg-opacity-50"></div>
                <h1 className="relative text-4xl md:text-5xl font-bold">Our Services</h1>
            </div>

            {/* Services Grid */}
            <div className="container mx-auto px-6 py-16">
                <h2 className="text-3xl font-semibold text-center mb-10">What We Offer</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {services.map((service, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                            <img src={service.image} alt={service.name} className="w-full h-48 object-cover transition duration-300 group-hover:scale-110" />
                            <div className="p-6 text-center">
                                <div className="flex justify-center">{service.icon}</div>
                                <h3 className="text-xl font-semibold mt-4">{service.name}</h3>
                                <p className="mt-2">{service.description}</p>
                                <button className="mt-4 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Call-to-Action Section */}
            <div className="bg-blue-600 text-center py-10 mt-16">
                <h2 className="text-2xl font-semibold">Ready to Work With Us?</h2>
                <p className="mt-2 text-lg">Let's bring your ideas to life. Contact us today!</p>
                <button className="mt-4 px-6 py-3 text-blue-600 font-semibold rounded-lg hover:bg-gray-200 transition duration-300">
                    Get in Touch
                </button>
            </div>
        </div>
    );
}

export default Service;
