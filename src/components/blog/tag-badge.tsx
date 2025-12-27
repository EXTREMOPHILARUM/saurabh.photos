import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface TagBadgeProps {
  tag: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export function TagBadge({ tag, active, onClick, className }: TagBadgeProps) {
  return (
    <button onClick={onClick} disabled={!onClick}>
      <Badge
        variant={active ? "default" : "outline"}
        className={cn(onClick && "cursor-pointer hover:bg-primary/80", className)}
      >
        {tag}
      </Badge>
    </button>
  );
}
