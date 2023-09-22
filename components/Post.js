import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";
import { EvilIcons, Feather } from "@expo/vector-icons";
import forest from "../image/forest.png";

const Post = ({ photo, text, message, location }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        // source={{ uri: photo.uri }}
        style={styles.postImage}
      ></ImageBackground>
      <Text style={styles.postText}>{text}</Text>
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
            onPress={() => navigation.navigate("Map", { location })}
          >
            <EvilIcons name="location" size={24} color="gray" />
          </TouchableOpacity>
          <Text style={styles.postInfoLocation}>{location}</Text>
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
});

export default Post;
