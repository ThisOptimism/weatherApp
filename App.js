import * as React from "react";
import { Text, View, FlatList, Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import One from './components/One'
import Two from './components/Two'
import Three from './components/Three'





const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Profiles" component={One} />
        <Tab.Screen name="Weather" component={Two} />
        <Tab.Screen name="Profile" component={Three} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
