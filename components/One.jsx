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
  const [names, setNames] = React.useState(data);
  const [refresh, setRefresh] = React.useState(false);

  const refreshData = () => {
    setRefresh(true);
    setNames([
      { name: "updated", image: "https://i.pravatar.cc/300?img=50" },
      { name: "hello", image: "https://i.pravatar.cc/300?img=2" },
      { name: "new", image: "https://i.pravatar.cc/300?img=66" },
    ]);
    setRefresh(false);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 40,
        backgroundColor: "#fff",
      }}
    >
      <Text style={{fontWeight: 'bold', fontSize: 32}}>Profiles</Text>
      <FlatList
        refreshing={refresh}
        onRefresh={refreshData}
        style={{ width: "100%" }}
        data={names}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <View
              style={[
                styles.rowStyle,
                index % 2 === 0 ? styles.itemEven : styles.itemOdd,
              ]}
            >
              <Image style={styles.image} source={{ uri: item.image }} />

              <Text
                style={{
                  marginLeft: 25,
                  lineHeight: 50,
                  fontWeight: "bold",
                  color: "blue",
                  opacity: 0.75,
                }}
              >
                {item.name}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
}
