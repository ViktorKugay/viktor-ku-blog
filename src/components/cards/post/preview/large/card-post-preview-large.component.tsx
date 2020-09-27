import React from 'react';
import Link from 'next/link';
import cn from 'classnames';

import {Metrics} from '../../../../common/metrics/metrics.component';
import {Text} from '../../../../ui/text/text.component';
import {PostId} from '../../../../../types/types';

import s from './card-post-preview-large.module.scss';

interface Props {
  id: PostId;
  title: string;
  subtitle: string;
  imageUrl: string;
  className?: string;
  viewsCount: number;
  likesCount: number;
}

export const CardPostPreviewLarge: React.FC<Props> = ({
  id,
  title,
  subtitle,
  imageUrl,
  likesCount,
  viewsCount,
  className,
}) => {
  return (
    <Link href={`/post/${id}`}>
      <div className={cn(s.root, className)}>
        <img className={s.image} src={imageUrl} />

        <div className={s.text_container}>
          <Text mod="h3" margin="normal">
            {title}
          </Text>
          <Text mod="h4" align="justify">
            {subtitle}
          </Text>
          <Metrics postId={id} likesCount={likesCount} viewsCount={viewsCount} />
        </div>
      </div>
    </Link>
  );
};
