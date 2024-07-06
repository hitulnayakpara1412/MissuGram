import {Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const widthPercentage = (size: number): number => {
  return wp(size);
};
export const heightPercentage = (size: number): number => {
  return hp(size);
};

export const screenWidth: number = Dimensions.get('window').width;
export const screenHeight: number = Dimensions.get('window').height;
