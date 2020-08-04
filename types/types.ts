export interface PostAttributes {
  id: string;
  date: string;
  title: string;
  image: string;
  description: string;
}

export interface Post {
  body: string;
  html: string;
  bodyBegin: number;
  frontmatter: string;
  attributes: PostAttributes;
}
