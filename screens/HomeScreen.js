import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
  Button,
} from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  AdjustmentsIcon,
  CurrencyDollarIcon,
  SearchIcon,
} from 'react-native-heroicons/outline';
import {
  ChevronUpIcon,
  DesktopComputerIcon,
  HomeIcon,
  MapIcon,
  MenuIcon,
  VolumeUpIcon,
} from 'react-native-heroicons/solid';
import Deals from '../components/Deals';
import * as NavigationBar from 'expo-navigation-bar';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [text, onChangeText] = React.useState(`<SearchIcon /> Search`);

  return (
    <SafeAreaView className="bg-sky-900 pt-5 flex-1">
      {/* {Header} */}
      <View className="flex-row items-center mx-2 space-x-3 pb-2">
        <View className="flex-row flex-1 space-x-5 items-center">
          <Text className="text-2xl text-white">Spotlight</Text>
          <Text className="text-sm font-bold text-black">$ 16.47</Text>

          <Text className="text-sm font-bold text-black">
            <CurrencyDollarIcon size={20} color="black" /> 3500
          </Text>

          <View className="h-7 w-7 rounded-full bg-gray-300 justify-center items-center">
            <VolumeUpIcon size={15} color="black" />
          </View>
        </View>

        <View className="h-9 w-14 justify-center items-center bg-gray-100 rounded shadow-md">
          <Text
            onPress={() => {
              navigation.navigate('Cart');
            }}
            className="text-black font-medium">
            Cart
          </Text>
        </View>
      </View>

      {/* {Search}  */}
      <View className="flex-row items-center space-x-2 pb-2 mx-2">
        <View className="flex-row space-x-2 flex-1 bg-gray-100 rounded-full">
          <TextInput
            className="text-black ml-2 flex-1"
            placeholder="Search"
            keyboardType="default"
            // value={text}
          />
        </View>
        <View className="bg-gray-300 rounded-md">
          <AdjustmentsIcon size={25} color="black" />
        </View>
      </View>

      {/* {Selector}  */}
      <View className="flex-row px-2">
        <View className="flex-row flex-1">
          <Button title="Retail" />
          <Button title="Commercial" />
        </View>
      </View>

      {/* {Body} */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingHorizontal: 100 }}>
        <Deals />
      </ScrollView>

      {/* {Footer} */}
      <View>
        <View className="flex-1 items-center">
          <Text>
            <ChevronUpIcon color="black" size={22} />
          </Text>
        </View>
        <View className="justify-around flex-row flex-1">
          <View>
            <Text>
              <HomeIcon color="black" size={22} />
            </Text>
          </View>
          <View>
            <Text>
              <SearchIcon color="black" size={22} />
            </Text>
          </View>
          <View>
            <Text>
              <MapIcon color="black" size={22} />
            </Text>
          </View>
          <View>
            <Text>
              <DesktopComputerIcon color="black" size={22} />
            </Text>
          </View>
          <View>
            <Text>
              <MenuIcon color="black" size={22} />
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
