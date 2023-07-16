import React, { useContext } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {baseStyle, images, routes, theme} from '../config';
import {
  NearMe,
  Reviews,
  VenueProfile,
  Login,
  Register,
  SplashScreen,
  AppFeedback,
} from '../screens';
import {StyleSheet, Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const getIcon = (focused, icon) => {
  return (
    <Image
      source={icon}
      style={{
        tintColor: focused ? theme.colors.blue : theme.colors.black,
      }}
    />
  );
};

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: theme.colors.blue,
        tabBarInactiveTintColor: theme.colors.black,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.label,
        tabBarItemStyle: styles.item,
        tabBarActiveBackgroundColor: theme.colors.lightGrey,
      }}>
      <Tab.Screen
        name={routes.NEAR_ME}
        component={NearMe}
        options={{
          tabBarIcon: ({focused}) => getIcon(focused, images.locationIcon),
        }}
      />
      <Tab.Screen
      name={routes.APP_FEEDBACK}
      component={AppFeedback}
      options={{
        tabBarIcon: ({focused}) => getIcon(focused, images.AppFeedbackIcon),
      }}
      />

    
    </Tab.Navigator>
  );
};

export const PrivateNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name ={routes.SPLASHSCREEN} component={SplashScreen}/>
      <Stack.Screen name="Home" component={HomeTabs} />
      <Stack.Screen name="App Feedback" component={HomeTabs}/>
      <Stack.Screen name={routes.VENUE_PROFILE} component={VenueProfile} />
      <Stack.Screen name={routes.REVIEWS} component={Reviews} />
      <Stack.Screen name={routes.LOGIN} component={Login}/>
      <Stack.Screen name={routes.REGISTER} component={Register}/>
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: theme.colors.white,
    shadowColor: theme.colors.silver,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -5,
    },
    elevation: 5,
    shadowRadius: 6,
    borderTopLeftRadius: baseStyle.borderTopLeftRadius(24),
    borderTopRightRadius: baseStyle.borderTopLeftRadius(24),
    paddingVertical: baseStyle.paddingVertical(5),
    paddingHorizontal: baseStyle.paddingHorizontal(5),
    height: baseStyle.height(80),
  },
  label: {
    fontFamily: theme.font.regular,
    fontSize: baseStyle.fontSize(12),
    lineHeight: baseStyle.lineHeight(15),
    marginTop: baseStyle.marginTop(5),
    opacity: 0.4,
  },
  item: {
    borderRadius: baseStyle.borderRadius(16),
    paddingVertical: baseStyle.paddingVertical(13),
  },
});
