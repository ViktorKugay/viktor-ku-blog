import Slider from 'react-slick';
import {Logo} from '../../ui/Logo/Logo';
import {Text} from '../../ui/Text/Text';
import React, {useRef, useContext} from 'react';
import {Divider} from '../../ui/Divider/Divider';
import {Container} from '../../ui/Container/Container';
import {ArticleCard} from '../../common/ArticleCard/ArticleCard';
import {BookCard} from '../../common/BookCard/BookCard';
import {SubscribeForm} from '../../common/SubscribeForm/SubscribeForm';
import {articlesContext} from '../../../context/articles/articlesContext';
import {ProjectCard} from '../../common/ProjectCard/ProjectCard';
import {Socials} from '../../common/Socials/Socials';
import {Arrow} from '../../common/Arrow/Arrow';
import {Article} from '../../../types/types';

import s from './MainPage.css';

import c from './config.json';

const SlickSliderSettings: Slider.Options = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrow: false,
  initialSlide: 0,
  adaptiveHeight: false,
};

export const MainPage: React.FC = () => {
  const {articles} = useContext(articlesContext);

  const slider = useRef<Slider>();

  return (
    <>
      {/* bio */}
      <Container align="center" margin="normal" className={s.bio_container} wrap="nowrap">
        <Logo image={c.MainPage.main.bio.logo} className={s.logo} width={80} />
        <Text mod="h4" align="justify">
          {c.MainPage.main.bio.description}
          <a target="_blank" className={s.bio_link} rel="noopener noreferrer" href={c.MainPage.header.facebook}>
            {'Viktor Kugay'}
          </a>
          {'.'}
        </Text>
      </Container>

      {/* latest article */}
      <Container align="start" margin="normal" className={s.latest_article} id="blog">
        <Text className={s.latest_article_title} margin="normal" display="block" weight="700" mod="h1" align="left">
          {c.MainPage.main.latest.title}
        </Text>
        <ArticleCard
          mod="large"
          id={articles[0].attributes.id}
          image={articles[0].attributes.image}
          title={articles[0].attributes.title}
          description={articles[0].attributes.description}
        />
      </Container>

      <Container>
        <Divider height="2" margin="16" />
      </Container>

      {/* articles */}
      <Container wrap="wrap" justify="space-between" className={s.articles_container}>
        {articles.map((article: Article, index) => (
          <ArticleCard
            mod="small"
            key={index}
            margin="normal"
            id={article.attributes.id}
            image={article.attributes.image}
            title={article.attributes.title}
            description={article.attributes.description}
          />
        ))}

        {/* <Link className={s.show_articles_link} to="/articles">
            <Text>{c.MainPage.main.articles.title}</Text>
            <ArrowForwardIcon />
          </Link> */}
      </Container>

      {/* projects */}
      <div className={s.projects_background}>
        <Container wrap="wrap" justify="center" className={s.projects_container} id="projects">
          <Text className={s.projects_title} mod="h2" weight="700">
            {c.MainPage.main.packages.packagesAndProjects}
          </Text>
          {c.MainPage.main.packages.items.map(({title, description, color, href}, index) => (
            <ProjectCard key={index} title={title} description={description} color={color} href={href} />
          ))}
        </Container>
      </div>

      {/* books, reads */}
      <Container wrap="wrap" justify="center" className={s.books_container} id="reads">
        <Text mod="h2" align="left" weight="700" className={s.books_title}>
          {c.MainPage.main.books.title}
        </Text>
        {/* slider prev arrow */}
        <Arrow className={s.prev_arrow} slider={slider} mod="prev" />
        <div className={s.slider_container}>
          <Slider ref={slider} {...SlickSliderSettings}>
            {c.MainPage.main.books.items.map(({title, image, author, href, points, logo, color}, index) => (
              <BookCard
                key={index}
                title={title}
                author={author}
                image={image}
                color={color as any}
                logo={logo}
                href={href}
                points={points}
              />
            ))}
          </Slider>
        </div>
        {/* slider next arrow */}
        <Arrow className={s.next_arrow} slider={slider} mod="next" />
      </Container>

      <Container className={s.newsletter_divider}>
        <Divider height="2" margin="16" />
      </Container>

      {/* subscriptions */}
      <Container wrap="wrap" align="start" id="newsletter" justify="space-between" className={s.newsletter_container}>
        <SubscribeForm />
        <Socials />
      </Container>
    </>
  );
};
