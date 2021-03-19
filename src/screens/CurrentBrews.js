import React, { Component, useCallback, useContext, useState } from 'react';
import axios from 'axios';
import { Animated, StyleSheet, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Button, Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import { AppContext } from '../contexts/AppContext.js';
import { SwipeListView } from 'react-native-swipe-list-view';
import KombuchaIcon from '../icons/KombuchaIcon.js';
import Ionicons from '@expo/vector-icons/Ionicons';

const CurrentBrews = (props) => {

  console.log('hi current brews');

  const { brewList, deleteData } = useContext(AppContext);
  if (!brewList) {
    return null;
  } else {
    const archiveBrew = (swipeRowObj, id) => {
      closeRow(swipeRowObj, id);
    }

    const closeRow = (swipeRowObj, id) => {
      console.log('rowMap')
      if (swipeRowObj[id]) {
        swipeRowObj[id].closeRow();
      }
    };

    const deleteBrew = (swipeRowObj, id) => {
      closeRow(swipeRowObj, id);
      console.log(id)
      deleteData(id);
    };

    const renderBrewItem = (brew) => {
      const item =
        <ListItem
          avatar
          style={styles.brewItem}
          underlayColor={'#aaa'}
          onPress={() => props.navigation.navigate('Add', {
            _id: brew.item._id,
            task: 'edit',
          })}
        >
          <Left>
            <Thumbnail
              style={styles.kombucha}
              source={require('../../assets/kombucha-thumbnail.png')}
            />
          </Left>
          <Body style={{ paddingTop: 20 }}>
            <Text>{brew.item.brewName}</Text>
            <Text note>Brew ready: {brew.item.endDate} </Text>
          </Body>
        </ListItem>
      return (
        <TouchableHighlight>
          <View>
            {item}
          </View>
        </TouchableHighlight>
      );
    };

    const renderHiddenButtons = (brew, swipeRowObj) => {
      // console.log(brew.item)
      return (
        <View style={styles.hiddenButtons}>
          <TouchableOpacity
            style={[styles.backRightBtn, styles.backRightBtnLeft]}
            onPress={() => closeRow(swipeRowObj, brew.item._id)}
          >
            <Ionicons name={'ios-archive-outline'} size={25} color='green' />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.backRightBtn, styles.backRightBtnRight]}
            onPress={() => deleteBrew(swipeRowObj, brew.item._id)}
          >
            <Ionicons name={'ios-trash-outline'} size={25} color='red' />
          </TouchableOpacity>
        </View>
      )};

    return (
      <Container>
        <SwipeListView
          data={brewList}
          renderItem={renderBrewItem}
          keyExtractor={(item, index) => item._id}
          renderHiddenItem={renderHiddenButtons}
          disableRightSwipe={true}
          leftOpenValue={75}
          rightOpenValue={-150}
          previewRowKey={'0'}
          previewOpenValue={-40}
          previewOpenDelay={3000}
        >
        </SwipeListView>
      </Container>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brewItem: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    height: 60,
  },
  hiddenButtons: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    right: 75,
    height: 60,
  },
  backRightBtnRight: {
    height: 60,
    right: 0,
  },
  kombucha: {
    height: 40,
    width: 40,
  },
});

export default CurrentBrews;

