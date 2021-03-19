import React, { useContext } from 'react';
import { StyleSheet, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { Button, Container, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import { AppContext } from '../contexts/AppContext.js';
import { SwipeListView } from 'react-native-swipe-list-view';
import KombuchaIcon from '../icons/KombuchaIcon.js';
import Ionicons from '@expo/vector-icons/Ionicons';

const SwipeList = (props) => {

  const { brewList, updateData, deleteData } = useContext(AppContext);

  if (!brewList) {
    return null;
  } else {

   const changeStatus = (swipeRowObj, id) => {
      closeRow(swipeRowObj, id);
      const status = (props.screen === 'CurrentBrews') ? 'Completed' : 'Current';
      const update = { _id: id, status }
      updateData(update);
   }

   const closeRow = (swipeRowObj, id) => {
     if (swipeRowObj[id]) {
       swipeRowObj[id].closeRow();
     }
   };

   const deleteBrew = (swipeRowObj, id) => {
     closeRow(swipeRowObj, id);
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
     return (
       <View style={styles.hiddenButtons}>
         <TouchableOpacity
           style={[styles.backRightBtn, styles.backRightBtnLeft]}
           onPress={() => changeStatus(swipeRowObj, brew.item._id)}
         >
           <Ionicons
            name={props.screen === 'CurrentBrews' ? 'ios-archive-outline' : 'ios-list-outline'}
            size={25}
            color='green' />
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
       {props.screen === 'CurrentBrews' &&
          <SwipeListView
          data={brewList.filter(brew => brew.status === 'Current')}
          renderItem={renderBrewItem}
          keyExtractor={(item, index) => item._id}
          renderHiddenItem={renderHiddenButtons}
          disableRightSwipe={true}
          leftOpenValue={75}
          rightOpenValue={-150}
          previewRowKey={'0'}
          previewOpenValue={-40}
          previewOpenDelay={3000}
        />
       }

       {props.screen === 'CompletedBrews' &&
          <SwipeListView
          data={brewList.filter(brew => brew.status === 'Completed')}
          renderItem={renderBrewItem}
          keyExtractor={(item, index) => item._id}
          renderHiddenItem={renderHiddenButtons}
          disableRightSwipe={true}
          leftOpenValue={75}
          rightOpenValue={-150}
          previewRowKey={'0'}
          previewOpenValue={-40}
          previewOpenDelay={3000}
        />
       }
      </Container>
   );
 }
};

const styles = StyleSheet.create({
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

export default SwipeList;
