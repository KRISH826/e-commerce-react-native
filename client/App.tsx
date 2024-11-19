import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import TabNavigator from "./routes/TabNavigator";
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from 'react-native-reanimated';
import { Provider } from "react-native-paper";

const Tab = createBottomTabNavigator();

// This is the default configuration
configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false, // Reanimated runs in strict mode by default
});

export default function App() {
  return (
    <>
    <Provider>
      <GestureHandlerRootView>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
    </>
  );
}
