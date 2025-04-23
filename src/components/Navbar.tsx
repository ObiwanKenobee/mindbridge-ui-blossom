
import { useState } from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 bg-white/90 backdrop-blur-sm z-50 border-b border-mindbridge-lavender">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-mindbridge-primary">Mind<span className="text-mindbridge-secondary">Bridge</span></span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#journey" className="text-gray-600 hover:text-mindbridge-primary transition-colors">Journey</a>
            <a href="#bridgebot" className="text-gray-600 hover:text-mindbridge-primary transition-colors">BridgeBot</a>
            <a href="#testimonials" className="text-gray-600 hover:text-mindbridge-primary transition-colors">Testimonials</a>
            <a href="#resources" className="text-gray-600 hover:text-mindbridge-primary transition-colors">Resources</a>
            <Button className="bg-mindbridge-primary hover:bg-mindbridge-secondary text-white font-medium">Get Started</Button>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            <a href="#journey" className="text-gray-600 hover:text-mindbridge-primary block px-3 py-2 rounded-md">Journey</a>
            <a href="#bridgebot" className="text-gray-600 hover:text-mindbridge-primary block px-3 py-2 rounded-md">BridgeBot</a>
            <a href="#testimonials" className="text-gray-600 hover:text-mindbridge-primary block px-3 py-2 rounded-md">Testimonials</a>
            <a href="#resources" className="text-gray-600 hover:text-mindbridge-primary block px-3 py-2 rounded-md">Resources</a>
            <Button className="bg-mindbridge-primary hover:bg-mindbridge-secondary text-white font-medium mx-3 mt-2">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
