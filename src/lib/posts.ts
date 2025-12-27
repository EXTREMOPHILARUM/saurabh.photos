import matter from 'gray-matter';
import type { BlogPost, PostFrontmatter } from '@/types/post';

const postModules = import.meta.glob('/content/posts/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

export function getAllPosts(): BlogPost[] {
  const posts = Object.entries(postModules).map(([filepath, content]) => {
    const { data, content: markdown } = matter(content as string);
    const slug = filepath.replace('/content/posts/', '').replace('.md', '');

    return {
      slug,
      frontmatter: data as PostFrontmatter,
      content: markdown,
      filepath,
    };
  });

  return posts.sort((a, b) =>
    new Date(b.frontmatter.date).getTime() -
    new Date(a.frontmatter.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find(post => post.slug === slug);
}

export function getPostsByTag(tag: string): BlogPost[] {
  return getAllPosts().filter(post =>
    post.frontmatter.tags?.includes(tag)
  );
}

export function getAllTags(): string[] {
  const allTags = getAllPosts().flatMap(post => post.frontmatter.tags || []);
  return Array.from(new Set(allTags)).sort();
}
