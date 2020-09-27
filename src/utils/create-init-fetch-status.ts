import {FetchStatusInit} from '../types/types';

export const createInitFetchStatus = (): FetchStatusInit => ({
  status: 'init',
  data: undefined,
});
