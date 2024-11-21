import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import TabNavigator from "./routes/TabNavigator";
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from "react-native-reanimated";
import { Provider } from "react-native-paper";
import StackNavigator from "./routes/StackNavigator";
import { useState } from "react";
import AuthStackNavigator from "./routes/AuthStackNavigator";

const Tab = createBottomTabNavigator();

// This is the default configuration
configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false, // Reanimated runs in strict mode by default
});

export default function App() {
  const [authenticated, setauthenticated] = useState(true);
  console.log(authenticated);

  return (
    <>
      <Provider>
        <GestureHandlerRootView>
          <NavigationContainer>
            {authenticated ? (
              <>
                <AuthStackNavigator setAuthenticated={setauthenticated} />
              </>
            ) : (
              <>
                <TabNavigator />
              </>
            )}
          </NavigationContainer>
        </GestureHandlerRootView>
      </Provider>
    </>
  );
}
