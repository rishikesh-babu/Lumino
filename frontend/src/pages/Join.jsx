import React, { useState } from "react";

function Join() {
  // Job listings
  const jobs = [
    { id: 1, title: "Frontend Developer", location: "Remote", description: "We are looking for a React developer with 2+ years of experience." },
    { id: 2, title: "Backend Developer", location: "New York, USA", description: "Node.js and database management experience required." },
    { id: 3, title: "UI/UX Designer", location: "San Francisco, USA", description: "Creative designer with Figma and Adobe XD skills needed." }
  ];

  const [selectedJob, setSelectedJob] = useState(null);
  const [applicant, setApplicant] = useState({ name: "", email: "", resume: "" });
  const [successMessage, setSuccessMessage] = useState("");

  const handleApply = (job) => {
    setSelectedJob(job);
    setSuccessMessage("");
  };

  const handleChange = (e) => {
    setApplicant({ ...applicant, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage(`🎉 Application submitted for ${selectedJob.title}! We'll contact you soon.`);
    setSelectedJob(null);
    setApplicant({ name: "", email: "", resume: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-purple-700 flex flex-col items-center p-6 text-white">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold">Join Code Storm</h1>
        <p className="text-lg mt-2 italic">"Where Innovation Thrives & Talent Grows."</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full text-gray-900">
        <h2 className="text-3xl font-bold text-center">Open Positions</h2>
        <p className="text-center text-gray-600 mt-2">Explore our job openings and apply today!</p>

        {/* Job Listings */}
        <div className="mt-6 space-y-4">
          {jobs.map((job) => (
            <div key={job.id} className="border p-5 rounded-lg bg-gray-50 transition transform hover:scale-105">
              <h3 className="text-xl font-semibold">{job.title}</h3>
              <p className="text-gray-600">{job.location}</p>
              <p className="text-gray-700 mt-2">{job.description}</p>
              <button 
                onClick={() => handleApply(job)} 
                className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Application Form */}
      {selectedJob && (
        <div className="bg-white shadow-lg rounded-lg p-6 mt-6 max-w-lg w-full text-gray-900">
          <h3 className="text-2xl font-bold text-center">Apply for {selectedJob.title}</h3>
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-3">
              <label className="block text-gray-700">Name</label>
              <input 
                type="text" name="name" value={applicant.name} 
                onChange={handleChange} required 
                className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-400" 
              />
            </div>
            <div className="mb-3">
              <label className="block text-gray-700">Email</label>
              <input 
                type="email" name="email" value={applicant.email} 
                onChange={handleChange} required 
                className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-400" 
              />
            </div>
            <div className="mb-3">
              <label className="block text-gray-700">Resume (Link or Upload)</label>
              <input 
                type="text" name="resume" value={applicant.resume} 
                onChange={handleChange} required 
                className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-400" 
                placeholder="Paste resume link here" 
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Submit Application
            </button>
          </form>
        </div>
      )}

      {/* Success Message */}
      {successMessage && (
        <div className="bg-green-600 text-white p-4 mt-6 rounded-lg shadow-lg max-w-lg text-center">
          {successMessage}
        </div>
      )}
    </div>
  );
}

export default Join;
