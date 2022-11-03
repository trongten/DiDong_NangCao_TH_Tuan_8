import { View, Text, Animated } from "react-native";
import React, { useEffect, useRef } from "react";

export default function Bai5() {
  const fade1 = useRef(new Animated.Value(0)).current;
  const fade2 = useRef(new Animated.Value(0)).current;
  const fade3 = useRef(new Animated.Value(0)).current;
  const fade3t = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.sequence([
      Animated.timing(fade1, {
        toValue: -170,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(fade2, {
        toValue: 170,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(fade3, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(fade3t, {
        toValue: 100,
        duration: 1000,
        useNativeDriver: false,
      }),
    ]).start();
  }, []);

  return (
    <View>
      <Animated.View style={{ opacity: fade3, marginLeft: fade3t }}>
        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: "red",
            position: "absolute",
            marginLeft: 170,
          }}
        ></View>
      </Animated.View>
      <Animated.View style={{ marginLeft: fade2 }}>
        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: "blue",
            position: "absolute",
            marginLeft: 170,
          }}
        ></View>
      </Animated.View>
      <Animated.View style={{ marginLeft: fade1 }}>
        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: "yellow",
            position: "absolute",
            marginLeft: 170,
          }}
        ></View>
      </Animated.View>
    </View>
  );
}
