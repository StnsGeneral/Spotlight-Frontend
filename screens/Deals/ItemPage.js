import { View, Text, Button, SafeAreaView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const ItemPage = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Placeholder. Need backend.</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default ItemPage;
