import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Features from "../components/Features";
import { dummyMessages } from "../constants";

export default function HomeScreen() {
  const [messages, setMessages] = useState(dummyMessages);
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <SafeAreaView style={styles.safe}>
        <View style={styles.view1}>
          <Image
            source={require("../../assets/imgs/bot.png")}
            style={{ height: hp(15), width: hp(15) }}
          />
        </View>
        {messages.length > 0 ? (
          <View style={styles.view2}>
            <Text style={styles.text1}> Assistant </Text>
            <View style={styles.view3}>
              <ScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                style={styles.scroll}
              >
                {messages.map((message, index) => {
                  if (message.role == "assistant") {
                    if (message.content.includes("https")) {
                      return (
                        <View key={index} style={styles.view6}>
                          <View style={styles.view8}>
                            <Image
                              source={{ uri: message.content }}
                              style={{ height: wp(60), width: wp(60), borderRadius: 20 }}
                              resizeMode='contain'
                            />
                          </View>
                        </View>
                      );
                    } else {
                      return (
                        <View key={index} style={styles.view6}>
                          <View style={styles.view7}>
                            <Text style=''>{message.content}</Text>
                          </View>
                        </View>
                      );
                    }
                  } else {
                    return (
                      <View key={index} style={styles.view4}>
                        <View style={styles.view5}>
                          <Text style=''>{message.content}</Text>
                        </View>
                      </View>
                    );
                  }
                })}
              </ScrollView>
            </View>
          </View>
        ) : (
          <Features />
        )}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: {
    marginTop: hp(5),
    display: "flex",
    flex: 1,
    backgroundColor: "white",
  },
  view1: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "white",
  },
  view2: {
    flex: 1,
  },
  text1: {
    fontWeight: "500",
    color: "#575656",
    marginHorizontal: 10,
    fontSize: wp(4.8),
  },
  view3: {
    height: hp(58),
    backgroundColor: "lightgray",
    borderRadius: 30,
    marginHorizontal: 15,
    display: "flex",
    marginTop: 5,
    padding: 5,
  },
  scroll: {
    marginHorizontal: 5,
  },
  view4: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  view5: {
    width: wp(70),
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
    marginTop: 14,
    marginRight: 12,
    borderTopRightRadius: 0,
  },
  view6: {
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  view7: {
    width: wp(70),
    backgroundColor: "#9dfada",
    borderRadius: 8,
    padding: 10,
    marginTop: 14,
    marginLeft: 12,
    borderTopLeftRadius: 0,
  },
  view8:{
    width: wp(64),
    backgroundColor: "#9dfada",
    borderRadius: 18,
    padding: 8,
    marginTop: 14,
    marginLeft: 12,
    borderTopLeftRadius: 0,
  }
});
