import React from 'react';
import Spinner from '../Spinner/spinner.component';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <WrappedComponent {...otherProps} />
  )
}

export default WithSpinner;