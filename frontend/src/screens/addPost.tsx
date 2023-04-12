import React from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import {useState} from 'react';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

function Post(): JSX.Element {
  const [Name, onNameChange] = useState('');
  const [Title, onTitleChange] = useState('');
  const [description, descChange] = useState('');
  const navigation = useNavigation();
  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/posts/', {
        //create path('api/endpiont,...') in backend
        name: Name,
        title: Title,
        description: description,
        // s_date: '0',
        // e_date: '0',
        // s_time: '0',
        // e_time: '0',
        user: 1,
      });

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    navigation.navigate('home' as never);
  };

  return (
    <View>
      <TextInput
        style={styles.textStyle}
        onChangeText={onNameChange}
        value={Name}
        placeholder="full name"
      />

      <TextInput
        style={styles.textStyle}
        onChangeText={onTitleChange}
        value={Title}
        placeholder="location"
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
        onPress={handleSubmit}
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
