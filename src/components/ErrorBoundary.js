import React from 'react';
import PropTypes from 'prop-types';

export class ErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    const {onError} = this.props;
    if (onError) {
      onError(error, errorInfo.componentStack);
    }
  }

  render() {
    const {children} = this.props;
    return children;
  }
}

ErrorBoundary.propTypes = {
  onError: PropTypes.func.isRequired,
};
