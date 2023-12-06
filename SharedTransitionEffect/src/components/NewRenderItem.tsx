import {Pressable, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {NewData} from '../data/NewData';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SharedElementStackParamList} from '../navigator/SharedElementNavigator';
import Animated, {FadeInDown} from 'react-native-reanimated';

type Props = {
  item: NewData;
  index: number;
};

const NewRenderItem = ({item, index}: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<SharedElementStackParamList>>();
  return (
      <Animated.View entering={FadeInDown.delay(200 * index)}>
        <Pressable
          style={styles.container1}
          onPress={() => {
            navigation.navigate('Detail', {item: item});
          }}>
          <Animated.Image
            source={item.image}
            style={styles.image1}
            sharedTransitionTag={item.name}
          />
          <View style={styles.textContainer}>
            <Text style={styles.textName}>{item.name}</Text>
            <Text style={styles.textLocation}>{item.location}</Text>
          </View>
        </Pressable>
      </Animated.View>
  );
};

export default NewRenderItem;

const styles = StyleSheet.create({
  container1: {
    flexDirection: 'column',
    marginTop: 20,
    width: 200,
    height: 350,
    padding: 10,
    borderRadius: 20,
  },
  image1: {
    width: 175,
    height: 185,
    borderRadius: 10,
  },
  textContainer: {
    margin: 20,
    flexShrink: 1,
    gap: 10,
  },
  textName: {
    color: '#323232',
    fontSize: 28,
    fontWeight: 'bold',
  },
  textLocation: {
    color: '#323232',
    fontSize: 18,
  },
});
