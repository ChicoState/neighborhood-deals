import React from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import {useState} from 'react';
import axios from 'axios';

function Post(): JSX.Element {
  const [firstName, onfirstChange] = useState('');
  const [lastName, onlastChange] = useState('');
  const [description, descChange] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://localhost:8000/api/endpoint', { //create path('api/endpiont,...') in backend
        first_name: firstName,
        last_name: lastName,
        description: description,
      });

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput
        style={styles.textStyle}
        onChangeText={onfirstChange}
        value={firstName}
        placeholder="First Name"
      />

      <TextInput
        style={styles.textStyle}
        onChangeText={onlastChange}
        value={lastName}
        placeholder="last Name"
      />

      <TextInput
        style={{padding: 5, borderColor: 'cornflowerblue'}}
        editable
        multiline
        numberOfLines={10}
        maxLength={1000}
        onChangeText={descChange}
        value={description}
        placeholder="listing description"
      />

      <Button
        title="submit post"
        // onPress={() => console.log('nothing happens!')}
        onPress = {handleSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    margin: 3,
    borderColor: 'cornflowerblue',
    padding: 5,
    borderWidth: 1,
  },
});

export default Post;
