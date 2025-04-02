
import { Message, Feedback } from '@/types';
import { useState } from 'react';
import { UserCircle, Bot, ThumbsUp, ThumbsDown } from 'lucide-react';
import { submitFeedback } from '@/services/api';
import { useToast } from '@/components/ui/use-toast';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const { toast } = useToast();
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const isUser = message.sender === 'user';

  const handleFeedback = async (rating: 'helpful' | 'not_helpful') => {
    try {
      const feedback: Feedback = {
        messageId: message.id,
        rating,
      };
      
      await submitFeedback(feedback);
      setFeedbackSubmitted(true);
      toast({
        title: "Feedback submitted",
        description: "Thank you for your feedback!",
      });
    } catch (error) {
      toast({
        title: "Error submitting feedback",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className={`flex mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="flex-shrink-0 mr-3">
          <Bot className="h-8 w-8 rounded-full bg-blue-100 p-1 text-blue-600" />
        </div>
      )}
      
      <div className={`flex flex-col max-w-[80%] ${isUser ? 'items-end' : 'items-start'}`}>
        <div 
          className={`px-4 py-3 rounded-2xl ${
            isUser 
              ? 'bg-blue-500 text-white rounded-tr-none' 
              : 'bg-gray-100 text-gray-800 rounded-tl-none'
          }`}
        >
          {message.content}
        </div>
        
        <div className="text-xs text-gray-500 mt-1">
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
        
        {!isUser && !feedbackSubmitted && (
          <div className="flex space-x-2 mt-2">
            <button 
              onClick={() => handleFeedback('helpful')}
              className="text-gray-500 hover:text-blue-500 transition-colors"
              aria-label="Mark as helpful"
            >
              <ThumbsUp className="h-4 w-4" />
            </button>
            <button 
              onClick={() => handleFeedback('not_helpful')}
              className="text-gray-500 hover:text-red-500 transition-colors"
              aria-label="Mark as not helpful"
            >
              <ThumbsDown className="h-4 w-4" />
            </button>
          </div>
        )}
        
        {!isUser && feedbackSubmitted && (
          <div className="text-xs text-gray-500 mt-2">
            Thanks for your feedback
          </div>
        )}
      </div>
      
      {isUser && (
        <div className="flex-shrink-0 ml-3">
          <UserCircle className="h-8 w-8 rounded-full bg-gray-200 p-1 text-gray-600" />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
