import React from "react";
import {View, TextInput, Button, StyleSheet} from 'react-native';
import { useState } from "react";

function Post(): JSX.Element {
    const [firstName, onfirstChange] = useState('');
    const [lastName, onlastChange] = useState('');  
    const [description, descChange] = useState('');

    return(
        <View> 
            <TextInput
                style = {styles.textStyle}
                onChangeText={onfirstChange}
                value = {firstName}
                placeholder = "First Name"
            />

            <TextInput
                style = {styles.textStyle}
                onChangeText={onlastChange}
                value = {lastName}
                placeholder = "last Name"
            />

            <TextInput
                style = {{padding:10}}
                editable
                multiline
                numberOfLines={10}
                maxLength = {1000}
                onChangeText={descChange}
                value={description}
                placeholder = "listing description"
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

const styles = StyleSheet.create({
    textStyle: {
        margin: 3, 
        borderColor: 'cornflowerblue',
        padding: 10, 
        borderWidth: 1,

    }
})

export default Post;