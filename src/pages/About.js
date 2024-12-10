import React from 'react';
import { FaHome, FaMapMarkedAlt, FaUserFriends, FaStar } from 'react-icons/fa';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">About Our Homestay Platform</h1>
      
      <div className="max-w-3xl mx-auto">
        <p className="text-lg mb-6">
          Welcome to our innovative platform that connects tourists with unique homestay experiences and local attractions. 
          Our mission is to provide authentic travel experiences by connecting travelers with local hosts and guides.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <FeatureCard 
            icon={<FaHome className="text-3xl text-blue-500" />}
            title="Homestay Connections"
            description="Find and book unique homestays directly from local hosts."
          />
          <FeatureCard 
            icon={<FaMapMarkedAlt className="text-3xl text-green-500" />}
            title="Local Attractions"
            description="Discover nearby attractions and get insider tips from local guides."
          />
          <FeatureCard 
            icon={<FaUserFriends className="text-3xl text-purple-500" />}
            title="Community Interaction"
            description="Connect with hosts and guides for a more personalized experience."
          />
          <FeatureCard 
            icon={<FaStar className="text-3xl text-yellow-500" />}
            title="Reviews & Ratings"
            description="Make informed decisions with our community-driven review system."
          />
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Technology Stack</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Frontend:</strong> Built with React for a responsive and interactive user interface.</li>
          <li><strong>Backend:</strong> Powered by Spring Boot, ensuring robust and scalable server-side operations.</li>
          <li><strong>Database:</strong> Utilizes MySQL for efficient data management and retrieval.</li>
        </ul>

        <div className="mt-8 bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Join Our Community</h3>
          <p>
            Whether you're a traveler seeking authentic experiences, a host wanting to share your home, 
            or a local guide passionate about your area, there's a place for you on our platform. 
            Join us in creating meaningful travel experiences and cultural exchanges.
          </p>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-3">{title}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default About;

