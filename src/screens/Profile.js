import React from "react";
import { Text, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

export default function Profile() {
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
