
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToChat = () => {
    const chatSection = document.getElementById('chat-section');
    if (chatSection) {
      chatSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-[70vh] flex flex-col justify-center items-center text-center px-4 relative">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
        <span className="block">Need assistance?</span>
        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          We're here to help.
        </span>
      </h1>
      
      <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-8">
        Get instant answers to your questions through our AI-powered support assistant or connect with our team.
      </p>
      
      <button
        onClick={scrollToChat}
        className="flex items-center justify-center bg-white border border-gray-200 rounded-full w-14 h-14 shadow-md transition-transform hover:translate-y-1 absolute bottom-12"
        aria-label="Scroll to chat"
      >
        <ArrowDown className="h-5 w-5 text-gray-700" />
      </button>
    </section>
  );
};

export default HeroSection;
