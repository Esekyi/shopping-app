import { StatusBar, View } from 'react-native';
import React from 'react';
import HomePage from './Screens/HomPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  useFonts,
  NotoSerif_400Regular,
  NotoSerif_700Bold,
} from '@expo-google-fonts/noto-serif';

const Stack = createNativeStackNavigator();

const App = () => {
  let [fontsLoaded] = useFonts({
    NotoSerif_400Regular,
    NotoSerif_700Bold,
  });

  if (!fontsLoaded) {
    return <View />;
  } else {
    return (
    <NavigationContainer>
      <StatusBar barStyle = 'dark-content'/>
      <Stack.Navigator screenOptions = {{header: () => null}}>
        <Stack.Screen name="HomePage" component={HomePage} />
        {/* <Stack.Screen name="HomePage" component={HomePage} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );}
};

export default App;