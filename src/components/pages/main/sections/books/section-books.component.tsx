import React from 'react';

import {SliderContainer} from '../../../../common/slider/slider.component';
import {Container} from '../../../../ui/container/container.component';
import {CardBook} from '../../../../cards/book/card-book.component';
import {Text} from '../../../../ui/text/text.component';

import config from './section-books.config.json';

import s from './section-books.module.scss';

export const SectionBooks: React.FC = () => (
  <Container id="reads" wrap="wrap" justify="center" className={s.root}>
    <Text mod="h2" align="left" weight="700" className={s.title}>
      {config.Books.title}
    </Text>
    <SliderContainer>
      {config.Books.items.map(
        ({title, subtitle, logoUrl, imageUrl, linkUrl, pointsList, pointsColor}, index) => (
          <CardBook
            key={index}
            title={title}
            subtitle={subtitle}
            logoUrl={logoUrl}
            imageUrl={imageUrl}
            linkUrl={linkUrl}
            pointsList={pointsList}
            pointsColor={pointsColor}
          />
        ),
      )}
    </SliderContainer>
  </Container>
);
