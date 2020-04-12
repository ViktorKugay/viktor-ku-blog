import {Dispatch, SetStateAction} from 'react';
import {Notifications} from './notifierProvider';
interface Context {
  notifications: Notifications;
  setInfoMessage(message: string): void;
  setErrorMessage(message: string): void;
  setSuccessMessage(message: string): void;
  setNotifications: Dispatch<SetStateAction<Notifications>>;
}
export declare const notifierContext: import('react').Context<Context>;
export {};
