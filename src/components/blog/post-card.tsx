import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { CalendarIcon } from 'lucide-react';
import type { BlogPost } from '@/types/post';
import { format } from 'date-fns';

interface PostCardProps {
  post: BlogPost;
}

export function PostCard({ post }: PostCardProps) {
  const { slug, frontmatter } = post;

  return (
    <Link to={`/post/${slug}`} className="block h-full">
      <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
        {frontmatter.featuredImage && (
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <img
              src={frontmatter.featuredImage}
              alt={frontmatter.title}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </AspectRatio>
        )}
        <CardHeader>
          <CardTitle className="line-clamp-2">{frontmatter.title}</CardTitle>
          <CardDescription className="line-clamp-2">{frontmatter.description}</CardDescription>
        </CardHeader>
        {frontmatter.tags && frontmatter.tags.length > 0 && (
          <CardContent className="flex-grow">
            <div className="flex flex-wrap gap-2">
              {frontmatter.tags.map(tag => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
          </CardContent>
        )}
        <CardFooter className="mt-auto">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarIcon className="h-4 w-4" />
            <time dateTime={frontmatter.date}>
              {format(new Date(frontmatter.date), 'MMM dd, yyyy')}
            </time>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
