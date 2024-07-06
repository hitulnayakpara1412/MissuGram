import React, {FC} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {heightPercentage, widthPercentage} from '../utils/Scalling';
import Profile from '../assets/images/profile1.png';
import {FONTS} from '../constants/Fonts';
import {Colors} from '../constants/Colors';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface Props {
  isDetailScreen?: boolean;
}

const Action: FC<Props> = ({isDetailScreen}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Image source={Profile} style={styles.profileImage} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Feather name="heart" color={Colors.white} size={25} />
        <Text style={styles.text}>25</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Fontisto name="comment" color={Colors.white} size={25} />
        <Text style={styles.text}>12</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <FontAwesome name="share" color={Colors.white} size={25} />
        <Text style={styles.text}>Share</Text>
      </TouchableOpacity>
      {isDetailScreen && (
        <>
          <TouchableOpacity style={styles.button}>
            <Feather name="download" color={Colors.white} size={25} />
            <Text style={styles.text}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <MaterialIcons name="delete" color={Colors.white} size={25} />
            <Text style={styles.text}>Delete</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: heightPercentage(2),
    right: widthPercentage(3),
    gap: heightPercentage(2),
  },
  button: {
    width: widthPercentage(12),
    height: widthPercentage(12),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: widthPercentage(6),
  },
  profileImage: {
    width: widthPercentage(12),
    height: widthPercentage(12),
    resizeMode: 'contain',
  },
  text: {
    fontFamily: FONTS.Regular,
    color: Colors.white,
    fontSize: heightPercentage(1.6),
  },
});

export default Action;
