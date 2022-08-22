import React, { useState,useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import Styles from "../constant/Styles"
import Data from "../constant/Data"
import FabIcon from "../component/FabIcon";
import Header from "../component/Header";

export default function Message() {
  
  return(
    <View style={Styles.container}>
    <Header/>
   <FlatList
    scrollEnabled={true}
    showsVerticalScrollIndicator={false}
    data={Data}
    renderItem={({item}) => {
     return (
      <View style={Styles.flatListContainer}>
      <TouchableOpacity>
      <View style={Styles.cardView}>
      <Image source={item.avtar} style={Styles.avtar}/>
      <View style={Styles.textView}>
      <Text style={Styles.nameText}>{item.name}</Text>
      <Text style={Styles.timeText}>{item.time}</Text>
     </View>
      </View>
       <View style={Styles.detailView}>
        <Image source={require("../assets/phoneCall.png")} style={Styles.phoneImage}/>
       <Text style={Styles.detailText}>{item.detail}</Text>
       </View> 
      </TouchableOpacity>
      <View style={Styles.underLine}/>
       </View>
     );
    }}
   />
   <FabIcon/>
    </View>
  );
}
