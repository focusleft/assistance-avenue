
import ChatInterface from '@/components/ChatInterface';
import Header from '@/components/Header';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const handleEmailSupport = () => {
    window.location.href = 'mailto:support@zatura.com?subject=Support%20Request';
    toast({
      title: "Email client opened",
      description: "Redirecting to your email client to contact support.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4">
        <Header />
        
        <section id="chat-section" className="py-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-primary">Insight Ticket Search</h2>
            <p className="text-primary/80">
              Ask questions, search for solutions, or get help from our virtual assistant.
            </p>
          </div>
          
          <div className="flex justify-center mb-6">
            <Button 
              onClick={handleEmailSupport}
              className="flex items-center gap-2"
              variant="outline"
            >
              <Mail className="h-4 w-4" />
              Contact Support via Email
            </Button>
          </div>
          
          <ChatInterface />
        </section>
        
        <footer className="py-8 border-t border-border mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
            <p>© 2023 Zatura. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary">Terms of Service</Link>
              <Link to="/support" className="hover:text-primary">Support</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
