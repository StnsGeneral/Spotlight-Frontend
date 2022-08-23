import {
  View,
  Text,
  ScrollView,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
// import DealCard from './DealCard';
import { DATA } from '../../constants';
import { ShoppingCartIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

const Deals = () => {
  return (
    // <ScrollView
    //   vertical
    //   // numColumns={2}
    //   showsVerticalScrollIndicator={false}
    //   contentContainerStyle={{
    //     paddingHorizontal: 15,
    //     paddingTop: 10,
    //     flexDirection: 'row',
    //     flexWrap: 'wrap',
    //     // justifyContent: 'center',
    //   }}>
    //   {DATA.map((deal) => {
    //     return (
    //       <DealCard
    //         imgUrl={deal.imgUrl}
    //         key={deal.id}
    //         title={deal.title}
    //         store={deal.store}
    //         price={deal.price}
    //         style={{ width: '50%' }}
    //       />
    //     );
    //   })}
    // </ScrollView>
    <SafeAreaView
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList
        data={DATA}
        numColumns={2}
        renderItem={DealCard}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const DealCard = ({ imgUrl, title, price, store, id }) => {
  // const navigation = useNavigation();
  return (
    <TouchableOpacity
      key={id}
      className="items-center pt-5"
      onPress={() => {
        navigation.navigate('ItemPage');
      }}>
      <Image
        source={{ uri: imgUrl }}
        className="h-20 w-20 rounded outline-black outline-8 "
      />
      <View className="flex-row items-center justify-around">
        <Text className="font-bold text-black">{title}</Text>
        <Text className=" font-light text-xs">{store}</Text>
      </View>
      <View className="flex-row items-center justify-around">
        <Text className="text-2xl">{price}</Text>
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
  );
};

export default Deals;
