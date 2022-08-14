import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const StoresCard = ({ store, imgUrl }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('StorePage')}>
      <View className="items-center mt-3 flex-1 m-10 border h-20 w-36 rounded justify-center">
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
