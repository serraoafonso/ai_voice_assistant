import { View, Text, StyleSheet, SafeAreaView , Image} from 'react-native'
import React, { useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Features from '../components/Features';
import { dummyMessages } from '../constants';

export default function HomeScreen() {
  const [messages, setMessages] = useState([1])
  return (
    <View>
      <SafeAreaView style={styles.safe}>
        <View style={styles.view1}>
          <Image source={require('../../assets/imgs/bot.png')} style={{height: hp(15), width: hp(15)}}/>
        </View>
        {
          messages.length > 0 ? (
            <View style={styles.view2}>
                <Text> Ola </Text>
                <Image source={require('../../assets/imgs/bot.png')} style={{height: hp(15), width: hp(15)}}/>
            </View> 
          ):(
            <Features/>
          )
        }
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  safe:{
    display: 'flex',
    flex: 1,
    backgroundColor: "white",
  },
  view1: {
    display:'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  view2: {
    flex: 1,
    marginTop: hp(20),
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'green',

  },
  text1:{
    fontWeight: '500',
    color: '#575656',
    marginHorizontal: 3,
    fontSize: 50//wp(4.8)
  }
})