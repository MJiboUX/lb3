'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, MessageCircle, Share } from 'lucide-react';
import { Post } from '@/lib/community/types';
import { useRouter } from 'next/navigation';

interface PostCardProps {
  post: Post;
  isGuest?: boolean;
}

export function PostCard({ post, isGuest }: PostCardProps) {
  const router = useRouter();

  const handleGuestAction = () => {
    router.push('/auth/login?redirect=/community');
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-2">
        <div>
          <p className="font-medium">{post.userEmail}</p>
          <p className="text-sm text-muted-foreground">
            {new Date(post.timestamp).toLocaleDateString()}
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{post.content}</p>
        <div className="flex gap-4">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={isGuest ? handleGuestAction : undefined}
          >
            <Heart className="h-4 w-4 mr-2" />
            {post.likes}
          </Button>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={isGuest ? handleGuestAction : undefined}
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            {post.comments.length}
          </Button>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={isGuest ? handleGuestAction : undefined}
          >
            <Share className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}