import {getArticlesFromProcessEnv} from '../../utils/getArticlesFromProcessEnv';
import {articlesContext} from './articlesContext';
import {Article} from '../../types/types';
import React, {useState} from 'react';

export const ArticleProvider: React.FC = ({children}) => {
  const [articles] = useState<Article[]>(getArticlesFromProcessEnv);

  return <articlesContext.Provider value={articles}>{children}</articlesContext.Provider>;
};
