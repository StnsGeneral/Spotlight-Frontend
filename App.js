import { NavigationContainer } from '@react-navigation/native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Cart from './screens/Cart/Cart';
import { Provider } from 'react-redux';
import store from './stores/configureStore';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import StorePage from './screens/Stores/StorePage';
import Settings from './screens/Menu/Settings';
import Header from './components/Header';
import ItemPage from './screens/Deals/ItemPage';
import SearchPage from './screens/Search/SearchPage';
import Deals from './screens/Deals/Deals';
import CalendarPage from './screens/Menu/Pages/Calendar';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <TailwindProvider>
            <Stack.Navigator
              screenOptions={{ headerShown: false }}
              initialRouteName={'Home'}
              options={{ headerTitle: (props) => <Header {...props} /> }}>
              <Stack.Group>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Deals" component={Deals} />
                <Stack.Screen name="Calendar" component={CalendarPage} />
              </Stack.Group>
              <Stack.Group screenOptions={{ presentation: 'card' }}>
                <Stack.Screen
                  name="ItemPage"
                  component={ItemPage}
                  getId={({ params }) => params.itemId}
                />
                <Stack.Screen name="Cart" component={Cart} />
                <Stack.Screen name="StorePage" component={StorePage} />
                <Stack.Screen name="Settings" component={Settings} />
                <Stack.Screen name="SearchPage" component={SearchPage} />
              </Stack.Group>
            </Stack.Navigator>
          </TailwindProvider>
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}
