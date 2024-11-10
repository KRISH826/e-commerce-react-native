import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import TabNavigator from "./routes/TabNavigator";

const Tab = createBottomTabNavigator();

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
