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
        console.log("Form Submitted:", formData);
        alert("Thank you for reaching out! We will contact you soon.");
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6">
            <div className="shadow-lg rounded-lg p-8 max-w-2xl w-full">
                <h2 className="text-3xl font-bold text-center">Contact Code Storm</h2>
                <p className="text-center mt-2">Get in touch with our team for inquiries or support.</p>

                {/* Company Contact Info */}
                <div className="mt-6">
                    <p><strong>Email:</strong> codestorm5655@gmail.com</p>
                    <p><strong>Phone:</strong> +91 85903351752</p>
                    <p><strong>Address:</strong> 123 Business St, City, Country</p>
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
                        <label className="block text-gray-700">Message</label>
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
                    <p className="text-gray-700">Follow us on:</p>
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
