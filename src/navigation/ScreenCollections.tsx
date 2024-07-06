import LoginScreen from '../screens/LoginScreen';
import OptionScreen from '../screens/OptionScreen';
import PostDetailScreen from '../screens/PostDetailScreen';
import SplashScreen from '../screens/SplashScreen';
import BottomTab from './BottomTab';

export const stackCollection = [
  {
    name: 'SplashScreen',
    component: SplashScreen,
  },
  {
    name: 'OptionScreen',
    component: OptionScreen,
  },
  {
    name: 'LoginScreen',
    component: LoginScreen,
  },
  {
    name: 'PostDetailScreen',
    component: PostDetailScreen,
  },
  {
    name: 'BottomTab',
    component: BottomTab,
  },
];
