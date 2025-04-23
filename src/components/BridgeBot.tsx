
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const BridgeBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm BridgeBot, your emotional reconciliation guide. How are you feeling today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        "I understand how difficult that situation must be. Can you tell me more about what happened?",
        "That's a common feeling when we're hurt. How long have you been feeling this way?",
        "It takes courage to share these feelings. What would forgiveness look like to you in this situation?",
        "You're taking an important step by discussing this. Would it help to explore the other person's perspective?",
        "I'm here to support your healing journey. What would make you feel better about this situation?"
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      const botMessage: Message = {
        id: messages.length + 2,
        text: randomResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <section id="bridgebot" className="py-20 bg-mindbridge-soft-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Chat with BridgeBot</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI companion helps guide you through difficult emotions and conversations, providing insights and prompts for healing.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="rounded-xl shadow-lg overflow-hidden border-0">
            <CardHeader className="bg-mindbridge-primary text-white">
              <CardTitle className="flex items-center gap-2">
                <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
                BridgeBot
              </CardTitle>
            </CardHeader>
            
            <CardContent className="p-0">
              <div className="h-80 overflow-y-auto p-4 bg-white">
                {messages.map((message) => (
                  <div 
                    key={message.id}
                    className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[80%] rounded-2xl p-3 ${
                        message.sender === 'user' 
                          ? 'bg-mindbridge-primary text-white' 
                          : 'bg-mindbridge-lavender'
                      }`}
                    >
                      <p>{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start mb-4">
                    <div className="bg-mindbridge-lavender rounded-2xl p-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-4 border-t border-gray-200 bg-white">
                <div className="flex gap-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="rounded-full"
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <Button 
                    className="rounded-full bg-mindbridge-primary hover:bg-mindbridge-secondary"
                    onClick={handleSendMessage}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>BridgeBot is powered by AI and designed to support emotional well-being, not replace professional therapy.</p>
            <p className="mt-1">For mental health emergencies, please contact a licensed professional.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BridgeBot;
