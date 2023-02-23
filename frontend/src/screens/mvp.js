import React, {useState, useEffect} from "react";
import {Text, View, Button, Header, StyleSheet, ScrollView, StatusBar, SafeAreaView} from 'react-native';
import axios from "axios";
// import { NavigationContainer, useNavigation } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";


const MVP = (props) =>{

    const navigation = useNavigation();
//this is how the video said to do it
//state = {details: [],}

    // componentDidMount() {
    //     let data;
    //     axios.get('http://localhost:8000')
    //     .then(res =>{
    //         data = res.data;
    //         this.setState({
    //             details: data,
    //         });
    //     })
    //     .catch(err => {})
    // }

//this is so we dont have to use class based components
//i dont know if this works yet

    // const[data, setData] = useState({details: [],});
    // axios.get('http://localhost:8000')
    // .then(res => {
    //     data = res.data;
    //     setData({
    //         details: data,
    //     });

    // }).catch(err => {console.log("no data")})
    
    return(
        <SafeAreaView style = {styles.container}>
            <ScrollView style = {styles.scroll}>
                <Text style = {styles.testText}>
                    this is a test for scroll view ak;jhfaljkshflkajshfkashflkajshklajshflkjashfkljahfkljashfkljashfkljashflkashfkljashflkjashdkl
                </Text>

                <Button //we can make this one a plus that follows as you scroll
                    title="add a post"
                    onPress = {() =>
                        navigation.navigate('Add a post')}
                />
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
        marginHorizontal: 100,
        // backgroundColor: ''
    },
    testText: {
        fontSize: 200,
    },
})

export default MVP;