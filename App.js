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

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <TailwindProvider>
            <Stack.Navigator
              screenOptions={{ headerShown: false }}
              initialRouteName={'Home'}>
              <Stack.Group>
                <Stack.Screen
                  name="Home"
                  component={HomeScreen}

                  // options={{ headerTitle: (props) => <Header {...props} /> }}
                />
              </Stack.Group>
              <Stack.Group screenOptions={{ presentation: 'card' }}>
                <Stack.Screen
                  name="Cart"
                  component={Cart}
                  // options={{ headerTitle: (props) => <Header {...props} /> }}
                />
                <Stack.Screen name="StorePage" component={StorePage} />
                <Stack.Screen name="Settings" component={Settings} />
                <Stack.Screen name="ItemPage" component={ItemPage} />
                <Stack.Screen name="SearchPage" component={SearchPage} />
              </Stack.Group>
            </Stack.Navigator>
          </TailwindProvider>
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}
