import store, { RootState } from '@/store'
import React, { ReactNode } from 'react'
import { Provider, useSelector } from 'react-redux'
import { MD3DarkTheme, MD3LightTheme, PaperProvider as RNPaperProvider } from 'react-native-paper';
import { RNPaperColors } from '@/constants/Colors';

type Props = { children: ReactNode }

export default function PaperProvider({ children }: Props) {
  const global = useSelector((state: RootState) => state.global)
  const customDarkTheme = { ...MD3DarkTheme, colors: RNPaperColors.dark };
  const customLightTheme = { ...MD3LightTheme, colors: RNPaperColors.light };
  return (
    <RNPaperProvider theme={global.theme === 'dark' ? customDarkTheme : customLightTheme}>
      {children}
    </RNPaperProvider>
  )
}
