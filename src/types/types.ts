interface ArticleAttributes {
  id: string;
  date: string;
  title: string;
  image: string;
  description: string;
}

export interface Article {
  body: string;
  html: string;
  bodyBegin: number;
  frontmatter: string;
  attributes: ArticleAttributes;
}
