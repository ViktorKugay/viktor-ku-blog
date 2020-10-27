import {FetchStatusInit} from '../types/types';

export const createInitFetchStatus = <T>(data: T): FetchStatusInit<T> => ({
  status: 'init',
  data,
});
