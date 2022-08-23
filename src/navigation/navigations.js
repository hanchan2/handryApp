import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Index from '../screens/Index';
import Map from '../screens/Map';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      {
        <Stack.Navigator
        initialRouteName='Index'
          screenOptions={{
            headerStyle: {
                backgroundColor: '#1253bc',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                padding: 10,
              },
          }}>
          <Stack.Screen name="Index" component={Index} />
          <Stack.Screen name="Map" component={Map} />
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
};

export default AppStack;