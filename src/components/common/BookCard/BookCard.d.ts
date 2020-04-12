import React from 'react';
interface Props {
  image: string;
  title: string;
  author: string;
  href: string;
  logo?: string;
  points: string[];
  color?: 'red' | 'orange' | 'black' | 'green' | 'yellow';
}
export declare const BookCard: React.FC<Props>;
export {};
