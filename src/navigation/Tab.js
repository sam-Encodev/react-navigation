import { Settings as SettingsStack, Home as HomeStack } from "./Stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function Tabs() {
 return (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
   <Tab.Screen name="First">{() => <HomeStack />}</Tab.Screen>
   <Tab.Screen name="Second">{() => <SettingsStack />}</Tab.Screen>
  </Tab.Navigator>
 );
}
