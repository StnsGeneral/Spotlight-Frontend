import { View, Text, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Settings = () => {
  const navigation = useNavigation();
  return (
    <View className="items-center justify-center flex-1">
      <Text>Place Holder</Text>
      <Button
        title="Home"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </View>
  );
};

export default Settings;
