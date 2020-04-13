interface ArticleAttributes {
  id: string;
  title: string;
  date: string;
  image: string;
  description: string;
}

export interface Article {
  attributes: ArticleAttributes;
  body: string;
  bodyBegin: number;
  frontmatter: string;
  html: string;
}
