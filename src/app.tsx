/* eslint-disable prettier/prettier */
import React from 'react';
//nav
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//import { StyleSheet } from 'react-native';
import {Home} from './screens';
import {Loading} from './components';

export type RootStackParamList = {
  Home: undefined;
  Loading: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading">
        <Stack.Group screenOptions={{headerShown: false, animation: 'fade'}}>
          <Stack.Screen name="Loading" component={Loading} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
