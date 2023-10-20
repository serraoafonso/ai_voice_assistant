import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Features() {
  return (
    <View style={{height: hp(60), marginTop: hp(20)}} >
      <Text style={styles.text1} >Features</Text>
      <View style={styles.view1a}>
        <View style={styles.view2}>
            <Image source={require('../../assets/imgs/chatgptIcon.png')} style={{height: hp(4), width: hp(4)}}/>
            <Text style={styles.text2}>ChatGPT</Text>
        </View>
        <Text style={styles.text3}>ChatGPT is a powerful AI model by OpenAI for natural text-based conversations.</Text>
      </View>

      <View style={styles.view1b}>
        <View style={styles.view2}>
            <Image source={require('../../assets/imgs/dalleIcon.png')} style={{height: hp(4), width: hp(4)}}/>
            <Text style={styles.text2}>DALL-E</Text>
        </View>
        <Text style={styles.text3}>DALL-E is an AI model that generates images from text descriptions.</Text>
      </View>

      <View style={styles.view1c}>
        <View style={styles.view2}>
            <Image source={require('../../assets/imgs/smartaiIcon.png')} style={{height: hp(4), width: hp(4)}}/>
            <Text style={styles.text2}>Smart Ai</Text>
        </View>
        <Text style={styles.text3}>"Smart AI" refers to advanced AI systems that can learn and make intelligent decisions independently.</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  text1: {
    fontWeight: 700,
    color: '#3a3d3b',
    fontSize: wp(6.5),
    marginHorizontal: 16
  },
  view1a:{
    backgroundColor: '#acfac4',
    padding: 13,
    marginHorizontal: 16,
    borderRadius: 8,
    marginTop: 8
  },
  view1b:{
    backgroundColor: '#e0c2fc',
    padding: 13,
    marginHorizontal: 16,
    borderRadius: 8,
    marginTop: 8
  },
  view1c:{
    backgroundColor: '#a7e0fa',
    padding: 13,
    marginHorizontal: 16,
    borderRadius: 8,
    marginTop: 8
  },
  view2:{
    display: 'flex',
    flexDirection:'row',
    alignItems: 'center',
    marginVertical: 1
  },
  text2:{
    fontWeight: '500',
    color: '#575656',
    marginHorizontal: 3,
    fontSize: wp(4.8)
  },
  text3:{
    fontStyle: wp(3.8),
    color: '#575656',
    marginVertical: 3
  }
})