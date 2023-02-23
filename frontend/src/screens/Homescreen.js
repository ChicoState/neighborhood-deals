import * as React from "react";
import {Text, StyleSheet, View, Button} from 'react-native';
//import { useNavigate, useNavigation } from "react-router-dom";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/stack'



const HomeScreen = ({navigation})=>{
    //console.log(navigation);
    // navigation = useNavigation();
    return (
        // <View>
        //     <Button 
        //     title = "go to listings" 
        //     onPress = { () => navigation.navigate("listings")}
        //     />
        //     <p style={styles.text}>
        //         hello! this is the homepage for neighborhood deals
        //     </p>
        // </View>
        <View>
            <h1>
                homepage
            </h1>
        </View>
        
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        fontFamily: 'Roboto', 
    }, 
});

export default HomeScreen;

// export default function HomeScreen({navigation}){
//     return(
//         <View>
//             <Button title = "go to listings" 
//                 onClick = { navigation.navigate("listings")}
//                 // onClick = { console.log("you have pressed the button") }
//                 >
//             </Button>
//             <p style={styles.text}>
//                 hello! this is the homepage for neighborhood deals
//             </p>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     text: {
//         fontSize: 30,
//         fontFamily: 'Roboto', 
//     }, 
// });