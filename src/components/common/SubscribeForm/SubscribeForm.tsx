import React from 'react';
import {TextField} from '@material-ui/core';
import {Text} from '../../ui/Text/Text';
import {Button} from '../../ui/Button/Button';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import s from './SubscribeForm.css';

import c from './config.json';

export const SubscribeForm: React.FC = () => {
  const handleSubmit = () => {
    window.open('https://tinyletter.com/Viktor57', 'popupwindow', 'scrollbars=yes,width=800,height=600');
  };

  return (
    <form
      method="post"
      className={s.root}
      target="popupwindow"
      onSubmit={handleSubmit}
      action="https://tinyletter.com/Viktor57"
    >
      <div className={s.title_container}>
        <MailOutlineIcon />
        <Text mod="h3" weight="500" className={s.title}>
          {c.SubscribeForm.title}
        </Text>
      </div>
      <TextField margin="dense" label="Your mail addres" color="secondary" variant="outlined" fullWidth />
      <Button color="purple" className={s.button} fullWidth>
        {c.SubscribeForm.buttonMessage}
      </Button>

      <Text mod="p" weight="400" className={s.description}>
        {c.SubscribeForm.description}
      </Text>
    </form>
  );
};
