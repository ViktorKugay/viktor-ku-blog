import {scrollToElement} from '../../../../utils/scroll-to-element';
import {PostContentSourceMap} from '../../../../types/types';
import {createMarkup} from '../../../../utils/create-markup';
import {Visibility, ThumbUpAlt} from '@material-ui/icons';
import {useMetricsStore} from '../../../../store/store';
import React, {useEffect, useRef, useState} from 'react';
import {Text} from '../../../ui/text/text.component';

import Prism from 'prismjs';
import anime from 'animejs';

import s from './post-content.module.scss';
import c from './post-content.config.json';

interface Props {
  postContentSourceMap: PostContentSourceMap;
}

export const PostContent: React.FC<Props> = ({postContentSourceMap}) => {
  const {attributes, html} = postContentSourceMap;

  const [isPostLiked, setPostLiked] = useState(false);
  const metricsStore = useMetricsStore();
  const likeContainer = useRef(null);

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
        anime({
          targets: likeContainer.current,
          duration: 5000,
          rotate: 360,
          direction: 'alternate',
        });
      });
    }
  };

  const handleLikeMoveUp = () => {
    anime({
      targets: likeContainer.current,
      scale: 1.1,
      duration: 1000,
    });
  };

  const handleLikeMoveDown = () => {
    anime({
      targets: likeContainer.current,
      scale: 1,
      duration: 1000,
    });
  };

  return (
    <div id={c.PostContent.componentId} className={s.container}>
      <h1>{attributes.title}</h1>
      <h2>{attributes.description}</h2>
      <img src={attributes.image} className={s.image} alt={c.PostContent.postImageAlt} />
      <div dangerouslySetInnerHTML={createMarkup(html)} />
      <div className={s.metrics_container}>
        <span className={s.metric}>
          <Visibility />
          <Text mod="h4" weight="400" className={s.metrics_value}>
            {postMetrics && postMetrics.views}
          </Text>
        </span>
        <span className={s.metric}>
          <ThumbUpAlt
            ref={likeContainer}
            onClick={handleLike}
            onMouseEnter={handleLikeMoveUp}
            onMouseLeave={handleLikeMoveDown}
          />
          <Text mod="h4" weight="400" className={s.metrics_value}>
            {postMetrics && postMetrics.likes}
          </Text>
        </span>
      </div>
    </div>
  );
};
