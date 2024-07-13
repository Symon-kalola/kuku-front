import * as React from 'react';
import { Text, View } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//screans

import Home from './Home';
import Login from './Auth/Login';
import SignUp from './Auth/SignUp';
import Projects from './Customer/Projects';
import Media from './Customer/Media';
import Buy from './Customer/Buy';
import Settings from './Customer/Settings';

//import VerifyEmail from './Auth/VerifyEmail';

const homeName = 'Home';

const mediaName = 'History';
const buyName = 'Cart';
const projectsName = 'Products';
const settingsName = 'Notifications';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function MainContainer() {
  function LogoTitle() {
    return (
      <>
        <Image
          style={{
            borderRadius: 50,
            width: 40,
            height: 40,
          }}
          source={require('../assets/logS.jpg')}
        />
        <View>
          <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white', marginStart: 3 }}>KUKU-FRESH</Text>
        </View>
      </>
    );
  }

  function MainStack() {
    return (
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'orange' } }}>
        <Stack.Screen
          name="GrowGreen"
          component={MainTabs}
          options={({ navigation }) => ({
            headerTitle: (props) => <LogoTitle {...props} />,
            headerTitleStyle: {
              color: 'white',
            },
            headerRight: () => (
              <>
                <Ionicons
                  onPress={() => navigation.navigate('Login')}
                  name="log-in-outline"
                  size={20}
                  color={'white'}
                  style={{ marginRight: 15 }}
                />
                <Ionicons
                  onPress={() => navigation.navigate('SignUp')}
                  name="person-add-outline"
                  size={20}
                  color={'white'}
                  style={{ marginRight: 10 }}
                />
              </>
            ),
          })}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    );
  }
  function MainTabs() {
    return (
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let routeName = route.name;
            if (routeName === homeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (routeName === projectsName) {
              iconName = focused ? 'reader' : 'reader-outline';
            } else if (routeName === buyName) {
              iconName = focused ? 'cart' : 'cart-outline';
            } else if (routeName === mediaName) {
              iconName = focused ? 'today' : 'today-outline';
            } else if (routeName === settingsName) {
              iconName = focused ? 'notifications' : 'notifications-outline';
            }

            return <Ionicons name={iconName} size={20} color={'orange'} />;
          },
          tabBarActiveTintColor: 'orange',
        })}
      >
        <Tab.Screen name={homeName} component={Home} options={{ headerShown: false }} />
        <Tab.Screen name={projectsName} component={Projects} options={{ headerShown: false }} />
        <Tab.Screen name={buyName} component={Buy} options={{ headerShown: false }} />

        <Tab.Screen name={mediaName} component={Media} options={{ headerShown: false }} />
        <Tab.Screen name={settingsName} component={Settings} options={{ headerShown: false }} />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
