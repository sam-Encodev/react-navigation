import Main from "./src/Main";
import "@tamagui/core/reset.css";
import { StatusBar } from "expo-status-bar";
import { config } from "@tamagui/config/v3";
import { TamaguiProvider, createTamagui } from "tamagui";
import { SheetProvider } from "react-native-actions-sheet";
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from "react-native-gesture-handler";

const appConfig = createTamagui(config);

export default function App() {
  return (
    <NavigationContainer>
      <TamaguiProvider config={appConfig} defaultTheme="dark">
        <SheetProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <StatusBar style="auto" />
            <Main />
          </GestureHandlerRootView>
        </SheetProvider>
      </TamaguiProvider>
    </NavigationContainer>
  );
}
