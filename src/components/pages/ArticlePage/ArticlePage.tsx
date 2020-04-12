import {getArticlesFromProcessEnv} from '../../../utils/getArticlesFromProcessEnv';
import {SubscribeForm} from '../../common/SubscribeForm/SubscribeForm';
import {Container} from '../../ui/Container/Container';
import {Socials} from '../../common/Socials/Socials';
import {useLocation} from 'react-router';
import React, {useEffect} from 'react';
import Prism from 'prismjs';

// @ts-ignore
import smoothScroll from 'smoothscroll';

import s from './ArticlePage.css';

const articles = getArticlesFromProcessEnv();

const article = articles[0];

const createMarkup = (html: string) => {
  return {__html: html};
};

const scrollToArticle = () => {
  const scrollTo = document.getElementById('article');

  if (scrollTo) {
    smoothScroll(scrollTo);
  }
};

export const ArticlePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    scrollToArticle();

    Prism.highlightAll();
  }, [location]);

  return (
    <>
      <div id="article" className={s.container}>
        <h1>{article.attributes.title}</h1>
        <h2>{article.attributes.description}</h2>
        <img src={article.attributes.image} className={s.image} alt="post_image" />
        <div dangerouslySetInnerHTML={createMarkup(article.html)} />
      </div>
      <Container wrap="wrap" justify="space-between" align="start" className={s.newsletter_container} id="newsletter">
        <SubscribeForm />
        <Socials />
      </Container>
    </>
  );
};
