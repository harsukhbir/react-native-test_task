import React from 'react';
import { Text, View } from 'react-native';
import Styles from "../constant/Styles";
import String from '../constant/String';
import Colors from '../constant/Colors';
const Group = () => {
  return (
    <View
      style={Styles.mainContainer}>
      <Text style={{color:Colors.white}}>{String.Coming}</Text>
    </View>
  )
}
export default Group;