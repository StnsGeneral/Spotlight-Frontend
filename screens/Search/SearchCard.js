import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const SearchCard = ({ genre }) => {
  return (
    <TouchableOpacity className="items-center pt-5 mt-3 border-8 border-sky-900 flex-1 m-10">
      <Text>{genre}</Text>
    </TouchableOpacity>
  );
};

export default SearchCard;
