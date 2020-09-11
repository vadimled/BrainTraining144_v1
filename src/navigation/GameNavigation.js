import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import StartScreen from '../screens/startScreen';
import GameScreen from "../screens/gameScreen"
import {COLORS} from "@utils/constants"

const Stack = createStackNavigator();

const GameNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen
          name="Start"
          component={StartScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Game"
          component={GameScreen}
          options={{
            headerStyle: {
              backgroundColor: COLORS.headerBackground,
            },
            headerTintColor: COLORS.tableFont100,
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}
        />
        {/*<Stack.Screen*/}
        {/*  name="SignUp"*/}
        {/*  component={SignUpScreen}*/}
        {/*/>*/}
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default GameNavigator;
