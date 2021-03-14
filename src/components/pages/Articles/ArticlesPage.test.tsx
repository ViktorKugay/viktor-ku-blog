import {render} from '@testing-library/react';
import {ArticlesPage} from './ArticlesPage';
import React from 'react';

describe('PagesMainPage', () => {
  it('should render component', () => {
    const header = render(<ArticlesPage />);
    expect(header).toBeDefined();
  });
});
