import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const CreatePost = () => {
  const navigation = useNavigation();

  return (
  
      <View style={styles.postContainer}>
        <View style={styles.postImage}>
          <TouchableOpacity style={styles.postImageAdd}>
            <FontAwesome name="camera" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </View>
        <Text style={styles.postText}>Завантажте фото</Text>
        <View style={styles.postForm}>
          <TextInput style={styles.input} placeholder="Назва..." />
          <TextInput
            style={[styles.input, { paddingLeft: 25 }]}
            placeholder="Місцевість..."
          />
          <TouchableOpacity style={styles.postBtn} activeOpacity={0.5}>
            <Text style={styles.postBtnText}>Опублікувати</Text>
          </TouchableOpacity>
          <AntDesign
            style={styles.svgLocation}
            name="enviromento"
            size={24}
            color="#BDBDBD"
          />
        </View>
        <TouchableOpacity style={styles.delButton}>
          <AntDesign name="delete" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </View>
  
  );
};

const styles = StyleSheet.create({
  postContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingTop: 32,
    paddingHorizontal: 16,
    textAlign: "left",
  },
  postImage: {
    width: 343,
    height: 240,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    marginBottom: 8,
    overflow: "hidden",
  },
  postImageAdd: {
    width: 60,
    height: 60,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  postText: {
    color: " #BDBDBD",
    fontSize: 16,
    fontWeight: "normal",
    color: "#BDBDBD",
  },

  text: {
    alignItems: "flex-start",
    color: " #BDBDBD",
    fontSize: 16,
    fontWeight: "normal",
  },

  postForm: {
    gap: 16,
    marginBottom: 120,
  },

  input: {
    width: 343,
    height: 50,
    borderRadius: 8,
    fontWeight: "regular",
    fontSize: 16,
    color: "#BDBDBD",
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
  },

  svgLocation: {
    position: "absolute",
    top: 80,
  },
  postBtn: {
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    height: 50,
    width: 343,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",

    marginTop: 44,
  },
  postBtnText: {
    color: "#BDBDBD",
    fontWeight: "regular",
    fontSize: 16,
  },
  delButton: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F6F6F6",
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 50,
    marginBottom: 32,
  },
});

export default CreatePost;
