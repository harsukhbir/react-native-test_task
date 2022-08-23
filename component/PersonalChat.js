import React, { useState,useEffect } from "react";
import {
    Text,
    View,
    Image,
    TouchableOpacity,
  } from "react-native";
import Styles from "../constant/Styles";
import String from "../constant/String";
const Personal =()=>{
return(
<View>
<TouchableOpacity>
<View style={Styles.cardView}>
<Image source={require("../assets/avtar.png")} style={Styles.avtar}/>
<View style={Styles.textView}>
<Text style={[Styles.nameText,{marginTop:10}]}>{String.laura}</Text>
</View>
</View>
</TouchableOpacity>
<View style={[Styles.underLine,{marginTop:20}]}/>
</View>
    )
}

export default Personal;