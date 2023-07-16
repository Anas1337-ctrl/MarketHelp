import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {PublicNavigation} from './public';
import {PrivateNavigation} from './private';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export const Navigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <PrivateNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
