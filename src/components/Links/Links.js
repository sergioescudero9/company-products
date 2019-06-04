import React from 'react';
import { Link } from 'react-router-dom';
import links from '../../utils/links';

function Links() {
  console.log(links);
  return (
    <>
      {
        links.map(({ to, title }) => (
          <Link className="header-links" key={to} to={to}>{title}</Link>
        ))
      }
    </>
  );
}

export default Links;
