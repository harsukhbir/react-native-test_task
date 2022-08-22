import Styles from "../constant/Styles"
import React, { useState,useEffect } from "react";
import {
    Image,
    TouchableOpacity,
  } from "react-native";
const  FabIcon=()=> {
    return(
<TouchableOpacity style={Styles.fabIcon}>
  <Image source={require("../assets/message.png")} style={Styles.msgImage} />
</TouchableOpacity>
    )
}

export default FabIcon;
