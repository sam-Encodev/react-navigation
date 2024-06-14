import { useEffect } from "react";
import { useFonts } from "expo-font";
import {
  TransitionPresets,
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import HomeScreen from "./screens/Home";
import DetailsScreen from "./screens/Details";
import { useTheme } from "tamagui";
import SettingsScreen from "./screens/Settings";
import ModalScreen from "./screens/Modal";

const Stack = createStackNavigator();

export default function Main() {
  const theme = useTheme();
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {
    if (loaded) {
      // can hide splash screen here
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  console.log("theme", theme);
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerShown: false,
          title: "Home",
          headerLargeTitle: true,
          headerStyle: {
            backgroundColor: theme.color9.val,
          },
          headerTransparent: false,
        })}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={({ navigation }) => ({
          headerShown: true,
          gestureEnabled: true,
          cardOverlayEnabled: true,
          // ...TransitionPresets.ModalPresentationIOS,
          cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
        })}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={({ navigation }) => ({
          headerShown: true,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        })}
      />

      <Stack.Screen
        name="Modal"
        component={ModalScreen}
        options={({ navigation }) => ({
          headerShown: false,
          gestureEnabled: true,
          cardOverlayEnabled: true,
          presentation: "transparentModal",
        })}
      />
    </Stack.Navigator>
  );
}
