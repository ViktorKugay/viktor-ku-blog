import {render} from '@testing-library/react';
import {Footer} from './Footer';
import React from 'react';

describe('CommonFooter', () => {
  it('should render component', () => {
    const header = render(<Footer />);
    expect(header).toBeDefined();
  });
});
