import React, {FC} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  GoogleSignin,
  isErrorWithCode,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {Colors} from '../constants/Colors';
import Logo from '../assets/images/Logo.png';
import Email from '../assets/images/Email.png';
import Facebook from '../assets/images/Facebook.png';
import Google from '../assets/images/Google.png';
import {heightPercentage, widthPercentage} from '../utils/Scalling';
import {FONTS} from '../constants/Fonts';
import {navigate, resetAndNavigate} from '../utils/NavigationUtil';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OptionScreen: FC = () => {
  const handleGoogleLogin = async () => {
    GoogleSignin.configure({
      scopes: ['email', 'profile'],
      webClientId:
        '431589408164-4lfnnskn24uufu9f35hmp62pi1ile2rt.apps.googleusercontent.com',
      iosClientId:
        '431589408164-c5tdaoaf8clllrb9oi71g9otkbaok918.apps.googleusercontent.com',
    });
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      AsyncStorage.setItem('userInfo', JSON.stringify(userInfo?.user));
      resetAndNavigate('BottomTab');
    } catch (error) {
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.SIGN_IN_CANCELLED:
            console.log('User Cancelled the Login Flow');
            break;
          case statusCodes.IN_PROGRESS:
            console.log('Signing In');
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            console.log('Play Services Not Available or Outdated');
            break;
          default:
        }
      } else {
        Alert.alert('Something went wrong');
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={Logo} resizeMode="contain" />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('LoginScreen')}>
          <Image source={Email} resizeMode="contain" style={styles.icon} />
          <Text style={styles.buttonText}>Continue with Email</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('LoginScreen')}>
          <Image source={Facebook} resizeMode="contain" style={styles.icon} />
          <Text style={styles.buttonText}>Continue with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleGoogleLogin}>
          <Image source={Google} resizeMode="contain" style={styles.icon} />
          <Text style={styles.buttonText}>Continue with Google</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.footerText}>
        Already have an account?{' '}
        <Text onPress={() => navigate('LoginScreen')}>Sign In</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    paddingHorizontal: widthPercentage(5),
    gap: heightPercentage(2),
    justifyContent: 'center',
  },
  button: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: heightPercentage(2),
    borderRadius: heightPercentage(4),
    paddingLeft: widthPercentage(5),
  },
  icon: {
    flex: 1,
  },
  buttonText: {
    flex: 4,
    fontFamily: FONTS.Medium,
    color: Colors.black,
    fontSize: heightPercentage(1.8),
  },
  footerText: {
    fontFamily: FONTS.Regular,
    color: Colors.white,
    fontSize: heightPercentage(1.6),
    textAlign: 'center',
    marginBottom: heightPercentage(2),
  },
});

export default OptionScreen;
