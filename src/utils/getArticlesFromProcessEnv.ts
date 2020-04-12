import {Article} from '../types/types';

export const getArticlesFromProcessEnv = (): Article[] => {
  return (process.env.__env__ as unknown) as Article[];
};
