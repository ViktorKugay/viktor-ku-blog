import {scrollToElement} from '../../../../utils/scroll-to-element';
import {PostContentSourceMap} from '../../../../types/types';
import {Visibility, ThumbUpAlt} from '@material-ui/icons';
import {useMetricsStore} from '../../../../store/store';
import React, {useEffect, useRef, useState} from 'react';
import {Text} from '../../../ui/text/text.component';

import Prism from 'prismjs';

import s from './post-content.module.scss';
import c from './post-content.config.json';

interface Props {
  postContentSourceMap: PostContentSourceMap;
}

export const PostContent: React.FC<Props> = ({postContentSourceMap}) => {
  const {attributes, html} = postContentSourceMap;
  const likeContainer = useRef<HTMLSpanElement>(null);
  const [isPostLiked, setPostLiked] = useState(false);

  const metricsStore = useMetricsStore();
  const postMetrics = metricsStore.getPostMetricsById(attributes.id);

  useEffect(() => {
    metricsStore.incrementPostViewsCounter(attributes.id);
    scrollToElement(c.PostContent.componentId);
    Prism.highlightAll();
  }, [attributes.id]);

  const handleLike = async () => {
    if (!isPostLiked) {
      await metricsStore.incrementPostLikesCounter(attributes.id).then(() => {
        setPostLiked(true);
      });
    }
  };

  const handleLikeMoveUp = () => {
    if (likeContainer.current) {
      likeContainer.current.classList.add(s.likes_icon_scaled_and_rotated);
    }
  };

  return (
    <div id={c.PostContent.componentId} className={s.container}>
      <h1>{attributes.title}</h1>
      <h2>{attributes.description}</h2>
      <img src={attributes.image} className={s.image} alt={c.PostContent.postImageAlt} />
      <div dangerouslySetInnerHTML={{__html: html}} />
      <div className={s.metrics_container}>
        <span className={s.metric}>
          <Visibility />
          <Text mod="h4" weight="400" className={s.metrics_value}>
            {postMetrics && postMetrics.views}
          </Text>
        </span>
        <span onMouseEnter={handleLikeMoveUp} ref={likeContainer} className={s.metric}>
          <ThumbUpAlt onClick={handleLike} />
          <Text mod="h4" weight="400" className={s.metrics_value}>
            {postMetrics && postMetrics.likes}
          </Text>
        </span>
      </div>
    </div>
  );
};
