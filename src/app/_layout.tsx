import { useEffect } from "react";

/* Imports */
import { Platform } from "react-native";
import * as NavigationBar from "expo-navigation-bar";

import { Stack } from "expo-router";

export default function Layout() {
  useEffect(() => {
    if (Platform.OS === "android") {
      NavigationBar.setPositionAsync("absolute");
      NavigationBar.setBackgroundColorAsync("#ffffff00"); // Transparência total
    }
  }, []);

  return <Stack screenOptions={{ headerShown: false }} />;
}
