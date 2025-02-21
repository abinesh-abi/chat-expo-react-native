// export { useColorScheme } from 'react-native';

import { useColorScheme as useSystemTheme } from "react-native";

import React from "react";
import SecureStore from "@/utils/secureStore";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

type Theme = "dark" | "light";

export function useColorScheme(): Theme {
  const global = useSelector((state: RootState) => state.global);

  return global.theme;

  //   const systemTheme = useSystemTheme() as Theme;
  //   const customTheme = SecureStore.getItem("THEME");
  //   if (customTheme) {
  //     return customTheme === "light" ? "light" : "dark";
  //   }
  //   return systemTheme;
}
