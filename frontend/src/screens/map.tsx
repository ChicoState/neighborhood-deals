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
import {useEffect} from 'react';
import {LogBox} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';

function Map(): JSX.Element {
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
            }}
            />

        <MapView region={this.state.region} onRegionChange={this.onRegionChange}>
          {this.state.markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
              />
            ))}
        </MapView>;
      </ScrollView>
    </SafeAreaView>
  );
}

// <MapView
//   initialRegion={{
  //     latitude: 37.78825,
  //     longitude: -122.4324,
  //     latitudeDelta: 0.0922,
  //     longitudeDelta: 0.0421,
  //   }}
  // />
        // getInitialState(){
        //   return {
        //     region: {
        //       latitude: 37.78825,
        //       longitude: -122.4324,
        //       latitudeDelta: 0.0922,
        //       longitudeDelta: 0.0421,
        //     },
        //   };
        // }
        //
        // onRegionChange(region) {
        //   this.setState({ region });
        // }
        //
        // render() {
        //   return (
        //     <MapView
        //       region={this.state.region}
        //       onRegionChange={this.onRegionChange}
        //     />
        //   );
        // }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight, //this is for androids i believe
  },
  scroll: {
    marginHorizontal: 5,
    // backgroundColor: ''
  },
  mapStyle:{
    minHeight: "100%",
    minWidth: "100%",
  }
});

export default Map;
