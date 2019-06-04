import React from 'react';
import { NavLink } from 'react-router-dom';
import { links } from '../../utils';

function Links() {
  return (
    <>
      {
        links.map(({ to, title, exact }) => (
          <NavLink exact={exact} activeClassName="is-active" className="header-links" key={to} to={to}>{title}</NavLink>
        ))
      }
    </>
  );
}

export default Links;
