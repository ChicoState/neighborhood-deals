import React from 'react';
import {
  Text,
  SafeAreaView,
  ScrollView,
  Button,
  StyleSheet,
  StatusBar,
  View,
  TextBase,
} from 'react-native';
import {useEffect} from 'react';
import {LogBox} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

import DisplayData from '../../components/displayData';

function MVP(): JSX.Element {
  const navigation = useNavigation();
  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ActionButton buttonColor="rgba(231,76,60,1)" zIndex={1}>
        <ActionButton.Item
          buttonColor="#9b59b6"
          title="New post"
          onPress={() => navigation.navigate('post' as never)}>
          <Icon name="ios-create" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#9b59b6"
          title="view map"
          onPress={() => navigation.navigate('Map' as never)}>
          <Icon name="map" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>
      <ScrollView style={styles.scroll}>
        <DisplayData />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight, //this is for androids i believe
  },
  scroll: {
    marginHorizontal: 5,
    // backgroundColor: ''
  },
  testText: {
    fontSize: 10,
  },
  card: {
    // alignItems: 'center',
    backgroundColor: `#fff8dc`,
    padding: 10,
    margin: 5,
  },
  fabulous: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

export default MVP;
