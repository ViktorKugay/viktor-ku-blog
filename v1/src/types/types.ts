export interface PostAttributes {
  id: PostId;
  date: string;
  title: string;
  image: string;
  description: string;
}

export interface Post {
  body: string; // post content markdown
  html: string; // post content html
  bodyBegin: number; // number of line
  frontmatter?: string; // post header
  attributes: PostAttributes; // custom attributes
}

export interface Book {
  title: string;
  author: string;
  image: string;
  href: string;
  logo: string;
  color: string;
  points: string[];
}

export interface Project {
  title: string;
  description: string;
  color: string;
  href: string;
}

export enum PostId {
  queryString = 'query-string',
}

export interface PostMetrics {
  views: number;
  likes: number;
}

export interface Metrics {
  posts: FetchStatus<Record<PostId, PostMetrics>>;
}

export type FetchStatus<T> = FetchStatusInit<T> | FetchStatusSuccess<T>;

export interface FetchStatusSuccess<T> {
  status: 'success';
  data: T;
}

export interface FetchStatusInit<T> {
  status: 'init';
  data: T;
}
