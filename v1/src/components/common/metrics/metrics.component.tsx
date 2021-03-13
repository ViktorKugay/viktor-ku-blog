import React from 'react';
import cn from 'classnames';

import {Text} from '../../ui/text/text.component';
import {Visibility, ThumbUpAltOutlined, ThumbUpAlt} from '@material-ui/icons';

import {useStore} from '../../../store/store';
import {PostId} from '../../../types/types';

import s from './metrics.module.scss';

interface Props {
  postId: PostId;
  viewsCount: number;
  likesCount: number;
}

export const Metrics: React.FC<Props> = ({postId, viewsCount, likesCount}) => {
  const store = useStore();

  const isPostLiked = store.selectLikedPosts().includes(postId);

  const handleLikeClick = () => {
    if (!isPostLiked) {
      store.incrementPostLikes(postId);
      store.setPostLiked(postId);
    }
  };

  return (
    <div className={s.root}>
      <span className={s.metric}>
        <Visibility />
        <Text mod="h4" weight="400" className={s.metrics_value}>
          {viewsCount}
        </Text>
      </span>
      <span className={cn(s.metric, s.likes, {[s.liked]: isPostLiked})} onClick={handleLikeClick}>
        {isPostLiked ? <ThumbUpAlt /> : <ThumbUpAltOutlined />}
        <Text mod="h4" weight="400" className={s.metrics_value}>
          {likesCount}
        </Text>
      </span>
    </div>
  );
};
