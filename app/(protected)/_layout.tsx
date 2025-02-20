import { router, Stack, Tabs } from 'expo-router';
import React, { useState } from 'react';
import { Button, Platform, Text, View } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import * as SecureStore from 'expo-secure-store';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { userDetails } from '@/store/features/userSlice';
import { MaterialIcons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const user = useSelector((state: RootState) => state.user)
  const [isMounted, setIsMounted] = useState(false)
  const dispatch: AppDispatch = useDispatch()

  React.useEffect(() => {
    if (!isMounted) {
      setIsMounted(true)
    } else {
      if (!user.auth?.access) {
        return router.push('/login')
      } else {
        dispatch(userDetails())
      }
    }
  }, [isMounted, user.auth?.access]);


  // async function checkAuth() {
  //   try {
  //     const token = await SecureStore.getItemAsync('token')
  //     if (!token) router.push('/login');
  //   } catch (error) {

  //   }
  // }

  if (!isMounted) return <View></View>

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Chat',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="chat" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="person" color={color} />,
        }}
      />
    </Tabs>
  );
}
