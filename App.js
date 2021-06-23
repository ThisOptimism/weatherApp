import * as React from "react";
import { Text, View, FlatList, Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import One from './components/One'
import Two from './components/Two'
import Three from './components/Three'
import Header from './components/Header'





const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
    <Header />
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={One} />
        <Tab.Screen name="Random Weather" component={Two} />
        <Tab.Screen name="Search" component={Three} />
      </Tab.Navigator>
    </NavigationContainer>
    </>
  );
}
