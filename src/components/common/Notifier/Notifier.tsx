import React, {useContext, useEffect} from 'react';
import {withSnackbar} from 'notistack';
import {notifierContext} from '../../../context/notifier/notifierContext';

interface Props {
  enqueueSnackbar: any;
  closeSnackbar: any;
}

const NotifierBase: React.FC<Props> = ({enqueueSnackbar}) => {
  const {notifications, setNotifications} = useContext(notifierContext);

  useEffect(() => {
    if (notifications.length > 0) {
      for (const {message, variant} of notifications) {
        enqueueSnackbar(message, {variant});
      }

      setNotifications([]);
    }
  }, [enqueueSnackbar, notifications, setNotifications]);

  return null;
};

export const Notifier = withSnackbar(NotifierBase);
