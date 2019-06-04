import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-md';
import PropTypes from 'prop-types';
import { links } from '../../utils';

function HardCodePage({ pageName }) {
  return (
    <>
      <h1>{pageName}</h1>
      {
        links.map(({ to, title }) => (
          <NavLink className="app-links" key={to} to={to}>
            <Button flat>{title}</Button>
          </NavLink>
        ))
      }
    </>
  );
}

HardCodePage.propTypes = {
  pageName: PropTypes.string.isRequired,
};


export default HardCodePage;
