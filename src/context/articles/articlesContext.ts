import {createContext} from 'react';
import {Article} from '../../types/types';

interface Context {
  articles: Article[];
}

export const articlesContext = createContext(([] as unknown) as Context);
