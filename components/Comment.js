import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import friend from "../image/friend.png";

const Comment = ({ odd, data }) => {
  console.log(odd, data);

  const newDate = new Date(data.date);
  const newDateString = newDate.toLocaleString();

  return (
    <View
      style={[
        styles.container,
        odd ? { flexDirection: "row" } : { flexDirection: "row-reverse" },
      ]}
    >
      <View style={styles.photoContainer}>
        <ImageBackground
          source={friend}
          style={{ flex: 1 }}
          resizeMode="cover"
        />
      </View>
      <View
        style={[
          styles.textWrapper,
          odd ? { borderTopLeftRadius: 0 } : { borderTopRightRadius: 0 },
        ]}
      >
        <Text
          style={[
            styles.textComment,
            odd ? { alignSelf: "flex-end" } : { alignSelf: "flex-start" },
          ]}
        >
          {data.message}
        </Text>
        <Text
          style={[
            styles.textData,
            odd ? { textAlign: "right" } : { textAlign: "left" },
          ]}
        >
          {newDateString}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "auto",
    width: 343,
    gap: 16,
    alignItems: "flex-start",
    paddingBottom: 32,
  },
  photoContainer: {
    width: 28,
    height: 28,
    borderRadius: 100,
    overflow: "hidden",
    backgroundColor: "green",
  },

  textComment: {
    fontWeight: "regular",
    fontSize: 13,
    color: "#212121",
  },
  textData: {
    fontWeight: "regular",
    fontSize: 10,
    color: "#BDBDBD",
  },
  textWrapper: {
    borderRadius: 6,
    padding: 16,
    width: 299,
    backgroundColor: "#F6F6F6",
  },
});

export default Comment;
