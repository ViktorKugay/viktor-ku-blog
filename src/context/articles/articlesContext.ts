import {createContext} from 'react';
import {Article} from '../../types/types';

type Context = Article[];

export const articlesContext = createContext(([] as unknown) as Context);
