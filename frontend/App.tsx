/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
// import {react}
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import MVP from './src/screens/mvp.tsx';
import MVP from './src/screens/mvp';
import Post from './src/screens/addPost';
import Map from './src/screens/map';
import axios from 'axios';

const stack = createStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="home" component={MVP} />
        <stack.Screen name="post" component={Post} />
        <stack.Screen name="Map" component={Map} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  basicContainer: {
    flex: 1,
    backgroundColor: '#6495ed',
    opacity: 10,
    paddingHorizontal: 24,
    marginTop: 32,
    alignItems: 'center',
  },
});

export default App;
