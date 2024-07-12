import {
 View,
 Text,
 ScrollView,
 StyleSheet,
 TouchableOpacity,
} from "react-native";
import * as React from "react";

export default function SettingsScreen({ navigation }) {
 return (
  <ScrollView style={{ gap: 10, paddingVertical: 70, paddingHorizontal: 10 }}>
   <View style={{ gap: 10 }}>
    <TouchableOpacity
     onPress={() => navigation.navigate("Home")}
     style={styles.button}
    >
     <Text style={styles.buttonText}>Go to Home</Text>
    </TouchableOpacity>

    <TouchableOpacity
     onPress={() => navigation.navigate("Profile")}
     style={styles.button}
    >
     <Text style={styles.buttonText}>Go to Profile</Text>
    </TouchableOpacity>

    <TouchableOpacity
     onPress={() => navigation.navigate("Details")}
     style={styles.button}
    >
     <Text style={styles.buttonText}>Go to Details</Text>
    </TouchableOpacity>
   </View>
  </ScrollView>
 );
}

const styles = StyleSheet.create({
 item: {
  padding: 10,
  fontSize: 18,
  height: 44,
  borderWidth: 1,
 },
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
