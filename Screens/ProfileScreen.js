import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ImageBackground,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import data from "../source/data";
import Post from "../components/Post";
import { Feather } from "@expo/vector-icons";
import avatar from "../image/avatar.png";
import background from "../image/background.png";
import forest from "../image/forest.png";
import addBtn from "../image/add.svg";
import { useDispatch, useSelector } from "react-redux";
import { getposts, signout } from "../redux/operations";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { posts } = useSelector((state) => state.main);
  console.log(posts.length);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getposts());
  }, []);

  const handleLogOut = () => {
    dispatch(signout()).then(() => navigation.navigate("Login"));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ImageBackground source={background} style={styles.bgImage}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <View style={styles.blockContainer}>
              <View style={styles.imageContainer}>
                <ImageBackground
                  source={avatar}
                  style={{ width: "100%", height: "100%" }}
                ></ImageBackground>
                <TouchableOpacity style={styles.add}>
                  <ImageBackground
                    source={addBtn}
                    style={{ width: "100%", height: "100%" }}
                  ></ImageBackground>
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.logoutBtn} onPress={handleLogOut}>
                <Feather name="log-out" size={24} color="gray" />
              </TouchableOpacity>
              <Text style={styles.title}>Natali Romanova</Text>
              {posts?.length > 0 && (
                <View style={styles.listContainer}>
                  <FlatList
                    data={posts}
                    renderItem={({ item }) => <Post info={item} />}
                    keyExtractor={(item) => item.id}
                  />
                </View>
              )}
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const screenSize = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    overflow: "visible",
    backgroundColor: "#FFFFFF",
  },
  logoutBtn: {
    marginLeft: 350,
    marginTop: -40,
  },
  background: {
    top: 0,
    position: "absolute",
    height: screenSize.height,
    width: screenSize.width,
  },
  blockContainer: {
    flex: 1,
    marginTop: 102,
    alignItems: "center",
    paddingTop: 22,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },

  imageContainer: {
    marginTop: -60,
    height: 120,
    width: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    overflow: "visible",
    overflow: "hidden",
  },

  add: {
    marginTop: -40,
    left: "90%",
    height: 25,
    width: 25,
    pointerEvents: "auto",
  },
  addBtn: {
    backgroundColor: "#FF6C00",
    height: 40,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  title: {
    fontWeight: "500",
    fontSize: 30,
    marginTop: 32,
    lineHeight: 35,
  },
  inputLogin: {
    backgroundColor: "#F6F6F6",
    width: 343,
    height: 50,
    borderRadius: 8,
    marginTop: 33,
    padding: 16,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
  },
  input: {
    backgroundColor: "#F6F6F6",
    width: 343,
    height: 50,
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    position: "relative",
  },
  passwordShowText: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
  },
  passwordShow: {
    top: -34,
    left: 130,
  },
  registerBtn: {
    backgroundColor: "#FF6C00",
    height: 50,
    width: 343,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginTop: 44,
  },
  registerBtnText: {
    color: "#fff",
    fontWeight: "400",
  },
  loginLink: {
    marginTop: 16,
    marginBottom: 66,
  },
  // loginLinkText: {
  //   fontStyle: "normal",
  //   fontWeight: "400",
  //   fontSize: 16,
  //   lineHeight: 19,
  // },
  listContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProfileScreen;
