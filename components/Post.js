import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { EvilIcons, Feather } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Post = ({ info }) => {
  const navigation = useNavigation();

  
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: info.data.photo || "https://picsum.photos/200/300" }}
        style={styles.postImage}
      />
      <Text style={styles.postText}>{info.data.namePhoto}</Text>
      <View style={styles.postInfoContainer}>
        <View style={styles.postInfo}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Comments", { data: info })}
          >
            <Feather name="message-circle" size={18} color="gray" />
          
          </TouchableOpacity>
        </View>

        <View style={styles.postInfo}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Map", { place: info.data.location })
            }
          >
            <EvilIcons name="location" size={24} color="gray" />
          </TouchableOpacity>
          <Text style={styles.postInfoLocation}>{info.data.locationName}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 400,
    height: 400,
    justifyContent: "flex-start",
    padding: 10,
  },
  postImage: {
    width: 343,
    height: 240,
    flex: 4,
    width: "100%",
    height: "100%",
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "red",
  },
  postText: {
    textAlign: "left",
    marginTop: 8,
    fontWeight: "500",
    fontSize: 16,
  },
  postInfoContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
  postInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    padding: 10,
  },
  postInfoLocation: {
    textDecorationLine: "underline",
    color: "#212121",
    fontSize: 16,
    fontWeight: "normal",
  },
  textComments: {
    fontWeight: "regular",
    fontSize: 16,
    color: "#BDBDBD",
  },
});

export default Post;


  {/* <Text style={styles.textComments}>{info.data.comments.length}</Text> */}