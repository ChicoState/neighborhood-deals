import React from "react";
import {Text, SafeAreaView, ScrollView, Button, StyleSheet, StatusBar} from "react-native"
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import axios from "axios";


function MVP(): JSX.Element {
    const navigation = useNavigation();

    const [data, setData] = useState({details:[],});

    const getData = () =>{
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => {
            //data = res.data
            setData({
                details: res.data
            });
    
        }).catch(err => {console.log("no data")})
        console.log(data.details);
    }

    const displayData = () =>{
        return(
            console.log("havent figured out how to display yet")
            );
    }

    return(
        <SafeAreaView style = {styles.container}>
        <ScrollView style = {styles.scroll}>
            
            <Text style = {styles.testText}>
                welcome to neighborhood deals
            </Text>
            <Button
                title = "grab some data"
                onPress={getData}
            />
            <Button 
                title = "display the data"
                onPress={displayData}
            />
            <Button //we can make this one a plus that follows as you scroll
                title="add a post"
                onPress = {() =>
                    navigation.navigate('post')}
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
        marginHorizontal: 5,
        // backgroundColor: ''
    },
    testText: {
        fontSize: 100,
    },
})

export default MVP;