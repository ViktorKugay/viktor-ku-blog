export interface PostCustomAttributes {
  id: string;
  date: string;
  title: string;
  image: string;
  description: string;
}

export interface PostContentSourceMap {
  body: string; // post content markdown
  html: string; // post content html
  bodyBegin: number; // number of line
  frontmatter?: string; // post header
  attributes: PostCustomAttributes; // custom attributes
}

export interface BookSourceMap {
  title: string;
  author: string;
  image: string;
  href: string;
  logo: string;
  color: string;
  points: string[];
}

export interface ProjectSourceMap {
  title: string;
  description: string;
  color: string;
  href: string;
}

export interface PostMetrics {
  views: number;
  likes: number;
}

export type PostsMetricsSourceMap = Record<string, PostMetrics>;
