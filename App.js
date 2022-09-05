import { NavigationContainer } from '@react-navigation/native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Cart from './screens/Cart/Cart';
import { Provider } from 'react-redux';
import store from './stores/configureStore';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Settings from './screens/Menu/Settings';
import Header from './components/Header';

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
              </Stack.Group>
              <Stack.Group screenOptions={{ presentation: 'card' }}>
                <Stack.Screen name="Cart" component={Cart} />
                <Stack.Screen name="Settings" component={Settings} />
              </Stack.Group>
            </Stack.Navigator>
          </TailwindProvider>
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}
