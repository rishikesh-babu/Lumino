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
    <div className="min-h-screen flex flex-col items-center p-6">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold">Join Code Storm</h1>
        <p className="text-lg mt-2 italic">"Where Innovation Thrives & Talent Grows."</p>
      </div>

      <div className="shadow-lg rounded-lg p-8 max-w-3xl w-full">
        <h2 className="text-3xl font-bold text-center">Open Positions</h2>
        <p className="text-center mt-2">Explore our job openings and apply today!</p>

        {/* Job Listings */}
        <div className="mt-6 space-y-4">
          {jobs.map((job) => (
            <div key={job.id} className="border p-4 rounded-lg">
              <h3 className="text-xl font-semibold">{job.title}</h3>
              <p className="">{job.location}</p>
              <p className="mt-2">{job.description}</p>
              <button onClick={() => handleApply(job)} className="mt-3 bg-blue-600 px-4 py-2 cursor-pointer rounded-sm hover:bg-blue-700">Apply</button>
            </div>
          ))}
        </div>
      </div>

      {/* Application Form */}
      {selectedJob && (
        <div className="shadow-lg rounded-lg p-6 mt-6 max-w-lg w-full">
          <h3 className="text-2xl font-bold">Apply for {selectedJob.title}</h3>
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-3">
              <label className="block">Name</label>
              <input type="text" name="name" value={applicant.name} onChange={handleChange} required className="w-full p-2 border rounded-lg" />
            </div>
            <div className="mb-3">
              <label className="block">Email</label>
              <input type="email" name="email" value={applicant.email} onChange={handleChange} required className="w-full p-2 border rounded-lg" />
            </div>
            <div className="mb-3">
              <label className="block">Resume (Link or Upload)</label>
              <input type="text" name="resume" value={applicant.resume} onChange={handleChange} required className="w-full p-2 border rounded-lg" placeholder="Paste resume link here" />
            </div>
            <button type="submit" className="w-full bg-green-600 py-2 rounded-lg hover:bg-green-700">Submit Application</button>
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
