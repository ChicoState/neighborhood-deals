//import { navigationContainer} from '@react-navigation/native'
import './App.css';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import Posting from './screens/Postings.js';
import React, {Component} from 'react';
//import Navbar from './components/Navbar';
//import HomeScreen from './screens/Homescreen.js';
import MVP from './screens/mvp';
import addPost from './screens/addPost';


const stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name= 'Neighborhood Deals' component={MVP}/>
        <stack.Screen name = 'Add a post' component={addPost}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

