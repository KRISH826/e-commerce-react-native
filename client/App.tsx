import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import TabNavigator from "./routes/TabNavigator";
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from 'react-native-reanimated';

const Tab = createBottomTabNavigator();

// This is the default configuration
configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false, // Reanimated runs in strict mode by default
});

export default function App() {
  return (
    <>
      <GestureHandlerRootView>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </GestureHandlerRootView>
    </>
  );
}
