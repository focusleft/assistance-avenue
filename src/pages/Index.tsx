
import ChatInterface from '@/components/ChatInterface';
import Header from '@/components/Header';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="container mx-auto px-4 flex-grow flex flex-col">
        <Header />
        
        <section id="chat-section" className="py-8 flex-grow flex flex-col">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-3xl font-semibold mb-4 text-foreground">Insight Support Chat</h2>
            <p className="text-muted-foreground">
              Easily search Insight Support tickets with case numbers, issue descriptions, or resolution context.
            </p>
          </div>
          
          <div className="w-full flex-grow flex items-center justify-center">
            <ChatInterface />
          </div>
        </section>
        
        <footer className="py-8 border-t border-border/40 mt-auto">
          <div className="flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
            <p>Apple © 2025. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
