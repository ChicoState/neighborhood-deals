//import { navigationContainer} from '@react-navigation/native'
import './App.css';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Posting from './screens/Postings.js';
import React from 'react';
//import {Text} from 'react-native'
import { View, Text} from 'react-native';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomeScreen from './screens/Homescreen'
import HomeScreen from './screens/Homescreen.js';
// import Posting from './screens/Postings';



const stack = createStackNavigator(); 

const App = () =>{
  return(
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path='./screens/Homescreen' exact component={HomeScreen}/>
            <Route path='./screens/Postings' exact component={Posting}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;

