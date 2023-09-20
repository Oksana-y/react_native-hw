import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

import RegistrationScreen from "./Screens/RegistrationScreen";
// import PostsScreen from "./Screens/PostsScreen";
import LoginScreen from "./Screens/LoginScreen";
import Home from "./Screens/Home";
import { TouchableOpacity } from "react-native";

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    bold: require("./assets/fonts/Roboto-Bold.ttf"),
    medium: require("./assets/fonts/Roboto-Medium.ttf"),
    regular: require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        <MainStack.Navigator initialRouteName="LoginScreen"
        screenOptions={{headerShown: false}}>
          <MainStack.Screen name="Login" component={LoginScreen} />
          <MainStack.Screen
            name="Registration"
            component={RegistrationScreen}
          />
          <MainStack.Screen name="Home" component={Home}  />
        </MainStack.Navigator>
      </NavigationContainer>
    </>
  );
}
