import React from 'react';

interface ErrorBoundaryState {
  error: any | null;
}

export class ErrorBoundary extends React.Component<{}, ErrorBoundaryState> {
  state = {error: null};

  componentDidCatch(error: Error) {
    this.setState({error});
  }

  render() {
    if (this.state.error) {
      return <div>Ошибка</div>; // eslint-disable-line
    } else {
      return this.props.children;
    }
  }
}
