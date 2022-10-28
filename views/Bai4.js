import { View, Text, Image, Animated } from "react-native";
import React, { useEffect, useRef } from "react";

export default function Bai4() {
  const fadeText = useRef(new Animated.Value(0)).current;
  const fadeIma = useRef(new Animated.Value(0)).current;
  function start() {}
  useEffect(() => {
    Animated.timing(fadeText, {
      toValue: 100,
      duration: 3000,
      useNativeDriver: false,
    }).start();
    Animated.timing(fadeIma, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  }, []);
  return (
    <View>
      <Animated.View style={{ marginLeft: fadeText }}>
        <Text style={{ fontSize: 30 }}>React Native Animation</Text>
      </Animated.View>
      <Animated.View style={{ opacity: fadeIma }}>
        <Image source={require("../assets/2.png")}></Image>
      </Animated.View>
    </View>
  );
}
