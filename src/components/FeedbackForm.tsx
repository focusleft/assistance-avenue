
import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { submitFeedback } from '@/services/api';
import { useToast } from '@/components/ui/use-toast';

interface FeedbackFormProps {
  messageId: string;
  onClose: () => void;
}

const FeedbackForm = ({ messageId, onClose }: FeedbackFormProps) => {
  const { toast } = useToast();
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState<'helpful' | 'not_helpful'>('helpful');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitFeedback({
        messageId,
        rating,
        comment: comment.trim() || undefined,
      });

      toast({
        title: "Feedback submitted",
        description: "Thank you for your detailed feedback!",
      });
      onClose();
    } catch (error) {
      toast({
        title: "Error submitting feedback",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium">How would you rate this response?</p>
        <div className="flex gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="rating"
              checked={rating === 'helpful'}
              onChange={() => setRating('helpful')}
              className="mr-2"
            />
            Helpful
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="rating"
              checked={rating === 'not_helpful'}
              onChange={() => setRating('not_helpful')}
              className="mr-2"
            />
            Not Helpful
          </label>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="comment" className="text-sm font-medium">
          Comments (optional)
        </label>
        <Textarea
          id="comment"
          placeholder="Tell us why..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={3}
          className="resize-none"
        />
      </div>

      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          Submit
        </Button>
      </div>
    </form>
  );
};

export default FeedbackForm;
