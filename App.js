import * as React from "react";
import { Text, View, FlatList, Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import One from './components/One'
import Two from './components/Two'



function Three() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Three</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Profiles" component={One} />
        <Tab.Screen name="Settings" component={Two} />
        <Tab.Screen name="Profile" component={Three} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
