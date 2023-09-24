import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getposts } from "../redux/operations";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
  FlatList,
} from "react-native";
import Post from "../components/Post";

import avatar from "../image/avatar.png";

const PostsScreen = ({ user }) => {
  const data = useSelector((state) => state.main);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getposts());
  }, []);

  useEffect(() => {
    console.log(data,"data");
  }, [data]);
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.UserContainer}>
          <Image source={avatar} style={styles.avatar} />
          <View style={styles.userInfo}>
            <Text style={styles.name}>{data.user?.name}</Text>
            <Text style={styles.email}>{data.user?.email}</Text>
          </View>
        </View>

        {data.posts.length > 0 && (
          <View style={styles.listContainer}>
            <FlatList
              data={data.posts}
              renderItem={({ item }) => <Post info={item.data} />}
              keyExtractor={(item) => item.id}
            />
          </View>
        )}

        {/* {data.map((el) => (
          <Post
            key={el.id}
            img={background}
            text={el.name}
            location={el.location}
          />
        ))} */}
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
    marginLeft: 8,
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
  listContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PostsScreen;
