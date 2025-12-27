import { useParams, Navigate } from 'react-router-dom';
import { getPostBySlug } from '@/lib/posts';
import { MarkdownRenderer } from '@/components/markdown/markdown-renderer';
import { ImageGallery } from '@/components/blog/image-gallery';
import { TagBadge } from '@/components/blog/tag-badge';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Separator } from '@/components/ui/separator';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const { frontmatter, content } = post;

  return (
    <article className="container mx-auto max-w-4xl px-4 sm:px-8 py-12">
      {/* Featured Image */}
      {frontmatter.featuredImage && (
        <AspectRatio ratio={16 / 9} className="bg-muted overflow-hidden rounded-lg mb-8">
          <img
            src={frontmatter.featuredImage}
            alt={frontmatter.title}
            className="object-cover w-full h-full"
          />
        </AspectRatio>
      )}

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
          {frontmatter.title}
        </h1>

        {frontmatter.description && (
          <p className="text-xl text-muted-foreground mb-4">
            {frontmatter.description}
          </p>
        )}

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-2">
            <CalendarIcon className="h-4 w-4" />
            <time dateTime={frontmatter.date}>
              {format(new Date(frontmatter.date), 'MMMM dd, yyyy')}
            </time>
          </div>
          {frontmatter.author && (
            <span>by {frontmatter.author}</span>
          )}
        </div>

        {frontmatter.tags && frontmatter.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {frontmatter.tags.map(tag => (
              <TagBadge key={tag} tag={tag} />
            ))}
          </div>
        )}
      </header>

      <Separator className="mb-8" />

      {/* Gallery */}
      {frontmatter.gallery && frontmatter.gallery.length > 0 && (
        <ImageGallery images={frontmatter.gallery} />
      )}

      {/* Content */}
      <MarkdownRenderer content={content} />
    </article>
  );
}
