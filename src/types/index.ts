
export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'system';
  timestamp: Date;
}

export interface SearchResult {
  id: string;
  title: string;
  content: string;
  relevanceScore: number;
}

export interface Feedback {
  messageId: string;
  rating: 'helpful' | 'not_helpful';
  comment?: string;
}
