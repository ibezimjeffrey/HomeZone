import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {AddTochatscreen, ClientHomescreen, Dashboard, Messagescreen, Postscreen, Profilescreen, Searchscreen} from './index.js';
import Ionicons from 'react-native-vector-icons/Ionicons'; 


function Home() {
  return (
  <Dashboard/>
  );
}


const Tab = createBottomTabNavigator();

const Tabscreen = () => {
  return (
  
      <Tab.Navigator 
        screenOptions={({ route } ) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Post') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            } else if (route.name === 'Messages') {
              iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
            }
            else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person';
            }

      
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#268290',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={Dashboard} />
        <Tab.Screen name="Profile" component={Dashboard} />
     
      </Tab.Navigator>

  );
}

export default Tabscreen;