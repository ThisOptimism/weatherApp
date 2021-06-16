import * as React from "react";
import {createBottomTabNavigator} from 'react-navigator'
import { View, Text, StyleSheet, FlatList, Image } from "react-native";




// const data = [
// { name: "Harry", image: "https://i.pravatar.cc/300?img=1" },
//   { name: "James", image: "https://i.pravatar.cc/300?img=2" },
//   { name: "Bobby", image: "https://i.pravatar.cc/300?img=3" },
//   { name: "Carl", image: "https://i.pravatar.cc/300?img=4" },
//   { name: "Jos", image: "https://i.pravatar.cc/300?img=5" },
//   { name: "August", image: "https://i.pravatar.cc/300?img=6" },
//   { name: "Winter", image: "https://i.pravatar.cc/300?img=7" },
// ];

// export default function App() {
//   const [names, setNames] = React.useState(data);
//   const [refresh, setRefresh] = React.useState(false);

//   const refreshData = () => {
//     setRefresh(true)
//     setNames([
//       { name: "updated", image: "https://i.pravatar.cc/300?img=50" },
//       { name: "hello", image: "https://i.pravatar.cc/300?img=2" },
//       { name: "new", image: "https://i.pravatar.cc/300?img=66" },
//     ]);
//     setRefresh(false)
//   };

//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         marginTop: 50,
//       }}
//     >
//       <FlatList
//         refreshing={refresh}
//         onRefresh={refreshData}
//         style={{ width: "100%" }}
//         data={names}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item, sepatator }) => {
//           return (
//             <View style={{ paddingVertical: 45, borderBottomWidth: 1 }}>
//               <Image
//                 style={{ height: 50, width: 50 }}
//                 source={{ uri: item.image }}
//               />
//               <Text>{item.name}</Text>
//             </View>
//           );
//         }}
//       />
//     </View>
//   );
// }
