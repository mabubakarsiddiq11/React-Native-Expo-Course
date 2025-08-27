import "react-native-gesture-handler";
import { Link, useRouter } from "expo-router";
import { Pressable, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import MyButton from "../Components/MyButton";

export default function Index() {
const router = useRouter()
    const onContinue = () => {
        router.navigate('/login')
    }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "gray",
      }}
    >
      <MyButton title={"Continue"} onPress={onContinue}/>
    </View>
    
  );
};
