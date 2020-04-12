import {createContext, Dispatch, SetStateAction} from 'react';
import {Notifications} from './notifierProvider';

interface Context {
  notifications: Notifications;
  setInfoMessage(message: string): void;
  setErrorMessage(message: string): void;
  setSuccessMessage(message: string): void;
  setNotifications: Dispatch<SetStateAction<Notifications>>;
}

export const notifierContext = createContext(([] as unknown) as Context);
