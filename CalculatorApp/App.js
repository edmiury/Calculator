import React from "react";

import { View } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FullProject from "./Components/Layout Final/fullProject";
import Inputs from './Components/Calculation Imc/Inputs Weigth and Height/inputHeigthAndWeigth';
import { Style } from "./style";

const Stack = createStackNavigator();

export default function App() {

  return (

    <View style={Style.container}>
          
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name = 'Initial' 
            component={FullProject}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: '#111',
              },
              headerTransparent: true
            }}
          />
          <Stack.Screen
            name='inputs'
            component={Inputs}
            options={{
              title: '',
              headerTransparent: true
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      
    </View>
  
  );
}
