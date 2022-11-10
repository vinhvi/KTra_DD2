import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableNativeFeedback,
  Alert,
} from "react-native";

export default function UpdateTodo() {
  return <View style={styles.container}></View>;
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  a: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 35,
  },
  title: {
    marginTop: 10,
    marginLeft: 15,
    fontWeight: "bold",
    fontSize: 30,
    borderBottomWidth: 1,
    width: "100%",
    height: 50,
  },
  content: {
    marginTop: 10,
    marginLeft: 15,
    fontWeight: "normal",
    fontSize: 20,
    borderBottomWidth: 1,
    width: "100%",
    height: 50,
  },
  image: {
    marginTop: 10,
    width: 300,
    height: 200,
  },
  add: {
    marginTop: 10,
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 15,
  },
  update: {
    marginTop: 10,
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 15,
  },
  delete: {
    marginTop: 10,
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 15,
  },
});
