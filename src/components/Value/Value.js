import React from 'react';
import PropTypes from 'prop-types';

function Value({ name, value }) {
  return (
    <div>
      <span className="bold-card-description">
        {name}
        :
      </span>
      <span>{value}</span>
    </div>
  );
}


Value.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default Value;
