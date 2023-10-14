import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView, StyleSheet, Image, TouchableOpacity } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.second}>
        <Text style={styles.text}>Jarvis</Text>
        <Text style={styles.text2}>The future is here, powered by AI</Text>
      </View>  
      <View style={styles.imageView}>
        <Image source={require('../../assets/imgs/welcome.png')} style={styles.img}/>
      </View>
      <View style={styles.touchableDiv}>
      <TouchableOpacity style={styles.touchable} onPress={()=>navigation.navigate('Home')}>
        <Text style={styles.text3}>Get started</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    backgroundColor: "white",
    flexDirection: 'column'
  },
  second: {
    flex: 20,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  text: {
    alignItems: "center",
    fontWeight: "bold",
    color: '#3a3d3b',
    fontSize: wp(10),
    textAlign: 'center'
  },
  text2:{
    textAlign: 'center',
    fontWeight: '600',
    color: 'gray',
    fontSize: wp(4)
  },
  imageView:{
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex:60,
    width: '100%',
  },
  img:{
    width: wp(75),
    height: wp(75)
  },
  touchable:{
    backgroundColor: '#259965',
    marginLeft: 10,
    marginRight: 10,
    padding: 15,
    borderRadius: 10,
  },
  touchableDiv:{
    flex:15,
  },
  text3:{
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    fontSize: wp(6)
  }
});
