import {
 View,
 Text,
 ScrollView,
 StyleSheet,
 TouchableOpacity,
} from "react-native";
import * as React from "react";

export default function HomeScreen({ navigation }) {
 return (
  <ScrollView
   contentContainerStyle={{
    gap: 10,
    paddingVertical: 70,
    paddingHorizontal: 10,
   }}
  >
   <View style={{ gap: 10 }}>
    <TouchableOpacity
     onPress={() => navigation.navigate("First", { screen: "Details" })}
     style={styles.button}
    >
     <Text style={styles.buttonText}>Go to Details</Text>
    </TouchableOpacity>

    <TouchableOpacity
     onPress={() => navigation.navigate("Second", { screen: "Settings" })}
     style={styles.button}
    >
     <Text style={styles.buttonText}>Go to Settings</Text>
    </TouchableOpacity>
   </View>
  </ScrollView>
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
