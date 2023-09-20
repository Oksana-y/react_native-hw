import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { AntDesign, SimpleLineIcons, Feather } from "@expo/vector-icons";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

const BottomTabs = createBottomTabNavigator();

const Home = () => {
  const navigation = useNavigation();

  return (
    <BottomTabs.Navigator
      initialRouteName="Posts"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { height: 80 },
      }}
    >
      <BottomTabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <SimpleLineIcons
                name="grid"
                size={24}
                color={"rgba(33, 33, 33, 0.8)"}
              />
            );
          },
          headerTitleAlign: "center",
          headerRightContainerStyle: { paddingRight: 16 },

          headerTitle: () => (
            <Text
              style={{
                fontSize: 22,
                fontWeight: "medium",
                color: "#212121",
              }}
            >
              Публікації
            </Text>
          ),

          headerRight: () => (
            <TouchableOpacity
              style={styles.logoutBtn}
              onPress={() => navigation.navigate("Login")}
            >
              <Feather name="log-out" size={24} color="gray" />
            </TouchableOpacity>
          ),
        }}
      />

      <BottomTabs.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: () => {
            return (
              <TouchableOpacity
                style={styles.addBtn}
                onPress={() => navigation.navigate("CreatePostsScreen")}
              >
                <Text style={styles.addBtnText}>+</Text>
              </TouchableOpacity>
            );
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 16 }}
            >
              <AntDesign
                name="arrowleft"
                size={24}
                color="rgba(33, 33, 33, 0.8)"
              />
            </TouchableOpacity>
          ),
          headerTitleAlign: "center",
          headerTitle: () => (
            <Text
              style={{
                fontSize: 22,
                fontWeight: "medium",
                color: "#212121",
              }}
            >
              Створити публікацію
            </Text>
          ),

          tabBarStyle: { display: "none" },
        }}
      />
      <BottomTabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <AntDesign
                name="user"
                size={24}
                color={"rgba(33, 33, 33, 0.8)"}
              />
            );
          },
        }}
      />
    </BottomTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  addBtn: {
    backgroundColor: "#FF6C00",
    height: 40,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  addBtnText: {
    color: "#ffffff",
    fontSize: 18,
  },
});

export default Home;
