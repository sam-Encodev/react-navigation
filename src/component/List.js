import {
 Text,
 View,
 FlatList,
 StyleSheet,
 TouchableOpacity,
} from "react-native";
import React from "react";
import EmptyState from "./EmptyState";
import { items } from "../utils/constants";

export default function List() {
 return (
  <FlatList
   ListEmptyComponent={<EmptyState content="No transactions yet" />}
   data={items}
   renderItem={(data) => (
    <View key={data.item.id}>
     <TouchableOpacity activeOpacity={0.7}>
      <Text style={styles.item}>{data.item.name}</Text>
     </TouchableOpacity>
    </View>
   )}
   keyExtractor={(item) => item.id}
   contentContainerStyle={{ gap: 10, paddingBottom: 30 }}
   showsVerticalScrollIndicator={false}
  />
 );
}

const styles = StyleSheet.create({
 item: {
  padding: 10,
  fontSize: 18,
  height: 44,
  borderWidth: 1,
 },
});
