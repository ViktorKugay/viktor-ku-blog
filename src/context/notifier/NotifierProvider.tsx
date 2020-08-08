import React, {useState, Dispatch, SetStateAction} from 'react';
import {notifierContext} from './notifierContext';

export type Notifications = Array<{message: string; variant: string}>;

const transform = (setNotifications: Dispatch<SetStateAction<Notifications>>) => ({
  setSuccessMessage(message: string) {
    setNotifications((prev) => [...prev, {message, variant: 'success'}]);
  },

  setErrorMessage(message: string) {
    setNotifications((prev) => [...prev, {message, variant: 'error'}]);
  },

  setInfoMessage(message: string) {
    setNotifications((prev) => [...prev, {message, variant: 'info'}]);
  },
});

export const NotifierProvider: React.FC = ({children}) => {
  const [notifications, setNotifications] = useState<Notifications>([]);

  const value = {notifications, setNotifications, ...transform(setNotifications)};

  return <notifierContext.Provider value={value}>{children}</notifierContext.Provider>;
};
