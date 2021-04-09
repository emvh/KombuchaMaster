import React, { Component } from 'react';
import axios from 'axios';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import MapView, { Callout, CalloutSubview, Marker } from 'react-native-maps';
import * as Linking from 'expo-linking';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import KombuchaIcon from '../icons/KombuchaIcon.js';
import * as Svg from 'react-native-svg';
import styles from '../styles/BrewClubStyles.js';

class BrewClub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      geocode: null,
      latitude: null,
      longitude: null,
      location: null,
      errorMessage: null,
      markers: [],
    }
    this.getMarkers = this.getMarkers.bind(this);
  }

  componentDidMount() {
    this.getMarkers();
    this.getLocationAsync();
  }

  getLocationAsync = async () => {
    let { status } = await Location.requestPermissionsAsync();
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

  getMarkers() {
    axios({
      url: 'http://127.0.0.1:3000/api/markers',
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        this.setState({ markers: response.data })
      })
      .catch(error => console.log(error));
  }

  render() {
    const { latitude, longitude, markers } = this.state;

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
            {markers.map((marker) => (
              <Marker
                key={marker._id}
                coordinate={{
                  latitude: marker.latitude,
                  longitude: marker.longitude,
                }}
              >
                <View style={styles.marker}>
                  <KombuchaIcon />
                </View>
                <Callout tooltip>
                  <View>
                    <View style={styles.callout}>
                      <Text style={styles.itemTitle}>{marker.title}</Text>
                      <Text>${marker.price}</Text>
                      <Text>{marker.description}</Text>
                      <CalloutSubview
                        style={styles.calloutButton}
                        onPress={() => Linking.openURL(`sms:+${marker.phone}&body=Hi ${marker.user}, I'm interested in your ${marker.title} listing on The Brew Club!`)}
                      >
                        <Text style={styles.buttonText}>Message Me</Text>
                      </CalloutSubview>
                    </View>
                    <View style={styles.calloutArrowBorder} />
                    <View style={styles.calloutArrow} />
                  </View>
                </Callout>
              </Marker>
            ))}
          </MapView>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <Text>We need your permission to use your location!</Text>
      </View>
    )
  }
};

export default BrewClub;