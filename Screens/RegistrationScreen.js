import { useState, useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Animated,
} from "react-native";

import background from "../image/background.png";
import avatar from "../image/avatar.png";
import AddSvg from "../image/add.svg";

export default function RegistrationScreen() {
  const [shift, setShift] = useState(false);
  const [position] = useState(new Animated.Value(0));
  const [isFocusedLoginInput, setIsFocusedLoginInput] = useState(false);
  const [isFocusedEmailInput, setIsFocusedEmailInput] = useState(false);
  const [isFocusedPassInput, setIsFocusedPassInput] = useState(false);

  useEffect(() => {
    const listenerShow = Keyboard.addListener("keyboardDidShow", () => {
      setShift(true);
    });
    const listenerHide = Keyboard.addListener("keyboardDidHide", () => {
      setShift(false);
    });

    return () => {
      listenerShow.remove();
      listenerHide.remove();
    };
  }, []);

  useEffect(() => {
    Animated.timing(position, {
      toValue: shift ? 130 : 50,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [shift]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Image source={background} style={styles.background} />
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          bounces={false}
        >
          <Animated.View
            style={[styles.formWrapper, { paddingBottom: position }]}
          >
            <Image source={avatar} style={styles.avatar} />

            <Image style={styles.svg} source={AddSvg} />

            <Text style={styles.title}>Реєстрація</Text>

            <View style={styles.inputsContainer}>
              <TextInput
                onFocus={() => setIsFocusedLoginInput(true)}
                onBlur={() => setIsFocusedLoginInput(false)}
                style={[
                  styles.input,
                  isFocusedLoginInput && styles.inputFocused,
                ]}
                placeholder="Логін"
              />
              <TextInput
                onFocus={() => setIsFocusedEmailInput(true)}
                onBlur={() => setIsFocusedEmailInput(false)}
                style={[
                  styles.input,
                  isFocusedEmailInput && styles.inputFocused,
                ]}
                placeholder="Адреса електронної пошти"
              />
              <TextInput
                onFocus={() => setIsFocusedPassInput(true)}
                onBlur={() => setIsFocusedPassInput(false)}
                style={[
                  styles.input,
                  isFocusedPassInput && styles.inputFocused,
                ]}
                placeholder="Пароль"
              />
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.btnText}>Зареєструватися</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Вже є акаунт? Увійти</Text>
          </Animated.View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}

const screenSize = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    top: 0,
    position: "absolute",
    height: screenSize.height,
    width: screenSize.width,
    resizeMode: "cover",
  },
  avatar: {
    position: "absolute",
    top: -55,
    borderRadius: 16,
    marginBottom: 32,
  },
  svg: {
    width: 25,
    height: 25,
    position: "absolute",
  },

  title: { fontSize: 26, fontWeight: "bold", marginBottom: 33 },
  inputsContainer: { gap: 16, width: "100%", padding: 16, marginBottom: 43 },
  input: {
    padding: 15,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: "regular",
    color: "#BDBDBD",
  },
  inputFocused: {
    borderColor: "#FF6C00",
  },

  scrollContainer: {
    minHeight: screenSize.height,
    justifyContent: "flex-end",
  },
  formWrapper: {
    paddingTop: 92,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  button: {
    width: 365,
    height: 51,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    marginBottom: 16,
  },
  btnText: {
    fontSize: 16,
    fontWeight: "regular",
    color: "#FFFFFF",
  },
  text: {
    fontSize: 16,
    fontWeight: "regular",
    color: "#1B4371",
  },
});
