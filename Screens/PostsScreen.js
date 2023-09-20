import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
} from "react-native";
import Post from "../components/Post";
import data from "../source/data";
import background from "../image/background.png";
import avatar from "../image/avatar.png";

const PostsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
        <View style={styles.UserContainer}>
          <Image source={avatar} style={styles.avatar} />
          <View style={styles.userInfo}>
            <Text style={styles.name}>Natali Romanova</Text>
            <Text style={styles.email}>email@example.com</Text>
          </View>
        </View>

        {data.map((el) => (
          <Post
            key={el.id}
            img={background}
            text={el.name}
            location={el.location}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    overflow: "visible",
    backgroundColor: "#FFFFFF",
    
  },
  UserContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
    marginTop: 32,
    marginLeft:8,
  },
  userInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
    marginRight: 8,
  },
  name: {
    color: "#212121",
    fontSize: 13,
    fontWeight: "bold",
  },
  email: {
    color: "rgba(33, 33, 33, 0.80)",
    fontSize: 11,
    fontWeight: "normal",
  },
});

export default PostsScreen;
