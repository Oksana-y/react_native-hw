import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

import { PersistGate } from "redux-persist/integration/react";
import { Provider, useSelector } from "react-redux";
import { store, persistor } from "./redux/store";

import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import Home from "./Screens/Home";
import MapScreen from "./Screens/MapScreen";
import CommentsScreen from "./Screens/CommentsScreen";

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
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <MainStack.Navigator
              initialRouteName="LoginScreen"
              screenOptions={{ headerShown: false }}
            >
              <MainStack.Screen name="Login" component={LoginScreen} />
              <MainStack.Screen
                name="Registration"
                component={RegistrationScreen}
              />
              <MainStack.Screen name="Home" component={Home} />
              <MainStack.Screen
                name="Comments"
                component={CommentsScreen}
                options={{
                  title: "Коментарі",
                  headerTintColor: "#212121",
                  headerTitleAlign: "center",
                }}
              />
              <MainStack.Screen
                name="Map"
                component={MapScreen}
                options={{
                  title: "Локація",
                  headerTintColor: "#212121",
                  headerTitleAlign: "center",
                }}
              />
            </MainStack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </>
  );
}
