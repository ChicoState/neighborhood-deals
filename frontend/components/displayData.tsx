import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import data from '../fakeData.json';
import {Card, Text} from 'react-native-paper';
import axios from 'axios';
import {useState, useEffect} from 'react';

function DisplayData(): JSX.Element {
  const [myData, setData] = useState({details: []});
  let post = data.posts;
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

  return (
    <>
      {post.map((item, key) => {
        return (
          <Card key={key} style={styles.card}>
            <Card.Title title={item.location} />
            <Text>{item.desc}</Text>
            <Text>author: {item.name}</Text>
          </Card>
        );
      })}
    </>
  );
}
const styles = StyleSheet.create({
  card: {
    // alignItems: 'center',
    backgroundColor: `#fff8dc`,
    padding: 10,
    margin: 5,
  },
});
export default DisplayData;
