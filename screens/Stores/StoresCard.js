import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const StoresCard = ({ store, imgUrl }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('StorePage', {
          store: [store.Id, store.imgUrl, store.storeName],
        })
      }
      className="items-center justify-center flex-1 mt-4">
      <View className="items-center flex-1 border h-20 w-40 rounded justify-center bg-gray-200">
        <Image source={{ uri: imgUrl }} style={styles.logo} />
      </View>
    </TouchableOpacity>
  );
};

export default StoresCard;

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
