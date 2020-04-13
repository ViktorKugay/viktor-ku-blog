declare module '*.css' {
  const content: any;
  export default content;
}

declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.vert' {
  const content: any;
  export default content;
}

declare module '*.frag' {
  const content: any;
  export default content;
}

declare module '*.png' {
  const content: any;
  export default content;
}

interface Article {
  attributes: {
    id: string;
    title: string;
    date: string;
    image: string;
    description: string;
  };
  body: string;
  bodyBegin: number;
  frontmatter: string;
  html: string;
}

interface Window {
  tracking: any;
  __messages__: any;
  __env__: Article[];
  __webpack_public_path__: any;
  File: any;
  FileReader: any;
  Blob: typeof Blob;
  webpackHotUpdate: any;
}
