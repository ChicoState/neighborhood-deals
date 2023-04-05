import MapView from 'react-native-maps';

function DisplayMap(){

  //This will be the starting location for the mapp
  <MapView
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />

  //This will later allow us to place markers on the map for hotspots
  // <Marker
  // coordinate={{latitude: latitude, longitude: longitude}}
  // image={{uri: 'custom_pin'}}
  // />
}
