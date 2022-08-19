import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Message from "./screen/MessageScreen";
import CallScreen from "./screen/CallScreen";
import Profile from './screen/ProfileScreen';
import Group from './screen/GroupScreen';
import Setting from './screen/SettingScreen';
import Colors from './constant/Colors';
const Tab = createMaterialBottomTabNavigator();


function MyTabs() {
  return (
    <Tab.Navigator
    activeColor={Colors.purple}
    barStyle={{ backgroundColor: Colors.lightBlack}}
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen
        name="Message"
        component={Message}
      />
      <Tab.Screen
        name="Call"
        component={CallScreen}
      />
          <Tab.Screen
        name="Profile"
        component={Profile}
      />
          <Tab.Screen
        name="Group"
        component={Group}
      />
          <Tab.Screen
        name="Setting"
        component={Setting}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
