import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Image,View} from 'react-native';
import Message from "./screen/MessageScreen";
import CallScreen from "./screen/CallScreen";
import Profile from './screen/ProfileScreen';
import Group from './screen/GroupScreen';
import Setting from './screen/SettingScreen';
import Colors from './constant/Colors';
import Styles from './constant/Styles';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {

  return (
    <View style={{flex:1}}>
<Tab.Navigator
 activeColor={Colors.purple}
    barStyle={{ backgroundColor: Colors.lightBlack}}
     screenOptions={{
      headerShown: false,
      tabBarStyle: {
       position: 'absolute',
       backgroundColor: Colors.lightBlack,
       height: 60,
      },
      tabBarActiveBackgroundColor:Colors.purple,
      tabBarInactiveBackgroundColor: Colors.purple,
     }}>

<Tab.Screen
      name={"."}
      component={Message}
      options={{
       tabBarActiveTintColor: 'transparent',
       tabBarInactiveTintColor: 'transparent',
       tabBarIcon: ({focused}) => (
        <View style={focused ? Styles.focusStyle : Styles.unfocusStyle}>
         <Image
          source={
           focused
            ? require("./assets/messageBox.png")
            : require('./assets/messageBox.png')
          }
          style={Styles.image}
         />
        </View>
       ),
      }}
     />

<Tab.Screen
      name={".."}
      component={CallScreen}
      options={{
       tabBarActiveTintColor: 'transparent',
       tabBarInactiveTintColor: 'transparent',
       tabBarIcon: ({focused}) => (
        <View style={focused ? Styles.focusStyle : Styles.unfocusStyle}>
         <Image
          source={
           focused
            ? require("./assets/phoneCall.png")
            : require('./assets/phoneCall.png')
          }
          style={Styles.image}
         />
        </View>
       ),
      }}
     />

<Tab.Screen
      name={"..."}
      component={Profile}
      options={{
       tabBarActiveTintColor: 'transparent',
       tabBarInactiveTintColor: 'transparent',
       tabBarIcon: ({focused}) => (
        <View style={focused ? Styles.focusStyle : Styles.unfocusStyle}>
         <Image
          source={
           focused
            ? require("./assets/user.png")
            : require('./assets/user.png')
          }
          style={Styles.image}
         />
        </View>
       ),
      }}
     />

<Tab.Screen
      name={","}
      component={Group}
      options={{
       tabBarActiveTintColor: 'transparent',
       tabBarInactiveTintColor: 'transparent',
       tabBarIcon: ({focused}) => (
        <View style={focused ? Styles.focusStyle : Styles.unfocusStyle}>
         <Image
          source={
           focused
            ? require("./assets/group.png")
            : require('./assets/group.png')
          }
          style={Styles.image}
         />
        </View>
       ),
      }}
     />

<Tab.Screen
      name={"_"}
      component={Setting}
      options={{
       tabBarActiveTintColor: 'transparent',
       tabBarInactiveTintColor: 'transparent',
       tabBarIcon: ({focused}) => (
        <View style={focused ? Styles.focusStyle : Styles.unfocusStyle}>
         <Image
          source={
           focused
            ? require("./assets/appSetting.png")
            : require('./assets/appSetting.png')
          }
          style={Styles.image}
         />
        </View>
       ),
      }}
     />
    </Tab.Navigator>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
