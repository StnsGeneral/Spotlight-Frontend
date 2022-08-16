import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const SearchCard = ({ genre }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className="items-center pt-5 mt-3 border-8 border-sky-900 flex-1 m-10"
      onPress={() => {
        navigation.navigate('SearchPage');
      }}>
      <Text>{genre}</Text>
    </TouchableOpacity>
  );
};

export default SearchCard;
