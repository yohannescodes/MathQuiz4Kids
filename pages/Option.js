import { StyleSheet, Text, View , TouchableOpacity, Image, ImageBackground} from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';


export default function Option({navigation}) {
  return (
           <ImageBackground source={require('../assets/option/backgroundImage.png')} style={{width:'100%', height:'100%'}}> 

    <View style={styles.mainContainer2}>
      
      <View style={styles.backBtnCont}>
        <TouchableOpacity onPress={()=>{navigation.goBack()}}> 
           <View><Image style={styles.backBtnImg} source={require('../assets/option/back.png')}/></View> 
        </TouchableOpacity> 
       </View>
       <View>
  <View style={styles.upperCont}>
      <View style={styles.btn1Cont}> 
       <TouchableOpacity onPress={()=>{navigation.navigate('Quiz', {operator: '+', initScore: 0, initialTime: 60})}}> 
           <View><Image style={styles.btn1Img}source={require('../assets/option/plusOperator.png')}/></View> 
        </TouchableOpacity>  
    </View>
    <View style={styles.btn2Cont}>
    <TouchableOpacity onPress={()=>{navigation.navigate('Quiz', {operator: '-', initScore: 0, initialTime: 60})}}> 
           <View><Image style={styles.btn2Img} source={require('../assets/option/minusOperator.png')}/></View> 
        </TouchableOpacity>  
    </View>
    
    </View> 
 
    <View style={styles.lowerCont}>
      <View style={styles.btn3Cont}>
       <TouchableOpacity onPress={()=>{navigation.navigate('Quiz', {operator: '*', initScore: 0, initialTime: 60})}}> 
           <View><Image  style={styles.btn3Img} source={require('../assets/option/productOperator.png')}/></View> 
        </TouchableOpacity>  
    </View>
    <View style={styles.btn4Cont}>
    <TouchableOpacity onPress={()=>{navigation.navigate('Quiz', {operator: '/', initScore: 0, initialTime: 60})}}> 
           <View><Image style={styles.btn4Img} source={require('../assets/option/divisionOperator.png')}/></View> 
        </TouchableOpacity>  
    </View> 
      
    </View> 
    </View>
    </View>
    </ImageBackground>
    
  )
}
const styles = StyleSheet.create({
  mainContainer2:{
    display:'flex',
    flex:1,
    width:'100%',
    height:'100%'
  },
  backBtnCont:{
   width:350,
   height:340
  },
  backBtnImg:{
   width:50,
   height:55,
   marginTop:75
  },
  btn1Img:{
    width:150,
    height:115,
    marginRight:0,
    marginBottom:90,
    marginLeft:45,
    borderRadius:45
  },
  btn2Img:{
    width:150,
    height:115,
    borderRadius:45,
    marginBottom:90,
    marginLeft:45
  },
  btn3Img:{
    width:150,
    height:115,
    marginBottom:90,
    marginLeft:45,
    borderRadius:45
  },
  btn4Img:{
    width:150,
    height:115,
    marginBottom:90,
    marginLeft:45,
    borderRadius:45
  },
  upperCont:{
    display:'flex',
    flexDirection:'row',
    marginTop:-20,
    
  },
  lowerCont:{
    display:'flex',
    flexDirection:'row',
    marginTop:0,

  },
})