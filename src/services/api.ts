
import { Message, SearchResult, Feedback } from '@/types';

// Mock data for search results
const mockSearchResults: SearchResult[] = [
  {
    id: '1',
    title: 'How to reset your password',
    content: 'To reset your password, go to the login page and click on "Forgot Password". Follow the instructions sent to your email.',
    relevanceScore: 0.95,
  },
  {
    id: '2',
    title: 'Account billing issues',
    content: 'If you're experiencing billing issues, please check your payment method in account settings and ensure it's up to date.',
    relevanceScore: 0.88,
  },
  {
    id: '3',
    title: 'Return policy information',
    content: 'Our return policy allows returns within 30 days of purchase with a valid receipt. Please contact customer service for more details.',
    relevanceScore: 0.75,
  },
];

// Simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock search API
export async function searchTickets(query: string): Promise<SearchResult[]> {
  console.log('Searching for:', query);
  
  // Simulate API call delay
  await delay(1000);
  
  if (!query.trim()) {
    return [];
  }
  
  // Simple search simulation
  const lowerQuery = query.toLowerCase();
  return mockSearchResults
    .filter(result => 
      result.title.toLowerCase().includes(lowerQuery) || 
      result.content.toLowerCase().includes(lowerQuery)
    )
    .sort((a, b) => b.relevanceScore - a.relevanceScore);
}

// Mock submit feedback API
export async function submitFeedback(feedback: Feedback): Promise<boolean> {
  console.log('Submitting feedback:', feedback);
  
  // Simulate API call delay
  await delay(800);
  
  // Always return success for the mock
  return true;
}

// Mock send message and get response API
export async function getResponseForMessage(message: string): Promise<Message> {
  console.log('Getting response for:', message);
  
  // Simulate API call delay
  await delay(1500);
  
  // Logic to determine response based on message content
  let content = '';
  
  if (message.toLowerCase().includes('password')) {
    content = 'To reset your password, please visit the account settings page and select "Reset Password". We'll send you an email with instructions.';
  } else if (message.toLowerCase().includes('billing') || message.toLowerCase().includes('payment')) {
    content = 'For billing inquiries, please check your latest invoice in the account section. If you need further assistance, let me know and I can connect you with our billing department.';
  } else if (message.toLowerCase().includes('return') || message.toLowerCase().includes('refund')) {
    content = 'Our return policy allows returns within 30 days of purchase. Please have your order number ready when contacting our returns department.';
  } else {
    content = 'Thank you for your message. How else can I assist you with your inquiry?';
  }
  
  return {
    id: `sys-${Date.now()}`,
    content,
    sender: 'system',
    timestamp: new Date(),
  };
}
