import {scrollToElement} from '../../../../utils/scroll-to-element';
import {useMetrics} from '../../../../context/metrics/metrics.context';
import {createMarkup} from '../../../../utils/create-markup';
import {Visibility, ThumbUpAlt} from '@material-ui/icons';
import {Text} from '../../../ui/text/text.component';
import React, {useEffect, useRef, useState} from 'react';
import {Post} from '../../../../types/types';

import Prism from 'prismjs';
import anime from 'animejs';

import s from './post-content.module.scss';
import c from './post-content.config.json';
// import {firestoreApi} from 'firebase/firestore.api';

interface Props {
  post: Post;
}

export const PostContent: React.FC<Props> = ({post}) => {
  const [isPostLiked, setPostLiked] = useState(false);

  const metricsContext = useMetrics();
  const likeContainer = useRef(null);

  const postMetrics = metricsContext.getPostMetricsById(post.attributes.id);

  useEffect(() => {
    // firestoreApi.incrementPostViewsCounter(post.attributes.id);
    metricsContext.incrementPostViewsCounter(post.attributes.id);
    scrollToElement(c.PostContent.componentId);
    Prism.highlightAll();
  }, []);

  const handleLike = () => {
    if (!isPostLiked) {
      setTimeout(() => {
        anime({
          targets: likeContainer.current,
          rotate: 360,
          duration: 3000,
        });
      }, 500);

      setPostLiked(true);
      // firestoreApi.incrementPostLikesCounter(post.attributes.id);
      metricsContext.incrementPostLikesCounter(post.attributes.id);
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
      <h1>{post.attributes.title}</h1>
      <h2>{post.attributes.description}</h2>
      <img src={post.attributes.image} className={s.image} alt={c.PostContent.postImageAlt} />
      <div dangerouslySetInnerHTML={createMarkup(post.html)} />
      <div className={s.metrics_container}>
        <span className={s.metric}>
          <Visibility />
          <Text mod="h4" weight="400" className={s.metrics_value}>
            {postMetrics ? postMetrics.views : '~'}
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
            {postMetrics ? postMetrics.likes : '~'}
          </Text>
        </span>
      </div>
    </div>
  );
};
