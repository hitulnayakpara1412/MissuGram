import React, {FC} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../constants/Colors';
import {heightPercentage} from '../utils/Scalling';
import {FONTS} from '../constants/Fonts';
import {goBack} from '../utils/NavigationUtil';

interface Props {
  title: string;
  backPress?: () => void;
}

const Header: FC<Props> = ({title, backPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.startingView}>
        <TouchableOpacity onPress={() => (backPress ? backPress() : goBack())}>
          <Ionicons name="chevron-back" color={Colors.black} size={26} />
        </TouchableOpacity>
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: heightPercentage(1),
    alignItems: 'center',
  },
  startingView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontFamily: FONTS.Medium,
    color: Colors.black,
    fontSize: heightPercentage(1.8),
  },
});

export default Header;
