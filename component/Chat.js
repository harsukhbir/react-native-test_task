import React, { useState,useEffect } from "react";
import {
    Text,
    View,
    Image,
    TouchableOpacity,
  } from "react-native";
import Styles from "../constant/Styles";

const Chat =()=>{
    return(
<View>
<TouchableOpacity>
<View style={Styles.cardView}>
<Image source={require("../assets/avtar.png")} style={Styles.avtar}/>
<View style={Styles.textView}>
<Text style={Styles.nameText}>Steven Middleton</Text>
<Text style={Styles.timeText}>36 d</Text>
</View>
</View>
<View style={Styles.detailView}>
<Image source={require("../assets/phoneCall.png")} style={Styles.phoneImage}/>
<Text style={Styles.detailText}>Michael: Broadcast 1:56</Text>
</View> 
</TouchableOpacity>
<View style={Styles.underLine}/>
</View>
    )
}

export default Chat;