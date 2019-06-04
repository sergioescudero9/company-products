const links = [
  {
    title: 'Home',
    to: '/',
    exact: true,
  },
  {
    title: 'Products',
    to: '/products',
  },
  {
    title: 'Clients',
    to: '/clients',
  },
  {
    title: 'Contact',
    to: '/contact',
  },
];

const validCategories =  [
  'TECH', 'SERVICES', 'OFFICE',
];
const validCategoriesWithIcon = [
  {
    name: 'TECH',
    icon: 'computer',
  },
  {
    name: 'SERVICES',
    icon: 'build',

  },
  {
    name: 'OFFICE',
    icon: 'folder',
  },
];

export { links, validCategories, validCategoriesWithIcon };
