import React, {FC} from 'react';
import {
  FlatList,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  StyleSheet,
} from 'react-native';
import {heightPercentage, widthPercentage} from '../utils/Scalling';

interface Post {
  id: number;
  image: ImageSourcePropType;
}

interface Props {
  data: Post[];
}
const PostGrid: FC<Props> = ({data}) => {
  const renderItem = ({item}: {item: Post}) => {
    return (
      <TouchableOpacity key={item.id} style={styles.post}>
        <Image source={item.image} style={styles.post} />
      </TouchableOpacity>
    );
  };
  return <FlatList data={data} renderItem={renderItem} numColumns={3} />;
};

const styles = StyleSheet.create({
  post: {
    width: widthPercentage(33.3),
    height: heightPercentage(15),
  },
});

export default PostGrid;
