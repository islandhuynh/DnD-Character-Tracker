import React from 'react';
import { Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export const AboutCharacter = (): JSX.Element => {
  return (
    <View>
      <Text>About Character</Text>
    </View>
  )
}


export const AppNavigator = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="About">
        <Drawer.Screen name="About" component={AboutCharacter} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}