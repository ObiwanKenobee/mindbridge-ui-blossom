
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer id="resources" className="bg-mindbridge-soft-gray pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">MindBridge</h3>
            <p className="text-gray-600 mb-4">
              Empowering emotional healing through AI-guided forgiveness and reconciliation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-mindbridge-primary hover:text-mindbridge-secondary" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-mindbridge-primary hover:text-mindbridge-secondary" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-mindbridge-primary hover:text-mindbridge-secondary" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-mindbridge-primary hover:text-mindbridge-secondary" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-mindbridge-primary transition-colors">Forgiveness Guide</a></li>
              <li><a href="#" className="text-gray-600 hover:text-mindbridge-primary transition-colors">Reconciliation Tips</a></li>
              <li><a href="#" className="text-gray-600 hover:text-mindbridge-primary transition-colors">Emotional Healing Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-mindbridge-primary transition-colors">Research & Studies</a></li>
              <li><a href="#" className="text-gray-600 hover:text-mindbridge-primary transition-colors">Partner Therapists</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-mindbridge-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-mindbridge-primary transition-colors">Our Team</a></li>
              <li><a href="#" className="text-gray-600 hover:text-mindbridge-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-mindbridge-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-mindbridge-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Subscribe</h3>
            <p className="text-gray-600 mb-4">
              Join our newsletter for healing tips and updates.
            </p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Your email" className="rounded-full" />
              <Button className="bg-mindbridge-primary hover:bg-mindbridge-secondary rounded-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} MindBridge. All rights reserved.</p>
          <p className="mt-2 text-sm">
            MindBridge is designed to support emotional well-being, not replace professional therapy.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
