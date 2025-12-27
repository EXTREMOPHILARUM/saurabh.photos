export interface PostFrontmatter {
  title: string;
  date: string; // ISO 8601: "2024-12-27"
  description?: string;
  author?: string;
  tags?: string[];
  featuredImage?: string;
  gallery?: string[];
  published?: boolean;
}

export interface BlogPost {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
  filepath: string;
}
