import { View, Text, Image, Animated } from "react-native";
import React, { useEffect, useRef } from "react";

export default function Bai7() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: false,
      })
    ).start();
  }, []);
  return (
    <View
      style={{
        backgroundColor: "white",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Animated.View
        style={{
          transform: [
            {
              rotate: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ["0deg", "360deg"],
              }),
            },
          ],
        }}
      >
        <Image
          style={{ height: 300, width: 300 }}
          source={{
            uri: "https://nhadepktv.vn/wp-content/uploads/2021/03/ly-giai-ngu-hanh-tuong-sinh-tuong-khac-1-1.jpg",
          }}
        ></Image>
      </Animated.View>
    </View>
  );
}
