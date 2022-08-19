import React, { useState,useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import String from "../constant/String"
import Styles from "../constant/Styles"
import Data from "../constant/Data"
export default function Message() {



  return(
    <View style={Styles.container}>
    <View style={Styles.topBar}>
      <Image source={require("../assets/menu.png")} style={Styles.menuImage}/>
      <Text style={Styles.msgText}> {String.all}</Text>
      <Image source={require("../assets/sear.png")} style={Styles.searchIcon}/>
    </View>
    <View style={Styles.underLine}/>
   <FlatList
    scrollEnabled={true}
    showsVerticalScrollIndicator={false}
    data={Data}
    renderItem={({item, index}) => {
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
        <Image source={require("../assets/phone.png")} style={Styles.phoneImage}/>
       <Text style={Styles.detailText}>{item.detail}</Text>
       </View> 
      </TouchableOpacity>
      <View style={Styles.underLine}/>
       </View>
     );
    }}
   />
<TouchableOpacity style={Styles.fabIcon}>
  <Image source={require("../assets/message.png")} style={Styles.msgImage} />
</TouchableOpacity>
    </View>
  );
}
