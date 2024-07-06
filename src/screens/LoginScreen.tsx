import React, {FC} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Colors} from '../constants/Colors';
import Header from '../components/Header';
import {heightPercentage, widthPercentage} from '../utils/Scalling';
import {FONTS} from '../constants/Fonts';
import Button from '../components/Button';
import Facebook from '../assets/images/Facebook.png';
import Google from '../assets/images/Google.png';
import {resetAndNavigate} from '../utils/NavigationUtil';
import {
  GoogleSignin,
  isErrorWithCode,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen: FC = () => {
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
      <Header title="Sign In" />
      <View style={styles.inputContainer}>
        <TextInput
          label="Email"
          mode="outlined"
          outlineColor={Colors.border}
          activeOutlineColor={Colors.blue}
          style={styles.input}
        />
        <TextInput
          label="Password"
          mode="outlined"
          outlineColor={Colors.border}
          activeOutlineColor={Colors.blue}
          style={styles.input}
        />
      </View>
      <Button
        title="Sign In"
        style={{marginTop: heightPercentage(3)}}
        onPress={() => resetAndNavigate('BottomTab')}
      />
      <TouchableOpacity style={styles.forgotButton}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>
      <View style={styles.horizontalView}>
        <View style={styles.line} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.line} />
      </View>
      <TouchableOpacity style={styles.button}>
        <Image
          source={Facebook}
          resizeMode="contain"
          style={[styles.icon, {tintColor: Colors.white}]}
        />
        <Text style={styles.buttonText}>Continue with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: Colors.white,
            borderWidth: heightPercentage(0.1),
            borderColor: Colors.border,
          },
        ]}
        onPress={handleGoogleLogin}>
        <Image source={Google} resizeMode="contain" style={styles.icon} />
        <Text style={[styles.buttonText, {color: Colors.black}]}>
          Continue with Google
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: widthPercentage(3),
  },
  inputContainer: {
    gap: heightPercentage(1),
  },
  input: {
    backgroundColor: Colors.white,
    fontFamily: FONTS.Regular,
    color: Colors.black,
    fontSize: heightPercentage(1.6),
  },
  forgotButton: {
    alignSelf: 'center',
  },
  forgotText: {
    fontFamily: FONTS.SemiBold,
    color: Colors.black,
    fontSize: heightPercentage(1.6),
    marginVertical: heightPercentage(5),
  },
  horizontalView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: widthPercentage(5),
  },
  line: {
    backgroundColor: Colors.border,
    width: widthPercentage(40),
    height: heightPercentage(0.15),
  },
  orText: {
    fontFamily: FONTS.SemiBold,
    color: Colors.border,
    fontSize: heightPercentage(1.6),
  },
  button: {
    backgroundColor: Colors.blue,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: heightPercentage(2),
    borderRadius: heightPercentage(4),
    paddingLeft: widthPercentage(5),
    marginTop: heightPercentage(2),
  },
  icon: {
    flex: 1,
  },
  buttonText: {
    flex: 4,
    fontFamily: FONTS.Medium,
    color: Colors.white,
    fontSize: heightPercentage(1.8),
  },
});

export default LoginScreen;
