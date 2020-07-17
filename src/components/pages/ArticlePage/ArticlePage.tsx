import {articlesContext} from '../../../context/articles/articlesContext';
import {SubscribeForm} from '../../common/SubscribeForm/SubscribeForm';
import {scrollToElement} from '../../../utils/scrollToElement';
import React, {useEffect, useContext, useMemo} from 'react';
import {Container} from '../../ui/Container/Container';
import {Article} from '../../common/Article/Article';
import {Socials} from '../../common/Socials/Socials';
import {useLocation, useParams} from 'react-router';
import Prism from 'prismjs';

import s from './ArticlePage.css';

export const ArticlePage: React.FC = () => {
  const params = useParams();
  const location = useLocation();
  const articles = useContext(articlesContext);
  const article = useMemo(() => articles.find(article => article.attributes.id === params.id), [articles, params]);

  useEffect(() => {
    scrollToElement('article');
    Prism.highlightAll();
  }, [location]);

  return (
    <>
      <Article
        title={article.attributes.title}
        description={article.attributes.description}
        image={article.attributes.image}
        html={article.html}
      />
      <Container wrap="wrap" justify="space-between" align="start" className={s.newsletter_container} id="newsletter">
        <SubscribeForm />
        <Socials />
      </Container>
    </>
  );
};
