import React from 'react';
import {render} from '@testing-library/react';

import {Seo} from './Seo';

const props = {
  title: 'test',
  description: 'description',
};

describe('CommonSeo', () => {
  it('should render component', () => {
    const header = render(<Seo {...props} />);
    expect(header).toBeDefined();
  });
});
