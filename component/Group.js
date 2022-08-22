import React, { useState,useEffect } from "react";
import {
    Text,
    View,
    Image,
    TouchableOpacity,
  } from "react-native";
import Styles from "../constant/Styles";

const Group =()=>{
    
    return(
<TouchableOpacity>
<View style={Styles.cardView}>
<Image source={require("../assets/group.png")} style={Styles.avtar}/>
<View style={Styles.textView}>
<Text style={[Styles.nameText,{top:5}]}>ABC</Text>
<Text style={[Styles.timeText,{marginRight:"10%", marginTop:15}]}>120</Text>
</View>
</View>
<View style={[Styles.detailView,{marginRight:"48%"}]}>
<Image source={require("../assets/phoneCall.png")} style={[Styles.phoneImage]}/>
</View> 
</TouchableOpacity>
    )
}

export default Group;