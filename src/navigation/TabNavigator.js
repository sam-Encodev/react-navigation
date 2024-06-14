import { View } from "react-native";
import HomeScreen from "../screens/Home";
import DetailsScreen from "../screens/Details";
import SettingsScreen from "../screens/Settings";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const EmptyScreen = () => <View />;

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({})}
      />
      <Tab.Screen
        name="Details"
        component={DetailsScreen}
        options={({ navigation }) => ({
          headerShown: true,
        })}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={({ navigation }) => ({
          headerShown: true,
        })}
      />
      <Tab.Screen
        name="Chat"
        component={EmptyScreen}
        options={({ navigation }) => ({
          headerShown: true,
        })}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("Modal");
          },
        })}
      />
    </Tab.Navigator>
  );
}
