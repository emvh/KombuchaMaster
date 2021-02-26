import React, { Component } from 'react';
import MapView, { Callout, CalloutSubview, Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import KombuchaIcon from '../icons/KombuchaIcon.js';
import * as Svg from 'react-native-svg';

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
    this.setState({ geocode }, () => console.log('STATE: ', this.state));
  }

  render() {
    const { latitude, longitude, location } = this.state;

    if (latitude) {
      return (
        <View style={styles.container}>
          <MapView style={styles.map}
            provider={MapView.PROVIDER_GOOGLE}
            showsUserLocation={true}
            showsMyLocationButton={true}
            showsCompass={true}
            initialRegion={{
              latitude: 37.372005747940115,
              longitude: -121.99427743391863,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >

          <Marker
            coordinate={{
              // latitude: 48.8583,
              // longitude: 2.2923,
              latitude: 37.372005747940115,
              longitude: -121.99427743391863,
            }}
            title='Costco'
            description='i luv costco!'
          >
            <View style={styles.marker}>
              <KombuchaIcon />
            </View>
            <Callout tooltip>
              <View>
                <View style={styles.callout}>
                  <Text style={styles.itemTitle}>Scoby</Text>
                  <Text>$10</Text>
                  <CalloutSubview
                    style={styles.calloutButton}
                    onPress={() => console.log('clicked')}
                  >
                    <Text style={styles.buttonText}>Email Me</Text>
                  </CalloutSubview>
                </View>
                <View style={styles.calloutArrowBorder} />
                <View style={styles.calloutArrow} />
              </View>
            </Callout>
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
  marker: {
    flexDirection: 'row',
    width: 100,
    height: 40
  },
  callout: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
    width: 150
  },
  calloutArrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32
  },
  calloutArrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5
  },
  calloutButton: {
    backgroundColor: '#59cbbd',
    width: '100%',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  buttonText: {
    color: 'white',
  },
  itemTitle: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: 'bold'
  }
});

export default BrewClub;