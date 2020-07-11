import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import StartScreen from '../screens/startScreen';
import GameScreen from "../screens/gameScreen"

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
            headerShown: false
          }}
        />
        {/*<Stack.Screen*/}
        {/*  name="SignUp"*/}
        {/*  component={SignUpScreen}*/}
        {/*  options={{*/}
        {/*    headerStyle: {*/}
        {/*      backgroundColor: COLORS.headerBackground,*/}
        {/*    },*/}
        {/*    headerTintColor: COLORS.tableFont100,*/}
        {/*    headerTitleStyle: {*/}
        {/*      fontWeight: 'bold',*/}
        {/*    }*/}
        {/*  }}*/}
        {/*/>*/}
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default GameNavigator;
