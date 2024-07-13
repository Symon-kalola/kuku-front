import * as React from 'react';
import { View, Text, Image, KeyboardAvoidingView, SafeAreaView, Pressable, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Axios from '../../utils/Axios';
import { TextInput } from 'react-native';
import { useState } from 'react';
import { ErrorMessage } from 'formik';
import { LoginService } from '../../services/AuthService';
export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [errorsMessage, setErrorsMessage] = useState('');

  async function handleLogin() {
    setErrors({});
    try {
      const { data } = await Axios.post('/login', { email, password });
      console.log(data.data);
    } catch (e) {
      if (e.response?.status === 422) setErrors(e.response.data.errors);
      if (e.response?.status === 401) setErrorsMessage(e.response.data.message);
      console.log(e.response.data.message);
    }
  }
  return (
    <SafeAreaView style={{ flex: 2, alignItems: 'center' }}>
      <View>
        <Image
          style={{
            borderRadius: 100,
            width: 120,
            height: 120,
            marginTop: 70,
          }}
          source={require('../../assets/logS.jpg')}
        />
        {/* <Text style={{ fontSize: 26, fontWeight: 'bold', color: 'orange' }}>KUKU FRESH</Text> */}
      </View>
      <KeyboardAvoidingView>
        <View style={{ alignItems: 'center' }}>
          {!errorsMessage ? (
            <Text
              style={{
                fontSize: 17,
                fontWeight: 'bold',
                marginTop: 5,
                color: 'black',
              }}
            >
              Kuku-Fresh
            </Text>
          ) : (
            <Text style={{ color: 'red', marginTop: 10 }}>Ooops!! {errorsMessage}</Text>
          )}
        </View>
        <View style={{ marginTop: 30 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
              backgroundColor: 'rgb(241, 172, 43)',
              paddingVertical: 5,
              borderRadius: 5,
            }}
          >
            <Ionicons name={'mail-outline'} size={20} color={'grey'} marginLeft={10} />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              keyboardType="email-address"
              placeholder="enter your email"
            />

            {/* <ion-icon name="mail-outline"></ion-icon> */}
            {/* <ion-icon name="lock-closed-outline"></ion-icon> */}
          </View>

          <Text style={{ color: 'red', marginTop: 2 }}>{email ? errors.email : errors.email}</Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
              backgroundColor: 'rgb(241, 172, 43)',
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 10,
            }}
          >
            <Ionicons name={'lock-closed-outline'} size={20} color={'grey'} marginLeft={10} />
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              type="password"
              placeholder="enter your password"
              style={{ width: 300 }}
            />
            {/* <ion-icon name="mail-outline"></ion-icon> */}
            {/* <ion-icon name="lock-closed-outline"></ion-icon> */}
          </View>
        </View>
        <Text style={{ color: 'red', marginTop: 2 }}>{errors.password}</Text>
        <View
          style={{
            marginTop: 12,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ color: 'grey' }}>Keep me logged in</Text>
          <Text style={{ color: 'rgb(13, 96, 173)', fontWeight: 500, fontSize: 13 }}>Forgot Password?</Text>
        </View>
        <View style={{ marginTop: 50 }} />
        <Pressable
          style={{
            width: 180,
            backgroundColor: 'orange',
            borderRadius: 6,
            marginLeft: 'auto',
            marginRight: 'auto',
            padding: 7,
          }}
        >
          <Text style={{ textAlign: 'center', color: 'black', fontWeight: 'bold', fontSize: 15 }} onPress={handleLogin}>
            Login
          </Text>
        </Pressable>
        <Pressable style={{ marginTop: 15 }}>
          <Text
            onPress={() => navigation.navigate('SignUp')}
            style={{ textAlign: 'center', color: 'rgb(13, 96, 173)', fontSize: 13 }}
          >
            Dont have an account? Sign Up
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
