//import { navigationContainer} from '@react-navigation/native'
import './App.css';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Homescreen.js';
import Posting from './screens/Postings.js';
import React from 'react';
//import {Text} from 'react-native'
import { View, Text} from 'react-native';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




const stack = createStackNavigator(); 

// function HomeNav(){
//   return(
//     <stack.Navigator>
//       <stack.Screen name = "Home" component={HomeScreen}/>
//       <stack.Screen name = "listings" component={Postings}/>
//     </stack.Navigator>
//   )
// }

      // <NavigationContainer>
      // <stack.Navigator>
      //   <stack.Screen name = "Homescreen" component = {HomeScreen} />
      //   <stack.Screen name = "listings" component = {Posting} />
      // </stack.Navigator>
      // </NavigationContainer>
//this would be in <>
      // <Router>
      //   <Navbar />
      //   <switch>
      //     <Route path='/' />
      //   </switch>
      // </Router>
const App = () =>{
  return(
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' />
        </Routes>
      </Router>
      <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name = "Homescreen" component = {HomeScreen} />
        <stack.Screen name = "listings" component = {Posting} />
      </stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;

