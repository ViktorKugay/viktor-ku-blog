import React from 'react';
interface Props {
  mod?: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
  color?: 'white' | 'black' | 'main' | 'blue';
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p';
  align?: 'center' | 'left' | 'right' | 'justify';
  display?: 'block' | 'inline-block' | 'inline';
  fontFamily?: 'montserrat' | 'roboto';
  weight?: '200' | '300' | '400' | '500' | '600' | '700' | '800';
  whiteSpace?: 'noWrap' | 'preWrap';
  isUppercase?: boolean;
  onClick?(event: any): any;
  className?: string;
  margin?: 'normal' | 'dense';
}
export declare const Text: React.FC<Props>;
export {};
