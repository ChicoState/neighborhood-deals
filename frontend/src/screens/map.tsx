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

function Map(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text>this will be a map lmao</Text>
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
});

export default Map;
