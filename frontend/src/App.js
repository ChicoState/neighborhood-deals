//import { navigationContainer} from '@react-navigation/native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Homescreen.js';
import Posting from './screens/Postings.js';
import React from 'react';
//import {Text} from 'react-native'
import { View, Text} from 'react-native';




const stack = createStackNavigator(); 

// function HomeNav(){
//   return(
//     <stack.Navigator>
//       <stack.Screen name = "Home" component={HomeScreen}/>
//       <stack.Screen name = "listings" component={Postings}/>
//     </stack.Navigator>
//   )
// }

const App = () =>{
  return(
    <NavigationContainer>
    <stack.Navigator>
      <stack.Screen name = "Homescreen" component = {HomeScreen} />
      <stack.Screen name = "listings" component = {Posting} />
    </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

