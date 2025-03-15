import React from "react";

const blogPosts = [
  {
    title: "Digital Marketing Trends for 2025",
    excerpt: "Discover the latest strategies in SEO, social media, and AI-driven marketing to stay ahead in the digital landscape.",
    image: "/images/digital-marketing.jpg",
  },
  {
    title: "Behind-the-Scenes: How We Plan Major Events",
    excerpt: "A look at the logistics, creativity, and execution behind organizing large-scale successful events.",
    image: "/images/event-planning.jpg",
  },
];

const digitalMarketingContent = `
  The digital landscape is evolving fast. At Codestorm, we stay ahead with cutting-edge strategies. 
  Here are the key trends shaping 2025:
  - **AI-Powered Marketing:** Smarter automation and personalized content enhance customer engagement.
  - **Short-Form Video:** Platforms like TikTok and Reels dominate with quick, engaging content.
  - **Live Streaming Growth:** Real-time interaction boosts brand trust and audience connection.
  - **Voice Search Optimization:** With smart assistants on the rise, voice-friendly content is a must.
  - **Ethical & Sustainable Marketing:** Consumers favor brands that prioritize transparency and responsibility.
  - **Metaverse & Virtual Experiences:** Digital storefronts and immersive experiences redefine brand engagement.
  Stay ahead with Codestorm’s innovative marketing solutions. Let’s create the future together!
`;

function Blog() {
  return (
    <div className="p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center">Blog Page</h1>
      <p className="text-center mt-2">Welcome to the blog page!</p>

      {/* Blog Posts Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="mt-2 text-gray-600">{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Digital Marketing Content Section */}
      <div className="mt-12 p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center">Digital Marketing Trends 2025</h2>
        <p className="mt-4 text-gray-700 whitespace-pre-line">{digitalMarketingContent}</p>
      </div>
    </div>
  );
}

export default Blog;
