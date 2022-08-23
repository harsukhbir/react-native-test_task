import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Image,View,Text} from 'react-native';
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
 activeColor={Colors.lightBlack}
 inactiveColor={Colors.lightBlack}
    barStyle={{ backgroundColor: Colors.lightBlack }}
     screenOptions={{
      headerShown: false,
      tabBarActiveBackgroundColor:Colors.white,
      tabBarInactiveBackgroundColor: Colors.white,
     }}
>

<Tab.Screen
        name="."
        component={Message}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={Styles.labelFocusedContainer}>
                <Image style={Styles.image} source={require("./assets/selectMessage.png")}/>
              </View>
            ) : (
              <View style={Styles.labelContainer}>
                  <Image style={Styles.image} source={require('./assets/messageBox.png')}/>
              </View>
            );
          },
        }}
      />

<Tab.Screen
        name=".."
        component={CallScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={Styles.labelFocusedContainer}>
                <Image style={Styles.image} source={require("./assets/selectCall.png")}/>
              </View>
            ) : (
              <View style={Styles.labelContainer}>
                  <Image style={Styles.image} source={require('./assets/phoneCall.png')}/>
              </View>
            );
          },
        }}
      />

<Tab.Screen
        name="..."
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={Styles.labelFocusedContainer}>
                <Image style={Styles.image} source={require("./assets/selectUser.png")}/>
              </View>
            ) : (
              <View style={Styles.labelContainer}>
                  <Image style={Styles.image} source={require("./assets/user.png")}/>
              </View>
            );
          },
        }}
      />


<Tab.Screen
        name=","
        component={Group}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={Styles.labelFocusedContainer}>
                <Image style={Styles.image} source={require("./assets/selectGroup.png")}/>
              </View>
            ) : (
              <View style={Styles.labelContainer}>
                  <Image style={Styles.image} source={require("./assets/group.png")}/>
              </View>
            );
          },
        }}
      />


<Tab.Screen
        name="_"
        component={Setting}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={Styles.labelFocusedContainer}>
                <Image style={Styles.image} source={require("./assets/selectSettings.png")}/>
              </View>
            ) : (
              <View style={Styles.labelContainer}>
                  <Image style={Styles.image} source={require("./assets/appSetting.png")}/>
              </View>
            );
          },
        }}
      />

    </Tab.Navigator>
    <View style={{  width: '100%',
  borderBottomWidth: 1, borderColor:Colors.gray,bottom:"9.2%",position:'absolute'}}/>
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
