import { useEffect } from "react";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TransitionPresets } from "@react-navigation/stack";
import HomeScreen from "./screens/Home";
import DetailsScreen from "./screens/Details";
import { View, Text, useTheme } from "tamagui";
import SettingsScreen from "./screens/Settings";

const Stack = createNativeStackNavigator();

export default function NativeNavigator() {
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
    // <View backgroundColor={theme.color9.val}>
    //   <Text color={theme.color1.val}>
    //     Open up App.js to start working on your app!
    //   </Text>
    // </View>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerTitle: null,
          headerLargeTitle: true,
          headerStyle: {
            backgroundColor: theme.color9.val,
            fontWeight: "100",
          },
          headerTransparent: false,
        })}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={({ navigation }) => ({
          headerShown: true,
          gestureEnabled: false,
          cardOverlayEnabled: true,
          statusBarTranslucent: true,
          ...TransitionPresets.ModalPresentationIOS,
        })}
        presentation="modal"
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={({ navigation }) => ({
          headerShown: true,
          gestureEnabled: true,
          cardOverlayEnabled: true,
        })}
      />
    </Stack.Navigator>
  );
}
