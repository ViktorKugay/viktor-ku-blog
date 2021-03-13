import NextImage from 'next/image';
import noop from 'lodash/noop';
import React from 'react';

interface Props {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fullWidth?: boolean;
  className?: string;
  onClick?(): void;
}

export const Image: React.FC<Props> = ({
  src,
  width,
  height,
  alt,
  className,
  fullWidth = true,
  onClick = noop,
}) => {
  return (
    <NextImage
      className={className}
      width={width || 0}
      height={height || 0}
      onClick={onClick}
      layout={fullWidth ? 'responsive' : 'fixed'}
      src={src}
      alt={alt}
    />
  );
};
