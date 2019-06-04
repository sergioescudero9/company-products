import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontIcon, Avatar, ListItem } from 'react-md';
import { validCategoriesWithIcon } from '../../utils';

{/* <h2><Avatar icon={<FontIcon>build</FontIcon>} /></h2>
<h2><Avatar icon={<FontIcon>computer</FontIcon>} /></h2>
<h2><Avatar icon={<FontIcon>folder</FontIcon>} /></h2> */}

const navItems = [
  {
    primaryText: 'Categories',
  },
  <NavLink className="aside-links" exact activeClassName="is-active" to="/products">
    <ListItem
      primaryText="All"
      leftIcon={<FontIcon>view_stream</FontIcon>}
    />
  </NavLink>,
  {
    divider: true,
  },
  ...validCategoriesWithIcon.map(({ name, icon }) => (
    <NavLink className="aside-links" activeClassName="is-active" to={`/products/${name.toLowerCase()}`}>
      <ListItem
        primaryText={name}
        leftIcon={<FontIcon>{icon}</FontIcon>}
      />
    </NavLink>
  )),
];

export default navItems;
