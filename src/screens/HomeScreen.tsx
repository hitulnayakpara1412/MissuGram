import React, {FC} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import Background from '../assets/images/post_background.png';
import PostText from '../assets/images/post_text.png';
import {Colors} from '../constants/Colors';
import {FONTS} from '../constants/Fonts';
import {heightPercentage, widthPercentage} from '../utils/Scalling';
import Action from '../components/Action';
import {navigate} from '../utils/NavigationUtil';

const HomeScreen: FC = () => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => navigate('PostDetailScreen')}>
        <ImageBackground source={Background} style={styles.backImage}>
          <TouchableOpacity style={styles.addPostButton}>
            <Text style={styles.addPostText}>Add Post</Text>
          </TouchableOpacity>
          <Image source={PostText} resizeMode="contain" />
          <Action />
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backImage: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addPostButton: {
    backgroundColor: Colors.blue,
    paddingVertical: heightPercentage(1),
    paddingHorizontal: widthPercentage(4),
    borderRadius: heightPercentage(4),
    borderWidth: heightPercentage(0.1),
    borderColor: Colors.white,
    position: 'absolute',
    top: heightPercentage(2),
    right: widthPercentage(3),
  },
  addPostText: {
    fontFamily: FONTS.Regular,
    fontSize: heightPercentage(1.6),
    color: Colors.white,
  },
});

export default HomeScreen;
