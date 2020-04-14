import React from 'react';
import {Text} from '../../ui/Text/Text';
import {TextField} from '@material-ui/core';
import {Button} from '../../ui/Button/Button';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import s from './SubscribeForm.css';

import c from './config.json';

const view = 'scrollbars=yes,width=800,height=600';
const action = 'https://tinyletter.com/Viktor57';
const target = 'popupwindow';
const method = 'post';

export const SubscribeForm: React.FC = () => {
  const handleSubmit = () => {
    window.open(action, target, view);
  };

  return (
    <form method={method} action={action} target={target} className={s.root} onSubmit={handleSubmit}>
      <div className={s.title_container}>
        <MailOutlineIcon />
        <Text mod="h3" weight="500" className={s.title}>
          {c.SubscribeForm.title}
        </Text>
      </div>
      <TextField margin="dense" label={c.SubscribeForm.textFieldLabel} color="secondary" variant="outlined" fullWidth />
      <Button color="purple" className={s.button} fullWidth>
        {c.SubscribeForm.buttonMessage}
      </Button>

      <Text mod="p" weight="400" className={s.description}>
        {c.SubscribeForm.description}
      </Text>
    </form>
  );
};
