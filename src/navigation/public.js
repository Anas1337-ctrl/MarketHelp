import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routes } from '../config';
import { Login, Register } from '../screens';

const Stack = createNativeStackNavigator();

export const PublicNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.LOGIN} component={Login} />
      <Stack.Screen name={routes.REGISTER} component={Register} />
    </Stack.Navigator>
  );
};
