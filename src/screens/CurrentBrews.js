import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';

const CurrentBrews = () => {

  return (
    // <View style={styles.container}>
    //   <Text>hello current brew babies</Text>
    // </View>
      <Container>
          <Content>
            <List>
              <ListItem avatar>
                <Left>
                  <Thumbnail source={{ uri: 'Image URL' }} />
                </Left>
                <Body>
                  <Text>brew name</Text>
                  <Text note>end date ... </Text>
                </Body>
                {/* <Right>
                  <Text note>3:43 pm</Text>
                </Right> */}
              </ListItem>
            </List>
          </Content>
      </Container>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default CurrentBrews;