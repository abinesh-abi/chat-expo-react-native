import React from 'react'
import * as SecureStore from 'expo-secure-store';
import { Link, router } from 'expo-router';
import { Button, Card, Icon, Text, TextInput } from 'react-native-paper';
import Container from '@/components/common/container/Container';
import Logo from '@/components/common/logo/Logo';
import { useForm, Controller } from 'react-hook-form';
import { Keyboard, View } from 'react-native';

type LoginForm = {
  username?: string,
  password?: string,
}

export default function Signup() {
  const { control, handleSubmit, formState: { errors } } = useForm<LoginForm>({ mode: 'onChange' });

  async function login() {
    try {
      const updated = await SecureStore.setItemAsync('token', 'TOKEN')
      router.push('/')
    } catch (error) {

    }
  }

  async function onSubmit(data: LoginForm) {
    console.log('there')
  }

  return (
    <Container>
      <Card style={{ display: 'flex', height: '100%', justifyContent: 'center' }} >
        <Card.Content style={{ display: 'flex', gap: 10 }}>
          <Logo style={{textAlign:'center'}} size={50} />
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
            rules={{ required: { value: true, message: 'Password Is Require' } }}
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
            Signup
          </Button>
          <Text style={{paddingLeft:10}}>Alredy Have An Account ? <Link style={{ color: 'blue' }} href={'/login'}>Login</Link></Text>
        </Card.Content>
      </Card>
    </Container>
  )
}
