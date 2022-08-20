import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from '../screens/Search/Search';
import Deals from '../screens/Deals/Deals';
import Map from '../screens/Map/Map';
import Stores from '../screens/Stores/Stores';
import Menu from '../screens/Menu/Menu';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Footer = () => {
  return (
    <Tab.Navigator
      initialRouteName="Deals"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Deals') {
            iconName = focused ? 'cart-sharp' : 'cart-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search-sharp' : 'search-outline';
          } else if (route.name == 'Map') {
            iconName = focused ? 'map-sharp' : 'map-outline';
          } else if (route.name == 'Stores') {
            iconName = focused ? 'laptop-sharp' : 'laptop-outline';
          } else if (route.name == 'Menu') {
            iconName = focused ? 'menu-sharp' : 'menu-outline';
          }

          return <Ionicons name={iconName} size={22} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen name="Deals" component={Deals} />
      <Tab.Screen name="Search" component={Search} />
      {/* <Tab.Screen name="Map" component={Map} /> */}
      <Tab.Screen name="Stores" component={Stores} />
      <Tab.Screen name="Menu" component={Menu} />
    </Tab.Navigator>
  );
};

export default Footer;
