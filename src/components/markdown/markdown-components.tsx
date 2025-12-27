import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import type { Components } from 'react-markdown';

export const markdownComponents: Components = {
  h1: ({ className, ...props }) => (
    <h1 className={cn("scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl mb-4", className)} {...props} />
  ),
  h2: ({ className, ...props }) => (
    <h2 className={cn("scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mt-8 mb-4", className)} {...props} />
  ),
  h3: ({ className, ...props }) => (
    <h3 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight mt-6 mb-3", className)} {...props} />
  ),
  img: ({ src, alt, ...props }) => (
    <AspectRatio ratio={16 / 9} className="bg-muted overflow-hidden rounded-lg my-4">
      <img
        src={src}
        alt={alt || ''}
        className="object-cover w-full h-full"
        loading="lazy"
        {...props}
      />
    </AspectRatio>
  ),
  hr: () => <Separator className="my-8" />,
  pre: ({ className, ...props }) => (
    <pre className={cn("bg-muted p-4 rounded-lg overflow-x-auto my-4", className)} {...props} />
  ),
  code: ({ className, ...props }: any) => {
    const inline = !props.children?.includes?.('\n');
    return inline ? (
      <code className={cn("bg-muted px-1.5 py-0.5 rounded text-sm font-mono", className)} {...props} />
    ) : (
      <code className={cn("font-mono text-sm", className)} {...props} />
    );
  },
  blockquote: ({ className, ...props }) => (
    <blockquote className={cn("border-l-4 border-primary pl-6 italic my-6", className)} {...props} />
  ),
  a: ({ className, ...props }) => (
    <a className={cn("text-primary hover:underline underline-offset-4", className)} {...props} />
  ),
  p: ({ className, ...props }) => (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-4", className)} {...props} />
  ),
  ul: ({ className, ...props }) => (
    <ul className={cn("my-4 ml-6 list-disc [&>li]:mt-2", className)} {...props} />
  ),
  ol: ({ className, ...props }) => (
    <ol className={cn("my-4 ml-6 list-decimal [&>li]:mt-2", className)} {...props} />
  ),
};
