import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider } from 'react-redux';



const Stack = createNativeStackNavigator();

import HomeScreen from './Screens/HomeScreen';
import SignupScreen from './Screens/SignupScreen';
import LoginScreen from './Screens/LoginScreen';
import Dashboard from './Screens/Dashboard';
import AdminDashboard from './Screens/AdminDashboard';
import Tabscreen from './Screens/Tabscreen';
import AdminPost from './Screens/AdminPost';
import AdminTabscreen from './Screens/AdminTabscreen';
import Store from './context/store';
import { LogBox } from 'react-native';


export default function App() {
  LogBox.ignoreAllLogs()
  return (
<NavigationContainer>
  <Provider store={Store}>

          <Stack.Navigator screenOptions={{headerShown: false}}>

            

          <Stack.Screen name="HomeScreen" options={{ gestureEnabled: false }} component={HomeScreen} />
          <Stack.Screen name="LoginScreen" options={{ gestureEnabled: true }} component={LoginScreen} />

          <Stack.Screen name="SignupScreen" options={{ gestureEnabled: true }} component={SignupScreen} />
          <Stack.Screen name="Tabscreen" options={{ gestureEnabled: true }} component={Tabscreen} />
          <Stack.Screen name="AdminTabscreen" options={{ gestureEnabled: true }} component={AdminTabscreen} />
          <Stack.Screen name="AdminPost" options={{ gestureEnabled: true }} component={AdminPost} />
          <Stack.Screen name="Dashboard" options={{ gestureEnabled: true }} component={Dashboard} />
          <Stack.Screen name="AdminDashboard" options={{ gestureEnabled: true }} component={AdminDashboard} />
          

      </Stack.Navigator>
  
  </Provider>
  </NavigationContainer> 
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
