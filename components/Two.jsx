import * as React from "react";
import axios from "axios";
import {
  Text,
  View,
  FlatList,
  Image,
  StyleSheet,
  StatusBar,
  TouchableHighlight,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Two() {
  const [list, setList] = React.useState([]);
  const [newAlert, setNewAlert] = React.useState(0);
  const [alertMessage, setAlertMessage] = React.useState("");
  const [refresh, setRefresh] = React.useState(false);
  const [cities, setCities] = React.useState([
    {
      name: "Berlin",
      country: "Germany",
    },
    {
      name: "Lisbon",
      country: "Portugal",
    },
    {
      name: "Moscow",
      country: "Russia",
    },
    {
      name: "Munich",
      country: "Germany",
    },
    {
      name: "Hamburg",
      country: "Germany",
    },
    {
      name: "Berlin",
      country: "Germany",
    },
    {
      name: "Münster",
      country: "Germany",
    },
    {
      name: "Rostock",
      country: "Germany",
    },
    {
      name: "Konstanz",
      country: "Germany",
    },
    {
      name: "Dublin",
      country: "Ireland",
    },
    {
      name: "Rome",
      country: "Italy",
    },
    {
      name: "Amsterdam",
      country: "Netherlands",
    },
    {
      name: "Oslo",
      country: "Norway",
    },
    {
      name: "london",
      country: "UK",
    },
    {
      name: "Sydney",
      country: "Australia",
    },
  ]);

  const loadNewTemps = () => {
    setList([]);
    setRefresh(true);
    fetchTems();
  };

  React.useEffect(() => {
    fetchTems();
  }, []);

  const getRandom = (arr, n) => {
    let result = new Array(n),
      len = arr.length,
      taken = new Array(len);
    while (n--) {
      let x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  };

  const fetchCityTemp = (city, country, newList) => {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "," +
          country +
          "&appid=f0c498244fd2d7efea775555c7502ad8&units=metric"
      )
      .then((response) => {
        let cityData = {
          name: response.data.name,
          country: country,
          temp: Math.ceil(response.data.main.temp),
          type: response.data.weather[0].main,
          desc: `Humidity: ${response.data.main.humidity}% – ${response.data.weather[0].main}`,
        };
        newList.push(cityData);
        setList(newList);
        setRefresh(false);
      })
      .catch((err) => console.log(err));
  };

  const fetchTems = () => {
    let newList = [];
    setList([]);
    let list = getRandom(cities, 7);
    for (let city of list) {
      let name = city.name;
      let country = city.country;
      fetchCityTemp(name, country, newList);
    }
  };
  const getTempRange = (t) => {
    if (t <= 11) {
      return 1;
    }
    if (t > 10 && t < 20) {
      return 2;
    }
    if (t >= 20 && t < 30) {
      return 3;
    }
    if (t >= 30) {
      return 4;
    }
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
      <FlatList
        data={list}
        style={{ width: "100%" }}
        refreshing={refresh}
        onRefresh={loadNewTemps}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <TouchableHighlight
              underlayColor="white"
              onPress={() => {
                setAlertMessage(item.desc);
                setNewAlert(1);
                console.log(newAlert);
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
                      getTempRange(item.temp) == 2
                        ? styles.medium
                        : styles.temp,
                      getTempRange(item.temp) == 3 ? styles.hot : styles.temp,
                      getTempRange(item.temp) == 4
                        ? styles.veryHot
                        : styles.temp,
                    ]}
                  >
                    {getEmoji(item.type)}
                    {item.temp}°C
                  </Text>
                  <Text style={styles.cityName}>{item.name}</Text>
                </View>
              </LinearGradient>
            </TouchableHighlight>
          );
        }}
      />
      {newAlert == 1 && (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: 0,
            left: 0,
            height: '100%',
            width: '100%'
          }}
        >
          <View
            style={{
              height: 90,
              width: "75%",
            }}
          >
            <LinearGradient
              style={{
                flex: 1,
                borderRadius: 20,
                shadowColor: "black",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 2,
              }}
              colors={["#136a8a", "#267a81"]}
              start={[0, 0.65]}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: "white",
                  padding: 10,
                  textAlign: "center",
                }}
              >
                {alertMessage}
              </Text>
              <TouchableHighlight
                underlayColor={"transparent"}
                onPress={() => {
                  setAlertMessage("");
                  setNewAlert(false);
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "white",
                    padding: 5,
                    textAlign: "center",
                  }}
                >
                  close
                </Text>
              </TouchableHighlight>
            </LinearGradient>
          </View>
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
    paddingVertical: 25,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "white",
  },
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
