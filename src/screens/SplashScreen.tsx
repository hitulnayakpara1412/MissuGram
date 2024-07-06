import React, {FC, useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Logo from '../assets/images/Logo.png';
import {Colors} from '../constants/Colors';
import {resetAndNavigate} from '../utils/NavigationUtil';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen: FC = () => {
  useEffect(() => {
    isSignedIn();
  }, []);

  const isSignedIn = async () => {
    const data = await AsyncStorage.getItem('userInfo');
    setTimeout(async () => {
      if (data) {
        resetAndNavigate('BottomTab');
      } else {
        resetAndNavigate('OptionScreen');
      }
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <Image source={Logo} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blue,
  },
});

export default SplashScreen;
