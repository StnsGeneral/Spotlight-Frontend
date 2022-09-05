import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { CurrencyDollarIcon, VolumeUpIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

const Header = ({ selectedScreen }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-sky-900 pt-6 flex-row w-full items-center">
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
    </SafeAreaView>
  );
};

export default Header;
