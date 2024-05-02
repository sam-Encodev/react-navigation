import "@tamagui/core/reset.css";
import { StatusBar } from "expo-status-bar";
import { config } from "@tamagui/config/v3";
import { SheetProvider } from "react-native-actions-sheet";
import { TamaguiProvider, createTamagui, View, Text } from "tamagui";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Main from "./Main";

const appConfig = createTamagui(config);

export default function App() {
  return (
    <TamaguiProvider config={appConfig}>
      <SheetProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <StatusBar style="auto" />
          <Main />
        </GestureHandlerRootView>
      </SheetProvider>
    </TamaguiProvider>
  );
}
