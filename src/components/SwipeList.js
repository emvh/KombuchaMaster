import React, { useContext } from 'react';
import { TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { Button, Container, ListItem, Left, Body, Right, Text, Thumbnail } from 'native-base';
import { SwipeListView } from 'react-native-swipe-list-view';
import { AppContext } from '../contexts/AppContext.js';
import KombuchaIcon from '../icons/KombuchaIcon.js';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from '../styles/SwipeListStyles.js';

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

export default SwipeList;
