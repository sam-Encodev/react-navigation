import { useEffect } from "react";
import { useTheme } from "tamagui";
import Tabs from "./navigation/Tab";
import { useFonts } from "expo-font";

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

 return <Tabs />;
}
