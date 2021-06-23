import * as React from "react";
import { Text, View, FlatList, Image, StyleSheet } from "react-native";

const data = [
  { name: "Harry", image: "https://i.pravatar.cc/300?img=1" },
  { name: "James", image: "https://i.pravatar.cc/300?img=2" },
  { name: "Bobby", image: "https://i.pravatar.cc/300?img=3" },
  { name: "Carl", image: "https://i.pravatar.cc/300?img=4" },
  { name: "Jos", image: "https://i.pravatar.cc/300?img=5" },
  { name: "August", image: "https://i.pravatar.cc/300?img=6" },
  { name: "Winter", image: "https://i.pravatar.cc/300?img=7" },
];

const styles = StyleSheet.create({
  rowStyle: {
    flexDirection: "row",
    paddingHorizontal: 25,
    paddingVertical: 25,
    borderBottomWidth: 1,
    borderColor: "lightgrey",
  },
  itemOdd: {
    backgroundColor: "red",
  },
  itemEven: {
    backgroundColor: "#fff",
  },
  image: { height: 50, width: 50, borderRadius: 50 / 2 },
});

export default function One() {
  return (
    <View
      style={{
        flex: 1,
        
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Text style={{fontSize: 40, fontWeight: 'bold'}}>Weather App</Text>
    </View>
  );
}
