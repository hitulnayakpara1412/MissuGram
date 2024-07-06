import React, {FC} from 'react';
import {Text, TouchableOpacity, StyleSheet, ViewStyle} from 'react-native';
import {Colors} from '../constants/Colors';
import {heightPercentage} from '../utils/Scalling';
import {FONTS} from '../constants/Fonts';

interface Props {
  title: string;
  style?: ViewStyle;
  onPress: () => void;
}

const Button: FC<Props> = ({title, style, onPress}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.titleText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: heightPercentage(2),
    borderRadius: heightPercentage(4),
  },
  titleText: {
    fontFamily: FONTS.SemiBold,
    color: Colors.white,
    fontSize: heightPercentage(1.6),
  },
});

export default Button;
