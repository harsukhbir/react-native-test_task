import {StyleSheet} from 'react-native';
import Colors from "../constant/Colors"

export default StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor:Colors.lightBlack,
},
topBar:{
 flexDirection:'row',
 justifyContent:"space-between",
  marginTop:15,
},
menuImage:{
  backgroundColor:Colors.white,
  height:20,
  width:20,
  left:20
},
msgText:{
  color:Colors.white,
  right:20,fontSize:22,
  bottom:5
},
searchIcon:{
  backgroundColor:Colors.white,
  height:20,
  width:20,
  right:10
},
underLine:{
  height:1,
  backgroundColor:Colors.gray,
  width:"100%"
},
flatListContainer:{
  flex:1,
   justifyContent: 'center',
},
cardView:{
flexDirection:'row',
marginLeft:11
},
avtar:{
  borderRadius:50/2,
  height:40,
  width:40,
  top:10
},
textView:{  
  alignSelf: 'center',
  flexDirection: 'row',
  width:240,
  justifyContent: 'space-between',
  left:12
},
nameText:{color:Colors.white,fontSize:18,},
timeText:{color:Colors.gray,left:10},
detailView:{
  flexDirection:'row',
  justifyContent:'center',
  alignContent:'center',
  right:5
},
phoneImage:{
  height:20,
  width:20,
  marginRight:5,
  bottom:7
},
detailText:{
  color:Colors.gray, 
  justifyContent:'center',
  bottom:7
},
fabIcon:{
  backgroundColor:Colors.purple,
   height:42,
   width:42,
   borderRadius:50/2, 
   position:"absolute",
   top:"88%",
   bottom:0,
   right:0,
   left:"80%"
},
msgImage:{
  height:25,
  width:25,
  alignSelf:'center',
  top:8
},

mainContainer:{
 backgroundColor:Colors.lightBlack,
 flex: 1,
 justifyContent: "center",
alignItems: "center"
}

        })