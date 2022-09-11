import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from '../screens/Search/Search';
import Deals from '../screens/Deals/Deals';
import Map from '../screens/Map/Map';
import Stores from '../screens/Stores/Stores';
import Menu from '../screens/Menu/Menu';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CalendarPage from '../screens/Menu/Pages/Calendar';
import SearchPage from '../screens/Search/SearchPage';
import ItemPage from '../screens/Deals/ItemPage';
import StorePage from '../screens/Stores/StorePage';
import { setSelectedTab, selectedTab } from '../stores/tab/tabActions';
import { connect } from 'react-redux';
import { Icon } from '@rneui/base';

const Tab = createBottomTabNavigator();

const Footer = ({ setSelectedTab }) => {
  return (
    <Tab.Navigator
      initialRouteName="Deals"
      backBehavior="history"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Deals') {
            // setSelectedTab('deals');
            iconName = focused ? 'cart-sharp' : 'cart-outline';
          } else if (route.name === 'Search') {
            // setSelectedTab('search');
            iconName = focused ? 'search-sharp' : 'search-outline';
          } else if (route.name == 'Map') {
            // setSelectedTab('map');
            iconName = focused ? 'map-sharp' : 'map-outline';
          } else if (route.name == 'Stores') {
            // setSelectedTab('stores');
            iconName = focused ? 'laptop-sharp' : 'laptop-outline';
          } else if (route.name == 'Menu') {
            // setSelectedTab('menu');
            iconName = focused ? 'menu-sharp' : 'menu-outline';
          }

          return <Icon name={iconName} size={22} type="ionicon" />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarStyle: { backgroundColor: '#0C4A6E' },
      })}>
      <Tab.Group>
        <Tab.Screen name="Deals" component={Deals} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Stores" component={Stores} />
        <Tab.Screen name="Menu" component={Menu} />
      </Tab.Group>
      <Tab.Group>
        <Tab.Screen
          name="Calendar"
          component={CalendarPage}
          options={{ tabBarButton: () => null }}
        />
        <Tab.Screen
          name="SearchPage"
          component={SearchPage}
          options={{ tabBarButton: () => null }}
        />
        <Tab.Screen
          name="ItemPage"
          component={ItemPage}
          getId={({ params }) => params.itemId}
          options={{ tabBarButton: () => null }}
        />
        <Tab.Screen
          name="StorePage"
          component={StorePage}
          options={{ tabBarButton: () => null }}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
};

function mapStateToProps(state) {
  return {
    selectedTab: state.tabReducer.selectedTab,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSelectedTab: (selectedTab) => {
      return dispatch(setSelectedTab(selectedTab));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
