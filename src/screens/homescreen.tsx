import React from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';

import { Clubs, CTA, Header, Feeds, Events, Resources } from '../components';

const HomeScreen = ({ navigation }) => {
  const isLoading = false; // Placeholder for data loading state

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Header />
      </View>

      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <ScrollView>
          <Feeds />
          <Resources />
          <Events />
          <Clubs />
          <CTA />
        </ScrollView>
      )}
    </View>
  );
};

// Add your main container styles here
const styles = {
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    padding: 20,
  },
  head: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 1000,
  },
};

export default HomeScreen;
