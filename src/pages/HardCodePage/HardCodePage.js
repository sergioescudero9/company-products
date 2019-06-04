import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import links from '../../utils/links';

function HardCodePage({ pageName }) {
  return (
    <>
      <h1>{pageName}</h1>
      {
        links.map(({ to, title }) => (
          <Link key={to} to={to}>{title}</Link>
        ))
      }
    </>
  );
}

HardCodePage.propTypes = {
  pageName: PropTypes.string.isRequired,
};


export default HardCodePage;
