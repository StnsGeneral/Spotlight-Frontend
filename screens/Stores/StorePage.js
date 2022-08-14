import { View, Text, SafeAreaView, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const StorePage = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>
        Work in Progress for stores when pressed. Need backend information
        though.
      </Text>
      <Button
        onPress={() => {
          navigation.navigate('Home');
        }}
        title="Home"
      />
    </SafeAreaView>
  );
};

export default StorePage;
