import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#437c8dff",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="(tab)" options={{headerShown : false}}/>
      <Stack.Screen name="(drawer)" options={{headerShown : false}}/>
      <Stack.Screen name="index" options={{headerShown : false}}/>
      <Stack.Screen name="about" options={{headerShown : false}}/>
    </Stack>
  );
}
