import React from 'react';
import {Tabs} from 'expo-router';
import Colors from '@/constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5} from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarAccessibilityLabel: Colors.primary,
        tabBarLabelStyle: {
          fontFamily:'mon–sb',
        }
      }}
    >
      <Tabs.Screen name="index"
        options={{
          tabBarLabel: 'Explorer',
          tabBarIcon:({color,size})=> (<FontAwesome5 name="search" size={size} color="black" />
          ),
        }}
      />

      <Tabs.Screen name="wishlists"
        options={{
          tabBarLabel: 'Wishlists',
          tabBarIcon:({color,size})=> (<Ionicons name="heart-outline" size={24} color="black" />
          ),
        }}
      />

      <Tabs.Screen name="trips"
        options={{
          tabBarLabel: 'Trips',
          tabBarIcon:({color,size})=> (<FontAwesome5 name="airbnb" size={24} color="black" />
          ),       
        }}
      />

      <Tabs.Screen name="inbox"
        options={{
          tabBarLabel: 'Inbox',
          tabBarIcon:({color,size})=> (<MaterialCommunityIcons name="message-outline" size={24} color="black" />
          ),
        }}
      />

      <Tabs.Screen name="profile"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon:({color,size})=> (<Ionicons name="person-circle-outline" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  )
}

export default Layout;