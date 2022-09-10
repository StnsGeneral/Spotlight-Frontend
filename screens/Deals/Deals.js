import {
  FlatList,
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { DATA, CART } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import { ShoppingCartIcon } from 'react-native-heroicons/solid';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Deals = () => {
  const navigation = useNavigation();
  const listRef = useRef(null);
  const [contentVerticalOffset, setContentVerticalOffset] = useState(0);
  const CONTENT_OFFSET_THRESHOLD = 300;

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
                  CART.push(item);
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
        ref={listRef}
        data={DATA}
        numColumns={2}
        renderItem={DealCard}
        keyExtractor={(item) => item.itemId}
        showsVerticalScrollIndicator={false}
        onScroll={(event) => {
          setContentVerticalOffset(event.nativeEvent.contentOffset.y);
        }}
      />
      {contentVerticalOffset > CONTENT_OFFSET_THRESHOLD && (
        <Ionicons
          name="chevron-up-outline"
          size={22}
          containerStyle={styles.scrollTopButton}
          onPress={() => {
            listRef.current.scrollToOffset({ offset: 0, animated: true });
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default Deals;

const styles = StyleSheet.create({
  scrollTopButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
