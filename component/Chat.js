import React, { useState,useEffect } from "react";
import {
    Text,
    View,
    Image,
    TouchableOpacity,
  } from "react-native";
import Styles from "../constant/Styles";
import String from "../constant/String";
const Chat =()=>{
    return(
<View>
<TouchableOpacity>
<View style={Styles.cardView}>
<Image source={require("../assets/avtar.png")} style={Styles.avtar}/>
<View style={Styles.textView}>
<Text style={Styles.nameText}>{String.Steven}</Text>
<Text style={Styles.timeText}>{String.time}</Text>
</View>
</View>
<View style={Styles.detailView}>
<Image source={require("../assets/phoneCall.png")} style={Styles.phoneImage}/>
<Text style={Styles.detailText}>{String.detail}</Text>
</View> 
</TouchableOpacity>
<View style={Styles.underLine}/>
</View>
    )
}

export default Chat;