import { View, Text, Animated } from "react-native";
import React, { useEffect, useRef } from "react";

export default function Bai6() {
  const fadeAnin = useRef(new Animated.Value(-1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnin, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: false,
        }),
        Animated.timing(fadeAnin, {
          toValue: -1,
          duration: 1500,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, []);

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Animated.View
        style={{
          transform: [
            {
              rotate: fadeAnin.interpolate({
                inputRange: [0, 1],
                outputRange: ["0deg", "45deg"],
              }),
            },
          ],
        }}
      >
        <Text
          style={{
            fontSize: 130,
          }}
        >
          🔔
        </Text>
      </Animated.View>
    </View>
  );
}
