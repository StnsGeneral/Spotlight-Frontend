import { View } from 'react-native';
import React from 'react';
import { connect } from 'react-redux';
import { setSelectedTab } from '../stores/tab/tabActions';
import { Header, Footer } from '../components';

const HomeScreen = ({ selectedTab, setSelectedTab }) => {
  return (
    <View className="flex-1 w-screen bg-white">
      {/* {Header} */}
      <Header selectedTab={selectedTab} />

      {/* {Content} */}
      {/* Auto rendered through the footer component */}

      {/* {Footer} */}
      <Footer />

    </View>
  );
};

function mapStateToProps(state) {
  return {
    selectedTab: state.tabReducer.selectedTab,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSelectedTab: (selectedTab) => {
      return dispatch(setSelectedTab(selectedTab));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
