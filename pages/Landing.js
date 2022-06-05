import { Text, View,StyleSheet, ImageBackground , TouchableOpacity, Image, BackHandler} from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';

export default function Landing({navigation}) {
  
    return (
 <ImageBackground
         source={require("../assets/landing/backgroundImage.png")}
         style={styles.bgImage}
         >
      <View style={styles.mainContainer1}>
       
            <View>
                <Image style={styles.title} source={require('../assets/landing/title.png')}/>
            </View>

            <View >
                <TouchableOpacity onPress={()=>{navigation.navigate('Option')}}>
                    <View >
                        <Image style={styles.btn1} source={require("../assets/landing/playBtn.png")}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{BackHandler.exitApp()}}>
                    <View >
                        <Image style={styles.btn2} source={require("../assets/landing/exitBtn.png")}/>               
                         </View>
                </TouchableOpacity>
            </View> 
            </View>
</ImageBackground>
    )
  }
const styles = StyleSheet.create({
    mainContainer1:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
       
    },
    bgImage:{
        width:'100%',
        height:'100%'
    },
    title:{
        width: 380,
        height: 45,
        marginLeft:25,
        marginTop:200,
        marginBottom:100
    },
    btn1:{
    display:"flex",
    flexDirection:'row',
    padding:15,
    marginLeft:113,
    width: 210,
    height: 120,
    },
    btn2:{
        display:"flex",
        flexDirection:'row',
        width: 210,
        height: 120,
        marginLeft:113,
        marginTop:45,
        borderRadius: 105,
        },
     
})