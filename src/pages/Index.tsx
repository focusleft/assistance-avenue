
import ChatInterface from '@/components/ChatInterface';
import Header from '@/components/Header';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4">
        <Header />
        
        <section id="chat-section" className="py-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-primary">Insight Ticket Search</h2>
            <p className="text-primary/80">
              Easily search Insight Support tickets with case numbers, issue descriptions, or resolution context.
            </p>
          </div>
          
          <ChatInterface />
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

export default Index;
