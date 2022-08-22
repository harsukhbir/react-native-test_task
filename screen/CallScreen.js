
import React from 'react';
import { Text, View, ScrollView} from 'react-native';
import Styles from "../constant/Styles";
import Personal from '../component/PersonalChat';
import Chat from '../component/Chat';
import Group from '../component/Group';
import Header from '../component/Header';

const CallScreen = () => {
  return (
    <View style={Styles.CallContainer}>
    <Header/>
   <ScrollView>
   <Chat/>
   <Personal/>
   <Group/>
   <View style={Styles.underLine}/>
   </ScrollView>
    </View>
  )
}
export default CallScreen;