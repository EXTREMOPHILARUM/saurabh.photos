import { PostCard } from './post-card';
import type { BlogPost } from '@/types/post';

interface PostListProps {
  posts: BlogPost[];
}

export function PostList({ posts }: PostListProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No posts found.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-6 mx-auto max-w-7xl">
      {posts.map(post => (
        <div key={post.slug} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
}
