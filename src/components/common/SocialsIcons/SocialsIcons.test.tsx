import {render} from '@testing-library/react';
import {SocialsIcons} from './SocialsIcons';
import React from 'react';

describe('CommonSocials', () => {
  it('should render component', () => {
    const header = render(<SocialsIcons />);
    expect(header).toBeDefined();
  });
});
