import { useEffect } from "react";
import { useTheme } from "tamagui";
import { useFonts } from "expo-font";
import ModalScreen from "./screens/Modal";
import TabNavigator from "./navigation/TabNavigator";
import { createStackNavigator } from "@react-navigation/stack";

const RootStack = createStackNavigator();

export default function Main() {
  const theme = useTheme();
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {
    if (loaded) {
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  console.log({ theme });

  return (
    <RootStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen name="Tabs" component={TabNavigator} />
      <RootStack.Screen
        name="Modal"
        component={ModalScreen}
        options={{ presentation: "transparentModal" }}
      />
    </RootStack.Navigator>
  );
}
