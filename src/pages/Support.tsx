
import Header from '@/components/Header';
import ChatInterface from '@/components/ChatInterface';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Support = () => {
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
        
        <section className="py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-center text-primary">Insight Ticket Search</h1>
            <p className="text-center mb-8 text-primary/80">
              Get help with your Zatura products or services. Our virtual assistant is available 24/7.
            </p>
            
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
            
            <div className="bg-card rounded-lg shadow-md p-6">
              <ChatInterface />
            </div>
          </div>
        </section>
        
        <footer className="py-8 border-t border-border mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
            <p>© 2023 Zatura. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Support;
