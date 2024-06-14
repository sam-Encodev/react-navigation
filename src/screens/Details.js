import * as React from "react";
import { View } from "react-native";
import List from "../components/List";

export default function DetailsScreen({ navigation }) {
  return (
    <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
      <List />
    </View>
  );
}
