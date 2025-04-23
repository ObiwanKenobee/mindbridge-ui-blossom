
import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
}

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah J.",
      role: "Restored relationship with sister",
      quote: "MindBridge helped me process years of resentment toward my sister. The guided exercises and AI conversations gave me a new perspective on our conflicts. We're talking again for the first time in three years.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 2,
      name: "Michael T.",
      role: "Found closure after divorce",
      quote: "After my divorce, I was stuck in anger and blame. MindBridge's forgiveness journey helped me release those emotions and find peace. I'm not carrying that weight anymore, and it's changed everything.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 3,
      name: "Aisha K.",
      role: "Healed workplace relationship",
      quote: "A conflict with my colleague was affecting my work and mental health. BridgeBot guided me through difficult conversations and helped me understand their perspective. We now collaborate better than ever.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Healing Stories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real people have found reconciliation and peace through MindBridge's guided forgiveness journey.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden py-10">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="rounded-xl shadow-md border-0 overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                        <div className="flex-shrink-0">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-24 h-24 rounded-full object-cover border-4 border-mindbridge-lavender"
                          />
                        </div>
                        <div>
                          <div className="mb-4">
                            <svg width="100" height="24" xmlns="http://www.w3.org/2000/svg">
                              {[...Array(5)].map((_, i) => (
                                <path
                                  key={i}
                                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                                  fill="#9b87f5"
                                  transform={`translate(${i * 20}, 0)`}
                                />
                              ))}
                            </svg>
                          </div>
                          <blockquote className="text-xl italic mb-4">"{testimonial.quote}"</blockquote>
                          <div>
                            <p className="font-bold text-lg">{testimonial.name}</p>
                            <p className="text-mindbridge-secondary">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-mindbridge-primary' : 'bg-mindbridge-lavender'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
