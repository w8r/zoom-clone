import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import MeetingRoom from "./screens/MeetingRoom";

export default function Navigation() {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Screen
          name="Meeting"
          component={MeetingRoom}
          options={{
            headerStyle: {
              backgroundColor: "#1c1c1c",
              shadowOpacity: 0,
            },
            headerTintColor: "#fff",
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
