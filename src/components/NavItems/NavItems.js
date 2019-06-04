import React from 'react';
import { Link } from 'react-router-dom';
import { FontIcon, Avatar } from 'react-md';
import { validCategories } from '../../utils';

const navItems = [
  <>
    <h2><Avatar icon={<FontIcon>view_stream</FontIcon>} /></h2>
  </>,
  {
    divider: true,
  },
  <>
    <h2><Avatar icon={<FontIcon>build</FontIcon>} /></h2>
    <h2><Avatar icon={<FontIcon>computer</FontIcon>} /></h2>
    <h2><Avatar icon={<FontIcon>folder</FontIcon>} /></h2>
    {/* {
      links.map(({ to, title }) => (
        <Link className="header-links" key={to} to={to}>{title}</Link>
      ))
    } */}
  </>,
];

export default navItems;
