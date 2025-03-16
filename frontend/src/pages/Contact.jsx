import React, { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send email using "mailto:"
        const subject = encodeURIComponent("Customer Inquiry - CODESTORM");
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        window.location.href = `mailto:codestorm5655@gmail.com?subject=${subject}&body=${body}`;
        setFormData({
            name: "",
            email: "",
            message: "",
        });

        alert("Thank you for reaching out! We will get back to you soon.");
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-blue-100">
            <div className="shadow-lg rounded-lg p-8 max-w-2xl w-full bg-white">
                <h2 className="text-3xl font-bold text-center text-blue-600">Get in Touch with CODESTORM</h2>
                <p className="text-center mt-2">We are here to assist you. Contact us for inquiries or support.</p>

                {/* Company Contact Info */}
                <div className="mt-6 text-center">
                    <p><strong>Email:</strong> codestorm5655@gmail.com</p>
                    <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                    <p><strong>Address:</strong> 123 Tech Street, Innovation City, USA</p>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="mt-6">
                    <div className="mb-4">
                        <label className="block">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
                            placeholder="Your Email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
                            rows="4"
                            placeholder="Your Message"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Send Message
                    </button>
                </form>

                {/* Social Media Links */}
                <div className="mt-6 text-center">
                    <p>Follow us on:</p>
                    <div className="flex justify-center space-x-4 mt-2">
                        <a href="#" className="text-blue-500 hover:underline">Facebook</a>
                        <a href="#" className="text-blue-400 hover:underline">Twitter</a>
                        <a href="#" className="text-red-500 hover:underline">Instagram</a>
                        <a href="#" className="text-gray-800 hover:underline">LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
