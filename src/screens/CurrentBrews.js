import React, { useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CurrentBrews = () => {

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate('Add')}
          title="Add"
          color="#4287f5"
        />
      )
    })
  })

  return (
    <View style={styles.container}>
      <Text>hello current brew babies</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CurrentBrews;