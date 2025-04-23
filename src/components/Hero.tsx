
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const leftHandRef = useRef<SVGPathElement>(null);
  const rightHandRef = useRef<SVGPathElement>(null);
  const bridgeLineRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (leftHandRef.current) {
        leftHandRef.current.classList.add('animate-bridge-connect');
      }
      if (rightHandRef.current) {
        rightHandRef.current.classList.add('animate-bridge-connect');
      }
      if (bridgeLineRef.current) {
        bridgeLineRef.current.classList.add('opacity-100');
        bridgeLineRef.current.classList.remove('opacity-0');
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative min-h-screen pt-16 flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-mindbridge-lavender via-white to-mindbridge-teal opacity-50 -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 z-10">
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Heal relationships with <span className="text-mindbridge-primary">AI-guided</span> forgiveness
          </h1>
          <p className="text-xl text-gray-600 max-w-xl">
            MindBridge helps you process emotions, understand perspectives, and rebuild trust through guided emotional reconciliation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button className="bg-mindbridge-primary hover:bg-mindbridge-secondary text-white px-8 py-6 text-lg rounded-full">
              Start Your Journey
            </Button>
            <Button variant="outline" className="border-mindbridge-primary text-mindbridge-primary hover:bg-mindbridge-lavender px-8 py-6 text-lg rounded-full">
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="lg:w-1/2 flex justify-center items-center">
          <div className="w-full max-w-md h-80 relative animate-float">
            <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              {/* Left hand */}
              <path
                ref={leftHandRef}
                d="M100,150 C120,130 140,120 160,140"
                fill="none"
                stroke="#9b87f5"
                strokeWidth="8"
                strokeLinecap="round"
                className="opacity-70 transform translate-x-[-20%] scale-90"
              />
              
              {/* Right hand */}
              <path
                ref={rightHandRef}
                d="M300,150 C280,130 260,120 240,140"
                fill="none"
                stroke="#7E69AB"
                strokeWidth="8"
                strokeLinecap="round"
                className="opacity-70 transform translate-x-[-20%] scale-90"
              />
              
              {/* Bridge line connecting hands */}
              <path
                ref={bridgeLineRef}
                d="M160,140 C180,160 220,160 240,140"
                fill="none"
                stroke="#D6BCFA"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray="1,1"
                className="opacity-0 transition-opacity duration-1000"
              />
              
              {/* Glowing circles */}
              <circle cx="160" cy="140" r="10" fill="#E5DEFF" className="animate-pulse-slow" />
              <circle cx="240" cy="140" r="10" fill="#D3E4FD" className="animate-pulse-slow" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
