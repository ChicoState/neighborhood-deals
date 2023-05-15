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
  InteractionManager,
} from 'react-native';
import {useEffect} from 'react';
import {LogBox} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import {Title} from 'react-native-paper';

function Map(): JSX.Element {
  const tmpMarkers = {
    0: {latitude: 39.7315, longitude: -121.85676},
    1: {latitude: 39.724571, longitude: -121.84391},
    2: {latitude: 39.71943, longitude: -121.8449},
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
          {/* <Marker
            draggable
            coordinate={this.state.x}
            onDragEnd={e => this.setState({x: e.nativeEvent.coordinate})}
          /> */}
          <Marker coordinate={tmpMarkers[0]} title="this is a tests" />
          <Marker coordinate={tmpMarkers[1]} />
          <Marker coordinate={tmpMarkers[2]} />
        </MapView>
      </ScrollView>
    </SafeAreaView>
  );
}

// <MapView region={this.state.region} onRegionChange={this.onRegionChange}>
//   {this.state.markers.map((marker, index) => (
//     <Marker
//       key={index}
//       coordinate={marker.latlng}
//       title={marker.title}
//       description={marker.description}
//     />
//   ))}
// </MapView>;

// class DefaultMarkers extends React.Component<any, any> {
//   constructor(props: any) {
//     super(props);
//
//     this.state = {
//       region: {
//         latitude: LATITUDE,
//         longitude: LONGITUDE,
//         latitudeDelta: LATITUDE_DELTA,
//         longitudeDelta: LONGITUDE_DELTA,
//       },
//       markers: [],
//     };
//   }
//
//   onMapPress(e: any) {
//     this.setState({
//       markers: [
//         ...this.state.markers,
//         {
//           coordinate: e.nativeEvent.coordinate,
//           key: id++,
//           color: randomColor(),
//         },
//       ],
//     });
//   }
//
//   render() {
//     return (
//       <View style={styles.container}>
//         <MapView
//           provider={this.props.provider}
//           style={styles.map}
//           initialRegion={this.state.region}
//           onPress={e => this.onMapPress(e)}>
//           {this.state.markers.map((marker: any) => (
//             <Marker
//               key={marker.key}
//               coordinate={marker.coordinate}
//               pinColor={marker.color}
//             />
//           ))}
//         </MapView>
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity
//             onPress={() => this.setState({markers: []})}
//             style={styles.bubble}>
//             <Text>Tap map to create a marker of random color</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
//   bubble: {
//     backgroundColor: 'rgba(255,255,255,0.7)',
//     paddingHorizontal: 18,
//     paddingVertical: 12,
//     borderRadius: 20,
//   },
//   latlng: {
//     width: 200,
//     alignItems: 'stretch',
//   },
//   button: {
//     width: 80,
//     paddingHorizontal: 12,
//     alignItems: 'center',
//     marginHorizontal: 10,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     marginVertical: 20,
//     backgroundColor: 'transparent',
//   },
// });
//
// export default DefaultMarkers;

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
  mapStyle: {
    minHeight: '100%',
    minWidth: '100%',
  },
});

export default Map;
