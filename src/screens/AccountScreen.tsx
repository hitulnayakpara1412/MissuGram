import React, {FC, useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, Alert} from 'react-native';
import {Colors} from '../constants/Colors';
import {FONTS} from '../constants/Fonts';
import {heightPercentage, widthPercentage} from '../utils/Scalling';
import Profile from '../assets/images/profile1.png';
import Button from '../components/Button';
import TabularView from '../components/TabularView';
import PostGrid from '../components/PostGrid';
import Post1 from '../assets/images/post1.png';
import Post2 from '../assets/images/post2.png';
import Post3 from '../assets/images/post3.png';
import Post4 from '../assets/images/post4.png';
import {resetAndNavigate} from '../utils/NavigationUtil';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DATA = [
  {
    id: 1,
    image: Post1,
  },
  {
    id: 2,
    image: Post2,
  },
  {
    id: 3,
    image: Post3,
  },
  {
    id: 3,
    image: Post4,
  },
];

interface User {
  id: string;
  name: string | null;
  email: string;
  photo: string | null;
  familyName: string | null;
  givenName: string | null;
}

const AccountScreen: FC = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [userInfo, setUserInfo] = useState<User | null>(null);

  useEffect(() => {
    getCurrentUserInfo();
  }, []);

  const getCurrentUserInfo = async () => {
    try {
      const data = await AsyncStorage.getItem('userInfo');
      if (data) {
        const parsedData: User = JSON.parse(data);
        setUserInfo(parsedData);
      } else {
        setUserInfo(null);
      }
    } catch (error) {
      console.error('Failed to get user info from AsyncStorage', error);
      Alert.alert("Failed to retrieve user's info");
    }
  };

  const signOut = async () => {
    try {
      AsyncStorage.clear();
      setUserInfo(null);
      resetAndNavigate('OptionScreen');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.profileText}>My Profile</Text>
        <View style={styles.imageContainer}>
          <Image
            source={userInfo?.photo ? {uri: userInfo.photo} : Profile}
            style={styles.profileImage}
          />
        </View>
        <Text style={styles.userText}>
          {userInfo?.name ? userInfo.name : 'Will Smith'}
        </Text>
        <Text style={styles.emailText}>
          {userInfo?.email ? userInfo.email : 'willsmith34@mail.com'}
        </Text>
        <View style={styles.countContainer}>
          <View style={styles.counterView}>
            <Text style={styles.countText}>4</Text>
            <Text style={styles.counterTitleText}>Posts</Text>
          </View>
          <View style={styles.counterView}>
            <Text style={styles.countText}>10</Text>
            <Text style={styles.counterTitleText}>Followers</Text>
          </View>
          <View style={styles.counterView}>
            <Text style={styles.countText}>5</Text>
            <Text style={styles.counterTitleText}>Following</Text>
          </View>
        </View>
        <Button
          title="Log out"
          onPress={signOut}
          style={{marginHorizontal: widthPercentage(5)}}
        />
      </View>
      <View style={styles.container}>
        <TabularView
          activeTab={activeTab}
          firstTabPress={() => setActiveTab(1)}
          secondTabPress={() => setActiveTab(2)}
        />
        <View style={styles.postView}>
          <PostGrid data={DATA} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  profileText: {
    fontFamily: FONTS.SemiBold,
    color: Colors.black,
    textAlign: 'center',
    marginTop: heightPercentage(2),
    fontSize: heightPercentage(2),
  },
  imageContainer: {
    height: heightPercentage(12),
    width: heightPercentage(12),
    alignSelf: 'center',
    marginTop: heightPercentage(2),
    borderWidth: heightPercentage(0.1),
    borderColor: Colors.blue,
    borderRadius: heightPercentage(6),
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    height: heightPercentage(11),
    width: heightPercentage(11),
    resizeMode: 'contain',
    borderRadius: heightPercentage(6),
  },
  userText: {
    fontFamily: FONTS.Bold,
    color: Colors.black,
    textAlign: 'center',
    marginTop: heightPercentage(1),
    fontSize: heightPercentage(2),
  },
  emailText: {
    fontFamily: FONTS.Regular,
    color: Colors.black,
    textAlign: 'center',
    fontSize: heightPercentage(1.8),
  },
  countContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: widthPercentage(10),
    marginVertical: heightPercentage(2),
  },
  counterView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: {
    fontFamily: FONTS.SemiBold,
    color: Colors.black,
    fontSize: heightPercentage(2),
  },
  counterTitleText: {
    fontFamily: FONTS.Regular,
    color: Colors.black,
    fontSize: heightPercentage(1.6),
  },
  postView: {
    flex: 1,
  },
});

export default AccountScreen;
