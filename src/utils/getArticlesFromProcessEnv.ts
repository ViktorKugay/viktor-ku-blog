import {Article} from '../types/types';

export const getArticlesFromProcessEnv = (): Article[] => {
  const content = process.env.__env__;

  if (typeof content === 'string') {
    return JSON.parse(content) as Article[];
  }

  return (content as unknown) as Article[];
};
