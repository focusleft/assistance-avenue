
import { useState } from 'react';
import { Search, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface SearchBarProps {
  onSend: (query: string) => void;
  isLoading: boolean;
}

const SearchBar = ({ onSend, isLoading }: SearchBarProps) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSend(query);
      setQuery('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 w-full bg-background border border-input rounded-full px-4 py-2 shadow-sm">
      <Search className="h-5 w-5 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Ask a question..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow border-0 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 p-0 text-base bg-transparent"
      />
      <Button
        type="submit"
        size="icon"
        disabled={!query.trim() || isLoading}
        className="rounded-full"
        variant={query.trim() && !isLoading ? "default" : "secondary"}
      >
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
};

export default SearchBar;
