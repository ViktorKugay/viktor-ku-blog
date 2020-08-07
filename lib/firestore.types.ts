export interface Metrics {
  views: number;
  likes: number;
}

export type MetricsDocument = Record<string, Metrics>;
