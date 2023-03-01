import React from 'react';
import {
  Text,
  SafeAreaView,
  ScrollView,
  Button,
  StyleSheet,
  StatusBar,
  View,
  TextBase,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {Card} from 'react-native-paper';
import {FAB} from '@rneui/themed';
function MVP(): JSX.Element {
  const navigation = useNavigation();

  const [myData, setData] = useState({details: []});
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => {
        setData({details: res.data});
      })
      .catch(err => {
        console.log('no data');
      });
    //console.log(myData);
  }, []);
  console.log(myData);

  const fakeData = [
    {id: 1, title: 'this is', description: 'fake data'},
    {id: 2, title: 'this is', description: 'fake data'},
    {id: 3, title: 'this is', description: 'fake data'},
  ];

  //   function showFakeData({fakeData})

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <Text style={styles.testText}>welcome to neighborhood deals</Text>

        <Card style={styles.card}>
          <Card.Title title="fake data 1" />
          <Text>this will be a decription eventually</Text>
          <Text>this will be an image</Text>
        </Card>

        <Card style={styles.card}>
          <Card.Title title="fake data 2" />
          <Text>this will be a decription eventually</Text>
          <Text>this will be an image</Text>
        </Card>

        <Card style={styles.card}>
          <Card.Title title="fake data 3" />
          <Text>this will be a decription eventually</Text>
          <Text>this will be an image</Text>
        </Card>

        <Card style={styles.card}>
          <Card.Title title="fake data 4" />
          <Text>this will be a decription eventually</Text>
          <Text>this will be an image</Text>
        </Card>

        <Card style={styles.card}>
          <Card.Title title="fake data 5" />
          <Text>this will be a decription eventually</Text>
          <Text>this will be an image</Text>
        </Card>

        <Card style={styles.card}>
          <Card.Title title="fake data 6" />
          <Text>this will be a decription eventually</Text>
          <Text>this will be an image</Text>
        </Card>

        <Button title="grab some data" onPress={() => console.log(myData)} />
        <Button
          title="display the data"
          onPress={() => console.log('figure out how to display on page')}
          // onPress = {()=>console.log("nothing to see here")}
        />
        <FAB //we can make this one a plus that follows as you scroll
          icon={{name: 'add', color: 'white'}}
          color="green"
          onPress={() => navigation.navigate('post' as never)}
          placement="right"
        />
        {/* <FAB
          visible={visible}
          onPress={() => setVisible(!visible)}
          placement="right"
          title="Hide"
          icon={{name: 'delete', color: 'white'}}
          color="red"
        /> */}
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
    fontSize: 10,
  },
  card: {
    // alignItems: 'center',
    backgroundColor: `#fff8dc`,
    padding: 10,
    margin: 5,
  },
  fabulous: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});

export default MVP;
