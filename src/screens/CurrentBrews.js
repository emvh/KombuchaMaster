import React, { Component, useCallback, useContext, useState } from 'react';
import axios from 'axios';
import { StyleSheet, View } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Button, Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import { AppContext } from '../contexts/AppContext.js'

const CurrentBrews = (props) => {

  const context = useContext(AppContext);

  if (!context.brewList) {
    return null;
  } else {
    const listItems = context.brewList.map(brew =>
      <ListItem
        avatar
        key={brew._id}
      >
        <Left>
          <Thumbnail source={{ uri: 'Image URL' }} />
        </Left>
        <Body>
          <Text>{brew.brewName}</Text>
          <Text note>Brew ready: {brew.endDate} </Text>
        </Body>
      </ListItem>
    );
  return (
    <Container>
      <Content>
        <List>
          {listItems}
        </List>
      </Content>
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
});

export default CurrentBrews;

