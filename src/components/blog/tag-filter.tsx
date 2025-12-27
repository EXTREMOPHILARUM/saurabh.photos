import { getAllTags } from '@/lib/posts';
import { TagBadge } from './tag-badge';
import { cn } from '@/lib/utils';

interface TagFilterProps {
  selectedTag: string | null;
  onTagChange: (tag: string | null) => void;
  className?: string;
}

export function TagFilter({ selectedTag, onTagChange, className }: TagFilterProps) {
  const tags = getAllTags();

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      <TagBadge
        tag="All"
        active={selectedTag === null}
        onClick={() => onTagChange(null)}
      />
      {tags.map(tag => (
        <TagBadge
          key={tag}
          tag={tag}
          active={selectedTag === tag}
          onClick={() => onTagChange(tag)}
        />
      ))}
    </div>
  );
}
