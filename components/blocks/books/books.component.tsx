import React from 'react';
import {SliderContainer} from '../../common/slider/slider.component';
import {Container} from '../../ui/container/container.component';
import {BookCard} from './book-card/book-card.component';
import {Text} from '../../ui/text/text.component';

import s from './books.module.scss';
import c from './books.config.json';

export const BooksBlock: React.FC = () => {
  return (
    <Container wrap="wrap" justify="center" className={s.books_container} id="reads">
      <Text mod="h2" align="left" weight="700" className={s.books_title}>
        {c.Books.title}
      </Text>
      <SliderContainer>
        {c.Books.items.map(({title, image, author, href, points, logo, color}, index) => (
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
      </SliderContainer>
    </Container>
  );
};
