import { router, Stack, Tabs } from 'expo-router';
import React, { useState } from 'react';
import { Button, Platform, Text, View } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import * as SecureStore from 'expo-secure-store';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const user = useSelector((state: RootState) => state.user)
  const [isMounted, setIsMounted] = useState(false)

  React.useEffect(() => {
    if (!isMounted) {
      setIsMounted(true)
    } else {
      if (!user.auth?.access) {
        return router.push('/login')
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
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
