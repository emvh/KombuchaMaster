import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import CurrentBrews from '../screens/CurrentBrews.js';
import CompletedBrews from '../screens/CompletedBrews.js';
import BrewClub from '../screens/BrewClub.js';
import { getHeaderTitle } from '../utils/HeaderTitle';
import { Container, Button, Header, Content, Footer, FooterTab, Icon } from 'native-base';
import { displayNavigationIcon } from '../utils/NavigationIcon';
import Ionicons from '@expo/vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

const NavigationTabs = ({ navigation, route }) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: getHeaderTitle(route),
      headerRight: (getHeaderTitle(route) === "Brews in Progress") ? () => (
        <Button
          onPress={() => navigation.navigate('Add')}
          title="Add"
          color="#4287f5"
        />
      ) : null,
    })
  }, [navigation, route]);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return displayNavigationIcon(route, focused, color, size);
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="Current"
        component={CurrentBrews}
        options={{ tabBarLabel: "The Current" }}
      />
      <Tab.Screen name="Completed"
        component={CompletedBrews}
        options={{ tabBarLabel: "The Completed" }}
      />
      <Tab.Screen name="Club"
        component={BrewClub}
        options={{ tabBarLabel: "The Club" }}
      />
    </Tab.Navigator>
  )
}

export default NavigationTabs;

    // <Container>
    //   {/* <Content /> */}
    //   <CurrentBrews/>
    //   <Footer>
    //     <FooterTab>
    //       <Button vertical active
    //         onPress={() => navigation.navigate("Add")}
    //       >
    //         <Icon active name="list" />
    //         <Text>The Current</Text>
    //       </Button>
    //     </FooterTab>

    //     <FooterTab>
    //       <Button vertical>
    //         <Icon name="archive" />
    //         <Text>The Completed</Text>
    //       </Button>
    //     </FooterTab>

    //     <FooterTab>
    //       <Button vertical>
    //         <Icon name="globe" />
    //         <Text>The Club</Text>
    //       </Button>
    //     </FooterTab>

    //   </Footer>
    // </Container>