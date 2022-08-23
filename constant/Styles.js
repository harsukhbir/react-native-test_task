import {StyleSheet} from 'react-native';
import Colors from "../constant/Colors"
import { moderateScale } from 'react-native-size-matters';

export default StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor:Colors.lightBlack,
},
topBar:{
 flexDirection:'row',
 justifyContent:"space-between",
  marginTop:moderateScale(15),
},
menuImage:{
  height:moderateScale(20),
  width:moderateScale(20),
  left:moderateScale(20)
},
msgText:{
  color:Colors.white,
  right:20,fontSize:22,
  bottom:moderateScale(5)
},
searchIcon:{
  height:moderateScale(18),
  width:moderateScale(18),
  right:moderateScale(15)
},
underLine:{
  height:moderateScale(1),
  backgroundColor:Colors.gray,
  width:"100%"
},
flatListContainer:{
  flex:1,
   justifyContent: 'center',
},
cardView:{
flexDirection:'row',
marginLeft:moderateScale(11)
},
avtar:{
  borderRadius:50/2,
  height:moderateScale(37),
  width:moderateScale(37),
  top:moderateScale(11)
},
textView:{  
  alignSelf: 'center',
  flexDirection: 'row',
  width:moderateScale(252),
  justifyContent: 'space-between',
  left:moderateScale(13)
},
nameText:{color:Colors.white,fontSize:18,},
timeText:{color:Colors.gray,left:10},
detailView:{
  flexDirection:'row',
  justifyContent:'center',
  alignContent:'center',
  right:7
},
phoneImage:{
  height:moderateScale(20),
  width:moderateScale(20),
  marginRight:moderateScale(5),
  bottom:moderateScale(7)
},
detailText:{
  color:Colors.gray, 
  justifyContent:'center',
  bottom:moderateScale(7)
},
fabIcon:{
  backgroundColor:Colors.purple,
   height:moderateScale(42),
   width:moderateScale(42),
   borderRadius:50/2, 
   position:"absolute",
   top:"88%",
   bottom:0,
   right:0,
   left:"80%"
},
msgImage:{
  height:moderateScale(25),
  width:moderateScale(25),
  alignSelf:'center',
  top:moderateScale(8.5)
},
CallContainer:{
  backgroundColor:Colors.lightBlack,
  flex: 1,
  justifyContent: "center",
},
mainContainer:{
 backgroundColor:Colors.lightBlack,
 flex: 1,
 justifyContent: "center",
alignItems: "center"
},
focusStyle: {
  position: 'absolute',
  backgroundColor:Colors.purple,
  top: moderateScale(7),
  width: moderateScale(40),
  height: moderateScale(40),
  borderRadius: moderateScale(20),
  alignItems: 'center',
  justifyContent: 'center',
 },
 unfocusStyle: {
  position: 'absolute',
  top: 7,
  width: moderateScale(40),
  height: moderateScale(40),
  borderRadius: moderateScale(20),
  alignItems: 'center',
  justifyContent: 'center',
 },
 image: {
  width: moderateScale(20),
  height: moderateScale(20),
  top:moderateScale(37)
 },


labelFocusedContainer: {
  alignItems: 'center',
  width: '170%',
  borderBottomWidth: 3,
  borderBottomColor: Colors.purple,
  bottom:moderateScale(27)
},
labelContainer: {
  alignItems: 'center',
  width: '100%',
  bottom:moderateScale(30)
  
},




        })