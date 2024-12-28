import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

interface Comment {
  id: string;
  user: {
    name: string;
    avatar?: string;
  };
  content: string;
  createdAt: string;
}

interface ListingCommentsProps {
  listingId: string;
}

const ListingComments: React.FC<ListingCommentsProps> = ({ listingId }) => {
  const [comments] = useState<Comment[]>([
    {
      id: '1',
      user: { name: 'John Doe' },
      content: 'Great product! Exactly as described.',
      createdAt: '2024-02-15T10:30:00Z'
    },
    {
      id: '2',
      user: { name: 'Jane Smith' },
      content: 'Fast shipping and excellent quality.',
      createdAt: '2024-02-14T15:45:00Z'
    }
  ]);
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add comment logic here
    setNewComment('');
  };

  return (
    <div className="bg-navy-800 rounded-lg p-6">
      <h2 className="text-xl font-semibold text-white mb-6">Comments</h2>
      
      <div className="space-y-6 mb-8">
        {comments.map((comment) => (
          <div key={comment.id} className="border-b border-navy-700 pb-4">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
                <span className="text-sm font-medium text-white">
                  {comment.user.name[0]}
                </span>
              </div>
              <div className="ml-3">
                <p className="text-white font-medium">{comment.user.name}</p>
                <p className="text-sm text-gray-400">
                  {new Date(comment.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
            <p className="text-gray-300 ml-11">{comment.content}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className="bg-navy-700"
        />
        <Button type="submit" className="flex items-center">
          <MessageCircle className="w-4 h-4 mr-2" />
          Post Comment
        </Button>
      </form>
    </div>
  );
};

export default ListingComments;