
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

interface Step {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const JourneySteps = () => {
  const [activeStep, setActiveStep] = useState(1);
  
  const steps: Step[] = [
    {
      id: 1,
      title: "Reflect & Express",
      description: "Identify your emotions and express your feelings in a safe, guided space.",
      icon: "💭"
    },
    {
      id: 2,
      title: "Understand & Empathize",
      description: "Gain perspective and develop empathy for yourself and others involved.",
      icon: "🫂"
    },
    {
      id: 3,
      title: "Release & Reconnect",
      description: "Practice forgiveness exercises and create a plan for reconciliation or closure.",
      icon: "🕊️"
    }
  ];

  const handleStepChange = (stepId: number) => {
    setActiveStep(stepId);
  };

  const progressPercentage = ((activeStep - 1) / (steps.length - 1)) * 100;

  return (
    <section id="journey" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Forgiveness Journey</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Healing happens in stages. Our 3-step guided process helps you navigate the path to emotional reconciliation.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-10">
          <Progress value={progressPercentage} className="h-3 bg-mindbridge-lavender" />
          
          <div className="flex justify-between mt-2">
            {steps.map((step) => (
              <div 
                key={step.id}
                className={`text-sm ${activeStep >= step.id ? 'text-mindbridge-primary font-medium' : 'text-gray-400'}`}
              >
                Step {step.id}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <Card 
              key={step.id}
              className={`rounded-xl border-2 transition-all duration-300 ${
                activeStep === step.id 
                  ? 'border-mindbridge-primary shadow-lg scale-105' 
                  : 'border-transparent hover:border-mindbridge-lavender cursor-pointer'
              }`}
              onClick={() => handleStepChange(step.id)}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 flex items-center justify-center text-3xl mx-auto mb-4 rounded-full bg-mindbridge-lavender">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            className="bg-mindbridge-primary hover:bg-mindbridge-secondary text-white px-8 py-6 text-lg rounded-full"
            onClick={() => setActiveStep(activeStep < 3 ? activeStep + 1 : 1)}
          >
            {activeStep < 3 ? "Continue to Next Step" : "Start Again"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JourneySteps;
