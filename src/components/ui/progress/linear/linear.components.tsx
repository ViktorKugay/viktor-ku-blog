import React from 'react';
import cn from 'classnames';
import {LinearProgress} from '@material-ui/core';

import s from './linear.module.scss';

interface Props {
  margin: 'none' | 'dense' | 'normal';
}

export const ProgressLinear: React.FC<Props> = ({margin}) => (
  <div className={cn(s.root, {[s[`margin_${margin}`]]: margin})}>
    <LinearProgress color="secondary" />
  </div>
);
