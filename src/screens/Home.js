import * as React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import * as Device from "expo-device";
import { items } from "../../utils/constants";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView
      contentContainerStyle={{
        gap: 10,
        paddingVertical: 70,
        paddingHorizontal: 10,
      }}
    >
      <Text>
        {Device.manufacturer}: {Device.modelName} {Device.osName}{" "}
        {Device.osVersion} {Device.totalMemory} {Device.platformApiLevel}
      </Text>

      <View style={{ gap: 10 }}>
        {items.slice(0, 5).map((item) => (
          <TouchableOpacity activeOpacity={0.7} key={item.id}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={{ gap: 10 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Details")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Go to Details</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Settings")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Go to Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Modal")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Go to Modal</Text>
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
