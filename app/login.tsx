import React from 'react'
import * as SecureStore from 'expo-secure-store';
import { Link, router } from 'expo-router';
import { Button, Card, Icon, Text, TextInput } from 'react-native-paper';
import Container from '@/components/common/container/Container';
import Logo from '@/components/common/logo/Logo';
import { useForm, Controller } from 'react-hook-form';
import { Keyboard, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { userLogin } from '@/store/features/userSlice';
import { AppDispatch } from '@/store';
import axios from 'axios';

type LoginForm = {
  username?: string,
  password?: string,
}

export default function Login() {
  const { control, handleSubmit, formState: { errors }, setError } = useForm<LoginForm>({ mode: 'onChange' });
  const dispatch: AppDispatch = useDispatch()

  async function onSubmit(data: LoginForm) {
    try {
      const { password, username } = data

      if (password && username) {
        const data = await dispatch(userLogin({ username, password }))
        const err: any = data
        if (err?.error?.message === 'Rejected') {
          const message = (data.payload as { message: string })?.message
          setError('password', { message })
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Card style={{ height: '100%', flexDirection: 'column', justifyContent: 'center' }} >
        {/* <Card.Title title='Login' ></Card.Title> */}
        <Card.Content style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
          <Logo style={{ textAlign: 'center' }} size={50} />
          <Controller
            control={control}
            name="username"
            rules={{ required: { value: true, message: 'Username is required' } }}
            render={({ field }) => (
              <View>
                <TextInput
                  {...field}
                  onChangeText={(e) => field.onChange(e)}
                  mode='outlined'
                  label="Username"
                  placeholder="Enter Username"
                  error={Boolean(errors['username']?.message)}
                />
                {
                  errors['username']?.message &&
                  <Text style={{ color: 'red' }}> {errors.username.message}</Text>
                }
              </View>
            )}
          />
          <Controller
            control={control}
            name="password"
            rules={{ required: { value: true, message: 'Password Is Required' } }}
            render={({ field }) => (
              <View>
                <TextInput
                  {...field}
                  onChangeText={(e) => field.onChange(e)}
                  mode="outlined"
                  label="Password"
                  secureTextEntry
                  placeholder="Enter Password"
                  right={<TextInput.Icon icon="eye" />}
                  error={Boolean(errors['password']?.message)}
                />
                {
                  errors['password']?.message &&
                  <Text style={{ color: 'red' }}> {errors.password.message}</Text>
                }
              </View>
            )}
          />
          <Button mode="contained" onPress={handleSubmit(onSubmit)}>
            Login
          </Button>
          <Text style={{ paddingLeft: 10 }}>Don't Have an Account ? <Link style={{ color: 'blue' }} href={'/signup'}>Signup</Link></Text>
        </Card.Content>
      </Card>
    </Container>
  )
}
