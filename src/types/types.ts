export interface PostCustomAttributes {
  id: string;
  date: string;
  title: string;
  image: string;
  description: string;
}

export interface PostContentSourceMap {
  body: string;
  html: string;
  bodyBegin: number;
  frontmatter: string;
  attributes: PostCustomAttributes;
}

export interface PostMetrics {
  views: number;
  likes: number;
}

export type PostsMetricsSourceMap = Record<string, PostMetrics>;
