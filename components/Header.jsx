import React from "react";
import { Text, StatusBar, View } from "react-native";

const Header = () => {
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <Text
        style={{
          width: "100%",
          paddingTop: 40,
          paddingBottom: 15,
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        My Weather 🌞
      </Text>
    </View>
  );
};

export default Header;
