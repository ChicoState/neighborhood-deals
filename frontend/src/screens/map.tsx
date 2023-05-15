import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, StatusBar} from 'react-native';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';


function Map(): JSX.Element {
  const tmpMarkers = {
    0: {latitude: 39.72374, longitude: -121.83444}, //1017 broadway st
    1: {latitude: 39.724571, longitude: -121.84391}, //rileys
    2: {latitude: 39.73648, longitude: -121.84391}, // 1814 nord ave
    3: {latitude: 39.75084, longitude: -121.85515}, //102 cohasset Rd.
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: 39.728493,
            longitude: -121.837479,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={tmpMarkers[0]}
            title="Alexander McQueen"
            description="look for the big red house! We have a variety of things!"
          />
          <Marker
            coordinate={tmpMarkers[1]}
            title="marilyn manson"
            description="we have so much stuff to get rid of and so little time. please come and grab our goods"
          />
          <Marker
            coordinate={tmpMarkers[2]}
            title="guy fieri"
            description="theres a bunch of stuff that needs to go!!! come and buy our goods"
          />
          <Marker
            coordinate={tmpMarkers[3]}
            title="DJ Bambo"
            description="i have a bunch of old music stuff i need to get rid of! All prices are negotiable"
          />
        </MapView>
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
  },
  mapStyle: {
    minHeight: '100%',
    minWidth: '100%',
  },
});

export default Map;
