import React from 'react';
interface Props {
  className?: string;
  title: string;
  description?: string;
  image?: any;
  margin?: 'normal' | 'dense';
  mod?: 'large' | 'middle' | 'small';
}
export declare const PostCard: React.FC<Props>;
export {};
