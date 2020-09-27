import React, {useEffect} from 'react';
import Prism from 'prismjs';

import {scrollToElement} from '../../../../utils/scroll-to-element';

import s from './card-post-content.module.scss';

interface Props {
  postId: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  html: string;
}

const cardId = 'post';

export const CardPostContent: React.FC<Props> = ({postId, title, subtitle, imageUrl, html}) => {
  useEffect(() => {
    scrollToElement(cardId);
    Prism.highlightAll();
  }, [postId]);

  return (
    <div id={cardId} className={s.container}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <img src={imageUrl} className={s.image} />
      <div dangerouslySetInnerHTML={{__html: html}} />
    </div>
  );
};
