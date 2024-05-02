import { useEffect } from "react";
import { useFonts } from "expo-font";
import { View, Text } from "tamagui";

export default function Main() {
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
  return (
    <View>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}
