import React, {useState} from 'react';

import {notifierContext} from './notifierContext';

export type Notifications = Array<{message: string; variant: string}>;

export const NotifierProvider: React.FC = ({children}) => {
  const [notifications, setNotifications] = useState<Notifications>([]);

  const setSuccessMessage = (message: string) => {
    setNotifications(prev => [...prev, {message, variant: 'success'}]);
  };

  const setErrorMessage = (message: string) => {
    setNotifications(prev => [...prev, {message, variant: 'error'}]);
  };

  const setInfoMessage = (message: string) => {
    setNotifications(prev => [...prev, {message, variant: 'info'}]);
  };

  const value = {notifications, setNotifications, setSuccessMessage, setErrorMessage, setInfoMessage};

  return <notifierContext.Provider value={value}>{children}</notifierContext.Provider>;
};
