import { useTagFilter } from '@/hooks/use-tag-filter';
import { PostList } from '@/components/blog/post-list';
import { TagFilter } from '@/components/blog/tag-filter';

export function HomePage() {
  const { selectedTag, filteredPosts, handleTagChange } = useTagFilter();

  return (
    <div className="container mx-auto px-4 sm:px-8 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Photo Blog</h1>
        <p className="text-muted-foreground mb-6">
          Photography adventures and stories
        </p>
        <div className="flex justify-center">
          <TagFilter
            selectedTag={selectedTag}
            onTagChange={handleTagChange}
          />
        </div>
      </div>

      <PostList posts={filteredPosts} />
    </div>
  );
}
