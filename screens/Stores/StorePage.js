import { Text, SafeAreaView, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const StorePage = ({ route }) => {
  const navigation = useNavigation();
  const storeId = route.params.item[0];
  const storeLogoUrl = route.params.item[1];
  const storeName = route.params.item[2];
  console.log(route);

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>
        Work in Progress for stores when pressed. Need backend information
        though.
      </Text>
      <Button
        onPress={() => {
          navigation.goBack();
        }}
        title="Go back"
      />
      <Text>{storeName}</Text>
      <Text>
        All data is being sent down the file structure. I just have the name of
        the store updating at this time.
      </Text>
    </SafeAreaView>
  );
};

export default StorePage;
