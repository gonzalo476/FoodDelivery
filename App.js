import React,{ useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import * as Font from 'expo-font';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {Restaurant, OrderDelivery, Home} from './screens';
import Tabs from './navigation/tabs';

const Stack = createStackNavigator();

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  useEffect(() => {
    if (!fontsLoaded) {
      loadFonts();
    }
  })
  const loadFonts = async () => {
    await Font.loadAsync({
      "Gellix-Regular": require("./assets/fonts/Gellix-Regular.otf"),
      "Gellix-Medium": require("./assets/fonts/Gellix-Medium.otf"),
      "Gellix-SemiBold": require("./assets/fonts/Gellix-SemiBold.otf"),
      "Gellix-Bold": require("./assets/fonts/Gellix-Bold.otf"),
      "Gellix-Black": require("./assets/fonts/Gellix-Black.otf"),
    });
    setFontsLoaded(true);
  }

  if (!fontsLoaded){
    return <View/>
  }
    return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"Home"}
      >
        <Stack.Screen name="Home" component={Tabs}/>
        <Stack.Screen name="Restaurant" component={Restaurant}/>
        <Stack.Screen name="OrderDelivery" component={OrderDelivery}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
