import {useRouter} from 'next/router';
import {scrollToElement} from '../../../../utils/scroll-to-element';
import {createMarkup} from '../../../../utils/create-markup';
import React, {useEffect} from 'react';
import Prism from 'prismjs';

import s from './post-content.module.scss';
import c from './post-content.config.json';

interface Props {
  title: string;
  description: string;
  image: string;
  html: string;
}

export const PostContent: React.FC<Props> = ({title, description, image, html}) => {
  const {query} = useRouter();

  useEffect(() => {
    scrollToElement(c.PostContent.componentId);
    Prism.highlightAll();
  }, [query.postname]);

  return (
    <div id={c.PostContent.componentId} className={s.container}>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <img src={image} className={s.image} alt={c.PostContent.postImageAlt} />
      <div dangerouslySetInnerHTML={createMarkup(html)} />
    </div>
  );
};
