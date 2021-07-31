import React from 'react';

import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from './error-boundary.styles';

class ErrorBoundary extends React.Component {

  constructor() {
    super();

    this.state = {
      hasErrored: false
    }
  }

  static getDerivedStateFromError(error) {
    // Process the error here.

    return { hasErrored: true };
  }

  componentDidCatch(erroe, info) {
    // Do some side effects for the error, e.g log it
    
    console.log(error, info);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/QIxIKBH.png' />
          <ErrorImageText>
            Sorry, This page is broken.
          </ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    // render wrapped components normally
    return this.props.children;
  }
}

export default ErrorBoundary;