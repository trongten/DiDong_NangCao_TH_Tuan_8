import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Book from "./views/Book";
import Bai2 from "./views/Bai2";
import Bai3 from "./views/Bai3";
import Bai4 from "./views/Bai4";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Bai4">
        <Stack.Screen name="Bai1" component={Book} />
        <Stack.Screen name="Bai2" component={Bai2} />
        <Stack.Screen name="Bai3" component={Bai3} />
        <Stack.Screen name="Bai4" component={Bai4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
