import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
// import data from '../fakeData.json';
import {Card, Text} from 'react-native-paper';
import axios from 'axios';
import {useState, useEffect} from 'react';

function DisplayData(): JSX.Element {
  const [seconds, setSeconds] = useState(0);
  const [myData, setData] = useState({details: [{}]});
  let post = myData.details;
  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/posts/')
      .then(res => {
        console.log(res.status);
        setData({details: res.data});
      })
      .catch(err => {
        console.log(err);
      });

    const interval = setInterval(() => {
      setSeconds(seconds + 1);

      axios
        .get('http://127.0.0.1:8000/api/posts/')
        .then(res => {
          setData({details: res.data});
        })
        .catch(err => {
          console.log(err);
        });
    }, 3000);

    return () => clearInterval(interval);
    //console.log(myData);
  }, [seconds]);
  // console.log(myData);
  // console.log(data);
  return (
    <>
      {post.map((item, key) => {
        return (
          <Card key={key} style={styles.card}>
            <Card.Title
              title={item.title}
              // titleStyle={styles.title}
              titleNumberOfLines={3}
            />
            {/* <Text>
              {item.sdate} "-" {item.edate}
            </Text>
            <Text>
              {item.stime} "-" {item.etime}
            </Text> */}
            <Text style={{paddingBottom: 10}}>{item.description}</Text>
            <Text>-{item.name}</Text>
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
  // title: {
  //   flexDirection: 'row',
  //   flexWrap: 'wrap',
  // },
});
export default DisplayData;
