import React from 'react';
interface Props {
  className?: string;
  justify?: 'center' | 'space-between' | 'flex-start';
  align?: 'center' | 'baseline' | 'start';
  margin?: 'normal' | 'dense';
  wrap?: 'wrap' | 'nowrap';
  id?: string;
}
export declare const Container: React.FC<Props>;
export {};
