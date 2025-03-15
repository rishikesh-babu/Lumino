import React from "react";

const blogPosts = [
  {
    title: "Digital Marketing Trends for 2025",
    excerpt: "Discover the latest strategies in SEO, social media, and AI-driven marketing to stay ahead in the digital landscape.",
    image: "https://blog.omnichat.ai/wp-content/uploads/2024/12/2025-trend-en.png",
  },
  {
    title: "Behind-the-Scenes: How We Plan Major Events",
    excerpt: "A look at the logistics, creativity, and execution behind organizing large-scale successful events.",
    image: "/images/event-planning.jpg",
  },
  {
    title: "The Future of AI in Business",
    excerpt: "Explore how AI is revolutionizing industries, from automation to customer experience and beyond.",
    image: "/images/ai-business.jpg",
  },
];



function Blog() {
  return (
    <div className="p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center">Blog Page</h1>
      <p className="text-center mt-2">Welcome to the blog page!</p>

      {/* Blog Posts Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <div key={index} className="rounded-lg shadow-md overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="mt-2">{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>

    
    </div>
  );
}

export default Blog;
600