/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Loading'>;

const LoadingScreen = ({navigation}: HomeProps) => {
  // const storeProgressData = async data => {
  //   try {
  //     await AsyncStorage.setItem('progress', JSON.stringify(data));
  //   } catch (error) {
  //     console.error('Error saving progress data:', error);
  //   }
  // };
  // useEffect(() => {
  //   const loadProgressData = async () => {
  //     try {
  //       // Load the progress data from AsyncStorage
  //       const storedProgress = await AsyncStorage.getItem('progress');
  //       if (storedProgress) {
  //         const progressData = JSON.parse(storedProgress);

  //         // Navigate to the Home screen with the loaded data
  //         setTimeout(() => {
  //           navigation.replace('Home', {
  //             totalcount: progressData.totalcount,
  //             beadcount: progressData.beadcount,
  //             target: progressData.target,
  //             mala: progressData.mala,
  //             esttime: progressData.esttime,
  //             elapsedtime: progressData.elapsedtime,
  //             languageindex: progressData.languageindex,
  //             malatime: progressData.malatime,
  //           });
  //         }, 2000);
  //       } else {
  //         storeProgressData({
  //           target: target,
  //           totalcount: totalcount,
  //           mala: mala,
  //           beadcount: beadcount,
  //           esttime: esttime,
  //           elapsedtime: elapsedtime,
  //           languageindex: i,
  //           malatime: malatime,
  //         });
  //         loadProgressData();
  //       }
  //     } catch (error) {
  //       console.error('Error loading progress data:', error);
  //     }
  //   };

  //   // Call the function to load progress data
  //   loadProgressData();
  // }, [navigation]);
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000);
  }, [navigation]);
  return (
    <View style={styles.container}>
      {/* <Image
        style={styles.image}
        source={require('../devdata/assets/loading.jpg')}
        resizeMode="cover"
      /> */}
      <Text style={styles.appby}>Welcome to FiYoT</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  appby: {
    position: 'absolute',
    top: 220,
    fontWeight: 'bold',
    fontSize: 24,
    color: 'red',
  },
});

export default LoadingScreen;
