import { AppDispatch, RootState } from '@/store';
import { userDetails } from '@/store/features/userSlice';
import { router, Stack } from 'expo-router';
import React, { useState } from 'react';
import { View } from 'react-native';
import 'react-native-reanimated';
import { useDispatch, useSelector } from 'react-redux';

export default function RootLayout() {
  const user = useSelector((state: RootState) => state.user)
  const dispatch: AppDispatch = useDispatch()

  const [isMounted, setIsMounted] = useState(false)

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
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="chat-view/[chatId]" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
