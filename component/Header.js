import React, { useState,useEffect } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import Styles from "../constant/Styles";
import String from "../constant/String";
const Header =(props) => {
    return(
      <View>
        <View style={Styles.topBar}>
        <TouchableOpacity>
        <Image source={require("../assets/sideMenu.png")} style={Styles.menuImage}/>
        </TouchableOpacity>
        <Text style={Styles.msgText}>{props.text}</Text>
       <TouchableOpacity>
       <Image source={require("../assets/search.png")} style={Styles.searchIcon}/>
       </TouchableOpacity>
      </View>
       <View style={Styles.underLine}/>
      </View>
    )
} 

export default Header;