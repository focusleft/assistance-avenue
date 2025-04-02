
import { useState, useEffect, useRef } from 'react';
import { Message } from '@/types';
import ChatMessage from './ChatMessage';
import SearchBar from './SearchBar';
import { searchTickets, getResponseForMessage } from '@/services/api';
import { Loader2, Maximize2, Minimize2 } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from '@/hooks/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const searchResults = await searchTickets(content);
      const systemResponse = await getResponseForMessage(content);
      setMessages(prev => [...prev, systemResponse]);
    } catch (error) {
      console.error('Error getting response:', error);
      const errorMessage: Message = {
        id: `error-${Date.now()}`,
        content: 'Sorry, I encountered an error processing your request. Please try again.',
        sender: 'system',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
      toast({
        title: "Error",
        description: "Failed to process your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
    toast({
      title: isFullScreen ? "Exit fullscreen" : "Fullscreen mode",
      description: isFullScreen ? "Returned to normal view" : "Chat expanded to fullscreen",
    });
  };

  return (
    <div 
      className={`flex flex-col rounded-2xl shadow-lg overflow-hidden apple-glass transition-all duration-300 ${
        isFullScreen 
          ? 'fixed inset-0 z-50 rounded-none' 
          : isMobile
            ? 'h-[500px] w-full'
            : 'h-[70vh] w-full'
      }`}
    >
      <div className="flex justify-between items-center bg-secondary/80 backdrop-blur-md dark:bg-secondary/50 px-4 py-3">
        <div className="flex-1"></div>
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleFullScreen}
            className="text-foreground hover:bg-primary/20"
            aria-label={isFullScreen ? "Exit fullscreen" : "Enter fullscreen"}
          >
            {isFullScreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 bg-background/80 backdrop-blur-sm">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full text-center">
            <div className="max-w-sm">
              <h3 className="text-xl font-medium mb-2">How can we help?</h3>
              <p className="text-muted-foreground">
                Ask about account issues, billing questions, or any other support topics.
              </p>
            </div>
          </div>
        ) : (
          <>
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
          </>
        )}
        {isLoading && (
          <div className="flex justify-center items-center py-4">
            <Loader2 className="h-5 w-5 animate-spin text-primary" />
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="border-t border-border/30 p-4 bg-background/50 backdrop-blur-md">
        <SearchBar onSend={handleSendMessage} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default ChatInterface;
