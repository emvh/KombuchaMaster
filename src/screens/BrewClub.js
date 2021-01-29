import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { Dimensions, StyleSheet, Text, View } from 'react-native';


class BrewClub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      geocode: null,
      latitude: null,
      longitude: null,
      location: null,
      errorMessage: null
    }
  }

  componentDidMount() {
    this.getLocationAsync();
  }

  getLocationAsync = async () => {
    let { status } = await Location.requestPermissionsAsync();
    // let { status } = await Permissions.getAsync(Permissions.LOCATION);

    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
      return;
    }

    let location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Highest });
    const { latitude , longitude } = location.coords;
    this.getGeocodeAsync({ latitude, longitude });
    this.setState({ location, latitude, longitude });
  };

  getGeocodeAsync = async (location) => {
    let geocode = await Location.reverseGeocodeAsync(location);
    this.setState({ geocode }, () => console.log('State: ', this.state));
  }

  render() {
    const { latitude, longitude, location } = this.state;

    if (latitude) {
      return (
        <View style={styles.container}>
          <MapView style={styles.map}
            showsUserLocation={true}
            showsMyLocationButton={true}
            showsCompass={true}
            initialRegion={{
              latitude,
              longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >

          <Marker
            coordinate={{
              latitude: 37.372005747940115,
              longitude: -121.99427743391863,
            }}
            title='Costco'
            description='i luv costco!'
          >
          </Marker>

          </MapView>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <Text>We need your permission!</Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default BrewClub;