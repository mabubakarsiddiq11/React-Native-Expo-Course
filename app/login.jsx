import { useRouter } from "expo-router";
import { Image, Text } from "react-native";
import { View } from "react-native";
import "react-native-gesture-handler";
import MyButton from "../Components/MyButton";
import { TextInput } from "react-native";
import { useState } from "react";

export default function Login() {
  const router = useRouter();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const onLogin = () => {
    router.navigate("/signup");
    console.log(userData);
  };
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Image
        source={require("@/assets/images/login.jpeg")}
        style={{ width: "100%", height: 300 }}
        resizeMode="cover"
      />

      <View style={{ padding: 20, gap: 9 }}>
        <TextInput
          placeholder="Enter Your Email"
          value={userData.email}
          onChangeText={(text) => setUserData({ ...userData, email: text })}
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
        />

        <TextInput
          placeholder="Enter Your Password"
          value={userData.password}
          //   secureTextEntry
          onChangeText={(text) => setUserData({ ...userData, password: text })}
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
        />

        <MyButton title={"Login"} onPress={onLogin} />
      </View>
    </View>
  );
}
