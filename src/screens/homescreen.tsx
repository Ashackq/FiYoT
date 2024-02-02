import React from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';

import { Clubs, CTA, Header, Feeds, Events, Resources } from '../components';

const HomeScreen = ({ navigation }) => {
  const isLoading = false; // Placeholder for data loading state

  return (
    <View style={styles.container}>
      <Header />

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
};

export default HomeScreen;
