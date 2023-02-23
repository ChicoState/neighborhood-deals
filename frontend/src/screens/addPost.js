import React from "react";
import {View, Text, Button, TextInput} from 'react-native';
import { useState } from "react";

const addPost = () =>{
const [firstName, onfirstChange] = useState('');
const [lastName, onlastChange] = useState('');
    return(
        <View> 
            <TextInput
                onChangeText={onfirstChange}
                value = {firstName}
                placeholder = "First Name"
            />

            <TextInput
                onChangeText={onlastChange}
                value = {lastName}
                placeholder = "last Name"
            />

            <Button
                title = "submit post"
                onPress={() =>
                    console.log("nothing happens!")
                }
            />
        </View>


    
    );
}

export default addPost;