import React from 'react';
import PropTypes from 'prop-types';

export class ErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    if (this.props.onError) {
      this.props.onError(error, errorInfo.componentStack);
    }
  }

  render() {
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  onError: PropTypes.func,
};
