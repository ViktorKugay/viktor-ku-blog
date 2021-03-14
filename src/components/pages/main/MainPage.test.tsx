import {render} from '@testing-library/react';
import {MainPage} from './MainPage';
import React from 'react';

describe('PagesMainPage', () => {
  it('should render component', () => {
    const header = render(<MainPage />);
    expect(header).toBeDefined();
  });
});
