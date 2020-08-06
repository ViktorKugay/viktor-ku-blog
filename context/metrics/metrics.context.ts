import {createContext, useContext} from 'react';
import {transfrom} from './metrics.provider';

export const metricsContext = createContext({} as ReturnType<typeof transfrom>);

export const useMetrics = () => useContext(metricsContext);
