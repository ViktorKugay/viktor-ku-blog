import {scrollToElement} from '../../../utils/scrollToElement';
import {createMarkup} from '../../../utils/createMarkup';
import {useLocation} from 'react-router';
import React, {useEffect} from 'react';
import Prism from 'prismjs';

import s from './Article.css';

interface Props {
  title: string;
  description: string;
  image: string;
  html: string;
}

const id = 'article';

export const Article: React.FC<Props> = ({title, description, image, html}) => {
  const location = useLocation();

  useEffect(() => {
    scrollToElement('article');
    Prism.highlightAll();
  }, [location]);

  return (
    <div id={id} className={s.container}>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <img src={image} className={s.image} alt="post_image" />
      <div dangerouslySetInnerHTML={createMarkup(html)} />
    </div>
  );
};
