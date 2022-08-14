const screens = {
  main_layout: 'HomeScreen',
  cart: 'Cart',
  map: 'Map',
  retail: 'Deals',
  commercial: 'Commercial',
  stores: 'Stores',
  menu: 'Menu',
  home: 'Home',
  search: 'Search',
};

const bottom_tabs = [
  {
    id: 0,
    label: screens.home,
  },
  {
    id: 1,
    label: screens.search,
  },
  {
    id: 2,
    label: screens.map,
  },
  {
    id: 3,
    label: screens.stores,
  },
  {
    id: 4,
    label: screens.menu,
  },
];

export default {
  screens,
  bottom_tabs,
};
