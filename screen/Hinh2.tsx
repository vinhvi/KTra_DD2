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
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

export default function UpdateTodo() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/kem-removebg-preview.png")}
        style={{ width: 350, height: 300 }}
      />
      <View style={{ marginLeft: 10 }}>
        <Text style={{ fontWeight: "bold", fontSize: 25 }}>Creamy ice</Text>
        <Text style={{ fontWeight: "bold", fontSize: 25 }}>$10.00</Text>
        <Text style={{ fontWeight: "bold", fontSize: 15, marginTop: 20 }}>
          Quantity
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            marginTop: 20,
          }}
        >
          <AntDesign name="minus" size={20} color="black" />
          <Text style={{ marginLeft: 10, fontSize: 15 }}>1</Text>
          <AntDesign
            name="plus"
            size={20}
            color="black"
            style={{ marginLeft: 10 }}
          />
        </View>
      </View>
      <View>
        <Text style={{ marginLeft: 20, marginTop: 20 }}>
          When building your own native code, GIF and WebP are not supported by
          default on Android.When building your own native code, GIF and WebP
          are not supported by default on Android.
        </Text>
        <View
          style={{
            backgroundColor: "#862B57",
            alignItems: "center",
            borderRadius: 20,
            width: "80%",
            height: 40,
            marginLeft: 40,
            marginTop: 10,
          }}
        >
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <SimpleLineIcons name="handbag" size={24} color="white" />
            <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>
              Add To Cart
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
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
