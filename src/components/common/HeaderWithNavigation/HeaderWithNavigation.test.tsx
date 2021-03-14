import {render} from '@testing-library/react';
import {HeaderWithNavigation} from './HeaderWithNavigation';
import React from 'react';

describe('CommonHeader', () => {
  it('should render component', () => {
    const header = render(<HeaderWithNavigation />);
    expect(header).toBeDefined();
  });
});
