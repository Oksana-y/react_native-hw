import { useState, useEffect } from "react";
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

export default function LoginScreen() {
  const [shift, setShift] = useState(false);
  const [position] = useState(new Animated.Value(0));
  const [isFocusedEmailInput, setIsFocusedEmailInput] = useState(false);
  const [isFocusedPassInput, setIsFocusedPassInput] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmail = (text) => setEmail(text);
  const handlePassword = (text) => setPassword(text);

  const handleSubmit = () => {
    if (!email || !password) {
      alert("Enter all fields please!");
      return;
    }
    console.log(`Email: ${email}, Password: ${password}`);
  };

  const toggleShowPassword = (event) => {
    event.stopPropagation();
    setShowPassword(!showPassword);
  };

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
      toValue: shift ? 90 : 50,
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
            <Text style={styles.title}>Увійти</Text>
            <View style={styles.inputsContainer}>
              <TextInput
                onFocus={() => setIsFocusedEmailInput(true)}
                onBlur={() => setIsFocusedEmailInput(false)}
                style={[
                  styles.input,
                  isFocusedEmailInput && styles.inputFocused,
                ]}
                value={email}
                onChangeText={handleEmail}
                placeholder="Адреса електронної пошти"
              />
              <TextInput
                onBlur={() => setIsFocusedPassInput(false)}
                onFocus={() => setIsFocusedPassInput(true)}
                style={[
                  styles.input,
                  isFocusedPassInput && styles.inputFocused,
                ]}
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={handlePassword}
                placeholder="Пароль"
              />

              <TouchableOpacity onPress={toggleShowPassword}>
                <Text style={styles.PasswordShower}>
                  {showPassword ? "Приховати" : "Показати"}
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.btnText} onPress={handleSubmit}>
                Увійти
              </Text>
            </TouchableOpacity>
            <Text style={styles.text}>Немає акаунту? Зареєструватися</Text>
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

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 33,
  },

  inputsContainer: {
    gap: 16,
    width: "100%",
    padding: 15,
    marginBottom: 43,
  },

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
    paddingTop: 32,
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
  PasswordShower: {
    fontSize: 16,
    textAlign: "right",
    fontFamily: "regular",
    color: "#1B4371",
    position: "absolute",
    bottom: 35,
    right: 20,
  },
});
