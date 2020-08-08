import {PostContentSourceMap} from '../../../../types/types';
import {Visibility, ThumbUpAlt} from '@material-ui/icons';
import {useMetricsStore} from '../../../../store/store';
import {Text} from '../../../ui/text/text.component';
import {LinearProgress} from '@material-ui/core';
import React, {useRef} from 'react';
import Link from 'next/link';
import cn from 'classnames';
import anime from 'animejs';

import s from './post-card.module.scss';
import c from './post-card.config.json';

interface Props {
  post: PostContentSourceMap;
  className?: string;
  margin?: 'normal' | 'dense';
  mod?: 'large' | 'middle' | 'small';
}

export const PostCard: React.FC<Props> = ({post, className, mod = 'middle', margin = 'normal'}) => {
  const metricsStore = useMetricsStore();
  const container = useRef(null);

  const isLargeMod = mod === 'large';
  const alignTextBlock = mod === 'large' ? 'left' : 'center';

  const postMetrics = metricsStore.getPostMetricsById(post.attributes.id);

  const handlePostCardMoveUp = () => {
    anime({
      targets: container.current,
      scale: 1.03,
      duration: 3000,
    });
  };

  const handlePostCardMoveDown = () => {
    anime({
      targets: container.current,
      scale: 1,
      duration: 3000,
    });
  };

  const renderDescriptionBlock = () => (
    <Text mod="h4" align="justify">
      {post.attributes.description}
    </Text>
  );

  const renderMetricsBlock = () => (
    <>
      <span className={s.metric}>
        <Visibility />
        <Text mod="h4" weight="400" className={s.metrics_value}>
          {postMetrics.views}
        </Text>
      </span>
      <span className={s.metric}>
        <ThumbUpAlt />
        <Text mod="h4" weight="400" className={s.metrics_value}>
          {postMetrics.likes}
        </Text>
      </span>
    </>
  );

  const renderMetricsProgress = () => (
    <div className={s.metrics_progress_container}>
      <LinearProgress color="secondary" />
    </div>
  );

  return (
    <Link href={`/post/${post.attributes.id}`}>
      <div
        ref={container}
        role="article"
        className={cn(s.root, s.link, s[`mod_${mod}`], s[`margin_${margin}`], className)}
        onMouseEnter={handlePostCardMoveUp}
        onMouseLeave={handlePostCardMoveDown}
      >
        <img className={s.image} src={post.attributes.image} alt={c.PostCard.postImageAlt} />
        <div className={cn(s.text_container, s[`text_container_${mod}`])}>
          <Text mod="h3" margin="normal" align={alignTextBlock}>
            {post.attributes.title}
          </Text>

          {isLargeMod && renderDescriptionBlock()}

          <div className={s.metrics_container}>{postMetrics ? renderMetricsBlock() : renderMetricsProgress()}</div>
        </div>
      </div>
    </Link>
  );
};
