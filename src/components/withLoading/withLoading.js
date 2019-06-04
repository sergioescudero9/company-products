import React from 'react';
import PropTypes from 'prop-types';
import MDSpinner from 'react-md-spinner';


const withLoading = (Component) => {
  function WithLoading({ loading, ...rest }) {
    return (
      <div>
        {
          loading
            ? <MDSpinner />
            : <Component {...rest} loading={loading} />
        }
      </div>
    );
  }
  return (
    <WithLoading />
  );
};

export default withLoading;
