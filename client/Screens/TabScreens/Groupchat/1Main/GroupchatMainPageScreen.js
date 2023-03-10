import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import GroupchatCard from "./GroupchatsCard";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { SearchBar } from "react-native-elements";
// import { useNavigation } from "@react-navigation/native";
// import AppLoading from 'expo-app-loading';
// import {
//   useFonts,
//   Nunito_200ExtraLight,
//   Nunito_300Light,
//   Nunito_400Regular,
//   Nunito_500Medium,
//   Nunito_600SemiBold,
//   Nunito_700Bold,
//   Nunito_800ExtraBold,
//   Nunito_900Black,
//   Nunito_200ExtraLight_Italic,
//   Nunito_300Light_Italic,
//   Nunito_400Regular_Italic,
//   Nunito_500Medium_Italic,
//   Nunito_600SemiBold_Italic,
//   Nunito_700Bold_Italic,
//   Nunito_800ExtraBold_Italic,
//   Nunito_900Black_Italic,
// } from '@expo-google-fonts/nunito';

export default function GroupchatMainPageScreen({ navigation }) {
  const [searchText, setSearchText] = useState("");
  const [groupchats, setGroupchats] = useState([]);
  const [filteredGroupchats, setFilteredGroupchats] = useState([]);

  const updateSearch = (text) => {
    setSearchText(text);
    const filteredData = groupchats.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredGroupchats(filteredData);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setGroupchats(data);
        setFilteredGroupchats(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const renderGroupchats = ({ item }) => (
    <View>
      <GroupchatCard
        name={item.title.substring(0, 15) + "..."}
        description={item.description.substring(0, 15) + "..."}
        image={item.image}
        notificationNumber="99"
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Chats</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Create New Chat Screen")}
        >
          <MaterialIcons
            name="add-circle-outline"
            size={31}
            color="#63793B"
            style={styles.headerAdd}
          />
        </TouchableOpacity>
      </View>
      <View>
        <SearchBar
          placeholder="Search"
          onChangeText={updateSearch}
          value={searchText}
          inputContainerStyle={styles.inputContainer}
          containerStyle={styles.searchBar}
          inputStyle={styles.input}
        />
      </View>
      <View style={styles.body}>
        <FlatList
          data={filteredGroupchats.slice(0, 8)} // CHANGE THIS LINE, TAKE OUT SLICE
          renderItem={renderGroupchats}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: "15%",
    paddingBottom: "25%",
    // backgroundColor: "red",
  },
  header: {
    flexDirection: "row",
    // flex: 0.5,
    // bottom: "87.91%",
    // top: "8.55%",
    // backgroundColor: "red",
    justifyContent: "space-between",
    paddingBottom: 23,
  },
  headerText: {
    // alignSelf: "flex-start",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 32,
    lineHeight: 44,
    color: "#425027",
    // backgroundColor: "blue",
  },
  headerAdd: {
    // alignSelf: "stretch",
    // backgroundColor: "green",
    lineHeight: 44,
    paddingRight: 12,
  },

  searchBar: {
    // backgroundColor: "white",
    borderTopColor: "white",
    borderBottomColor: "white",
    // borderColor: "red",

    padding: 0,
    marginBottom: 32,
    borderRadius: 10,
  },
  inputContainer: {
    backgroundColor: "#D9D9D9",
    height: 40,
    // marginHorizontal: 20,
    borderRadius: 5,
  },
  input: {
    color: "#3e3e3e",
    fontSize: 16,
  },
  body: {
    // flex: 2,
    // backgroundColor: "blue",
    // alignItems: "center",
    marginBottom: 29,
  },
  title: {},
});