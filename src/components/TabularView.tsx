import React, {FC} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {heightPercentage, widthPercentage} from '../utils/Scalling';
import {FONTS} from '../constants/Fonts';
import {Colors} from '../constants/Colors';
import Square from '../assets/images/square.png';
import Heart from '../assets/images/profile_heart.png';

interface Props {
  activeTab: number;
  firstTabPress: () => void;
  secondTabPress: () => void;
}

const TabularView: FC<Props> = ({firstTabPress, activeTab, secondTabPress}) => {
  return (
    <View style={styles.tabularContainer}>
      <TouchableOpacity
        style={[
          styles.tabularView,
          {borderBottomWidth: activeTab === 1 ? heightPercentage(0.2) : 0},
        ]}
        onPress={firstTabPress}>
        <Image source={Square} style={styles.iconStyle} />
        <Text style={styles.counterTitleText}>Posts</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.tabularView,
          {borderBottomWidth: activeTab === 2 ? heightPercentage(0.2) : 0},
        ]}
        onPress={secondTabPress}>
        <Image source={Heart} style={styles.iconStyle} />
        <Text style={styles.counterTitleText}>Liked</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabularContainer: {
    flexDirection: 'row',
  },
  tabularView: {
    flex: 1,
    paddingVertical: heightPercentage(1),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: widthPercentage(2),
  },
  iconStyle: {
    width: widthPercentage(6),
    height: widthPercentage(6),
    resizeMode: 'contain',
  },
  counterTitleText: {
    fontFamily: FONTS.Regular,
    color: Colors.black,
    fontSize: heightPercentage(1.6),
  },
});

export default TabularView;
