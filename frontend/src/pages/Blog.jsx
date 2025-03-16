import React from "react";

const blogPosts = [
  {
    title: "Digital Marketing Trends for 2025",
    excerpt: "Digital marketing in 2025 is evolving rapidly, driven by AI, personalization, and emerging technologies. Businesses must leverage AI-powered tools for data-driven insights, automate customer interactions with chatbots, and optimize content for voice search to stay competitive. Social media remains a powerhouse, with short-form videos, influencer collaborations, and interactive content driving engagement. SEO strategies are shifting towards user intent and AI-generated content, making quality and relevance more critical than ever. Meanwhile, email marketing and personalized ad campaigns are seeing higher ROI through hyper-targeted messaging. As privacy regulations tighten, brands must prioritize ethical data usage and first-party data collection. Staying ahead in digital marketing requires agility, innovation, and a deep understanding of consumer behavior. Discover the latest strategies in SEO, social media, and AI-driven marketing to stay ahead in the digital landscape.",
    image: "https://blog.omnichat.ai/wp-content/uploads/2024/12/2025-trend-en.png",
  },
  {
    title: "Behind-the-Scenes: How We Plan Major Events",
    excerpt: "Planning major events requires a seamless blend of strategy, coordination, and creativity to ensure every detail aligns perfectly. It all begins with setting clear objectives and understanding the target audience, followed by meticulous venue selection, budgeting, and logistics planning. Behind the scenes, teams collaborate to curate engaging programs, secure speakers or entertainers, and manage vendor partnerships. Technology plays a crucial role, from event management software to real-time audience engagement tools. Crisis management plans are essential to handle unexpected challenges, ensuring a smooth experience for attendees. From concept to execution, every element is carefully orchestrated to create a memorable and impactful event. A look at the logistics, creativity, and execution behind organizing large-scale successful events.",
    image: "https://i.ytimg.com/vi/QkDfwPhUJYc/maxresdefault.jpg",
  },
  {
    title: "The Future of AI in Business",
    excerpt: "The future of AI in business is revolutionizing industries by enhancing efficiency, decision-making, and customer experiences. Companies are leveraging AI-driven analytics, automation, and machine learning to optimize operations, predict market trends, and personalize interactions. From chatbots streamlining customer service to AI-powered cybersecurity protecting sensitive data, the technology is reshaping business landscapes. As AI continues to evolve, ethical considerations, data privacy, and workforce adaptation become critical challenges. Businesses that embrace AI innovation while maintaining transparency and responsibility will gain a competitive edge in the rapidly changing digital economy. Explore how AI is revolutionizing industries, from automation to customer experience and beyond.",
    image: "https://media.licdn.com/dms/image/v2/D4E12AQFgkNP-veM-xQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1696944827305?e=2147483647&v=beta&t=uePmMpVGuF6R6ptxRpXThlgbwg53bjGh8mT16SvWEJo",
  },
];

const Blog = () => (
  <div className="p-6 rounded-lg shadow-lg">
    <h1 className="text-4xl font-bold text-center text-blue-400">Blog Page</h1>
    <p className="text-center mt-2">Welcome to the blog page!</p>

    {/* Blog Posts Section */}
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogPosts.map((post, index) => (
        <div key={index} className="rounded-lg shadow-md overflow-hidden flex flex-col">
          <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="mt-2 text-gray-700">{post.excerpt}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Blog;
