import {useRouter} from 'next/router';
import {scrollToElement} from '../../../utils/scrollToElement';
import {createMarkup} from '../../../utils/createMarkup';
import React, {useEffect} from 'react';
import Prism from 'prismjs';

import s from './article.module.scss';

import c from './config.json';

interface Props {
  title: string;
  description: string;
  image: string;
  html: string;
}

export const Article: React.FC<Props> = ({title, description, image, html}) => {
  const {query} = useRouter();

  useEffect(() => {
    scrollToElement(c.Article.componentId);
    Prism.highlightAll();
  }, [query.slug]);

  return (
    <div id={c.Article.componentId} className={s.container}>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <img src={image} className={s.image} alt={c.Article.postImageAlt} />
      <div dangerouslySetInnerHTML={createMarkup(html)} />
    </div>
  );
};
