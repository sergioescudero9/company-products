import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  {
    title: 'Home',
    to: '/'
  },
  {
    title: 'Products',
    to: '/products'
  },
  {
    title: 'Clients',
    to: '/clients'
  },
  {
    title: 'Contact',
    to: '/contact'
  },
]

function Links(){
  return (
    <>
      {
        links.map(({ to, title }) => (
          <Link to={to}>{title}</Link>
        ))
      }
    </>
  );
}

export default Links;
