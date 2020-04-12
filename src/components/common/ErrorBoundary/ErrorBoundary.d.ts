import React from 'react';
interface ErrorBoundaryState {
  error: any | null;
}
export declare class ErrorBoundary extends React.Component<{}, ErrorBoundaryState> {
  state: {
    error: any;
  };
  componentDidCatch(error: Error): void;
  render(): {};
}
export {};
