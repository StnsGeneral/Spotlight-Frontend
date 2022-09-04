import {
  FlatList,
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import React from 'react';
import { DATA } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import { ShoppingCartIcon } from 'react-native-heroicons/solid';

const Deals = () => {
  const navigation = useNavigation();

  const DealCard = ({ item }) => {
    return (
      <View className="w-1/2 px-6">
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ItemPage', {
              item: [
                item.itemId,
                item.title,
                item.imgUrl,
                item.price,
                item.store,
              ],
            })
          }
          className="items-center pt-5">
          <Image
            source={{ uri: item.imgUrl }}
            className="h-20 w-20 rounded outline-black outline-8 "
          />
          <View className="flex-row items-center justify-around">
            <Text className="font-bold text-black text-base">{item.title}</Text>
            <Text className=" font-light text-xs">{item.store}</Text>
          </View>
          <View className="flex-row items-center justify-around">
            <Text className="text-2xl pr-3">{item.price}</Text>
            <View className="w-12 bg-sky-900 rounded items-center">
              <ShoppingCartIcon
                onPress={() => {
                  navigation.navigate('Cart');
                }}
                color="white"
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
      <FlatList
        data={DATA}
        numColumns={2}
        renderItem={DealCard}
        keyExtractor={(item) => item.itemId}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Deals;
