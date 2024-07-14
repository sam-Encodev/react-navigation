import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

export default function Profile({navigation}) {
 // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
 useFocusEffect(
  React.useCallback(() => {
   alert("Screen was focused");
   // Do something when the screen is focused
   return () => {
    alert("Screen was unfocused");
    // Do something when the screen is unfocused
    // Useful for cleanup functions
   };
  }, []),
 );
 return (
  <View>
   <Text>Profile</Text>
  </View>
 );
}

const styles = StyleSheet.create({
 button: {
  borderRadius: 10,
  backgroundColor: "tomato",
 },
 buttonText: {
  padding: 10,
  fontSize: 20,
  color: "white",
  textAlign: "center",
  fontWeight: "700",
 },
});
