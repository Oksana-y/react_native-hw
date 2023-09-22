import { useNavigation } from "@react-navigation/native";

import { Camera } from "expo-camera";
import * as Location from "expo-location";
import * as MediaLibrary from "expo-media-library";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const CreatePost = () => {
  const navigation = useNavigation();
  const [location, setLocation] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photo, setPhoto] = useState("");
  const [locationName, setLocationName] = useState("");
  const [namePic, setNamePic] = useState("");

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();
      setHasPermission(status === "granted");
      let currentLocation = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      };
      await setLocation(coords);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const handleMakePhoto = async () => {
    async () => {
      if (cameraRef) {
        const { uri } = await cameraRef.takePictureAsync();
        // await MediaLibrary.createAssetAsync(uri);
        setPhoto(uri);
      }
    };
  };


  const addPost = data => {
    const newPost = {
      photo,
      location,
      locationName,
      namePic
  };
  

  navigation.navigate("Posts")
  handleResetData();
  }

  const handleResetData=()=>{
    setPhoto("");
    setNamePic("");
    setLocationName("");
      }



  return (
    <View style={styles.postContainer}>
      <View style={styles.photoContainer}>
      <View style={styles.postImage}>
        <Camera style={styles.camera} type={type} ref={setCameraRef}>
          {/* <View style={styles.photoView}> */}
            <TouchableOpacity
              style={styles.flipContainer}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            >
              <Ionicons name="camera-reverse" size={24} color="#F6F6F6" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleMakePhoto}>
              <FontAwesome name="camera" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          {/* </View> */}
        </Camera>
      </View>
      <Text style={styles.postText}>
        {" "}
        {photo ? "Редагувати фото" : "Завантажте фото "}
      </Text>
      </View>

      <View style={styles.postForm}>
        <TextInput
          style={styles.input}
          placeholder="Назва... "
          value={namePic}
          onChangeText={setNamePic}
        />
        <TextInput
          style={[styles.input, { paddingLeft: 25 }]}
          placeholder="Місцевість..."
          value={locationName}
          onChangeText={setLocationName}
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
  photoContainer:{
    width: 343,
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
    marginBottom: 32,
  },
  camera: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CreatePost;
