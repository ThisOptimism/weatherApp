import * as React from "react";
import axios from "axios";
import {
  Text,
  View,
  TextInput,
  Image,
  StyleSheet,
  StatusBar,
  TouchableHighlight,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function Three() {
  const [search, setSearch] = React.useState("");
  const [searchResults, setSearchResults] = React.useState(0);
  const [error, setError] = React.useState("search for city...");
  const [item, setItem] = React.useState({});
  const [newAlert, setNewAlert] = React.useState(0);

  React.useEffect(() => {}, []);

  const fetchCityTemp = (city) => {
    setItem({});
    setSearchResults(0);
    setError("Search for city...");
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&appid=f0c498244fd2d7efea775555c7502ad8&units=metric"
      )
      .then((response) => {
          let cityData = {
            name: response.data.name,
            temp: Math.ceil(response.data.main.temp),
            type: response.data.weather[0].main,
            desc: `Humidity: ${response.data.main.humidity}% – ${response.data.weather[0].main}`,
          };
          setItem(cityData);
          setSearchResults(1);
      })
      .catch((err) => {
        console.log(err);
        setError("City not found!");
      });
  };

  const getEmoji = (type) => {
    if (type === "Clouds") return "☁️";
    if (type === "Clear") return "☀️";
    if (type === "Haze") return "⛅️";
    if (type === "Thunderstorm") return "⛈";
    if (type === "Rain") return "🌧";
    if (type === "Mist") return "💨";
    if (type === "Snow") return "❄️";
  };

  const getTempRange = (t) => {
    if (t <= 11) return 1;
    if (t > 10 && t < 20) return 2;
    if (t >= 20 && t < 30) return 3;
    if (t >= 30) return 4;
  };

  const searchCity = () => {
    fetchCityTemp(search);
  };

  return (
    <View style={styles.container}>
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
      <View style={{ alignItems: "center", width: "90%" }}>
        <Text
          style={{
            textAlign: "center",
            lineHeight: 20,
            padding: 5,
            fontSize: 16,
          }}
        >
          Search for City
        </Text>
        <TextInput
          onChangeText={(text) => setSearch(text)}
          value={search}
          style={{
            width: "80%",
            padding: 15,
            margin: 5,
            backgroundColor: "black",
            color: "white",
          }}
        />
        <TouchableHighlight
          style={{ backgroundColor: "grey", borderRadius: 8, padding: 20 }}
          onPress={() => searchCity()}
        >
          <Text style={{ fontSize: 14, color: "white" }}>Search</Text>
        </TouchableHighlight>
      </View>

      {searchResults == 1 ? (
        <TouchableHighlight
          underlayColor="white"
          onPress={() => {
            alert(item.desc);
          }}
        >
          <LinearGradient
            colors={["rgba(0,0,0,0.05)", "transparent"]}
            start={[0, 0.5]}
          >
            <View style={styles.row}>
              <Text
                style={[
                  getTempRange(item.temp) == 1 ? styles.cold : styles.temp,
                  getTempRange(item.temp) == 2 ? styles.medium : styles.temp,
                  getTempRange(item.temp) == 3 ? styles.hot : styles.temp,
                  getTempRange(item.temp) == 4 ? styles.veryHot : styles.temp,
                ]}
              >
                {getEmoji(item.type)}
                {item.temp}°C
              </Text>
              <Text style={styles.cityName}>{item.name}</Text>
            </View>
          </LinearGradient>
        </TouchableHighlight>
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>{error}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  cold: { color: "blue" },
  medium: { color: "green" },
  hot: { color: "orange" },
  veryHot: { color: "red" },
  temp: {
    fontSize: 30,
    lineHeight: 40,
    width: 130,
    marginRight: 15,
    fontWeight: "bold",
    fontFamily: "Avenir",
  },
  cityName: {
    fontSize: 20,
    lineHeight: 40,
    fontFamily: "Avenir",
  },
  row: {
    flex: 1,
    width: 375,
    paddingVertical: 25,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "white",
  },
  container: { flex: 1, justifyContent: "flex-start", alignItems: "center" },
});

export default Three;
