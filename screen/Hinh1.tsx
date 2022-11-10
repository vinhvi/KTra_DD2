import React, { useEffect, useState } from "react";
import {
  Image,
  Text,
  TouchableNativeFeedback,
  View,
  StyleSheet,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

export default function TodoList() {
  const [posts, setPosts] = useState([]);
  const navigation = useNavigation();
  const a = () => {
    navigation.navigate("Hinh2");
  };
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={a}>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 20,
            width: "90%",
            marginLeft: 20,
          }}
        >
          <Image
            style={{ width: 280, marginLeft: 20, height: 180 }}
            source={require("../assets/mon-kem-que-vi-dau-tay-removebg-preview.png")}
          />
        </View>
      </TouchableNativeFeedback>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 20,
        }}
      >
        <View
          style={{
            alignItems: "center",
            borderWidth: 1,
            borderRadius: 8,
            width: 50,
            backgroundColor: "#862B57",
          }}
        >
          <Text style={{ color: "white" }}>All</Text>
        </View>
        <Text>Chocolate</Text>
        <Text>Vanilla</Text>
        <Text>Strambetty</Text>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 10,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20, marginRight: 100 }}>
            Popular Ice-Creams
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 15, color: "#862B57" }}>
            View All
          </Text>
        </View>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            marginTop: 10,
          }}
        >
          <View style={{ width: "60%" }}>
            <Image
              style={{ width: 200, height: 150 }}
              source={require("../assets/kem-removebg-preview.png")}
            />
            <View>
              <View style={{ marginLeft: 35 }}>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                  Creamy ice
                </Text>
                <Text>Creamy flavor</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginLeft: 10,
                }}
              >
                <Text style={{ color: "#862B57", fontWeight: "bold" }}>
                  $10.00
                </Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderRadius: 20,
                    width: 35,
                    alignItems: "center",
                    backgroundColor: "#862B57",
                    marginRight: 50,
                  }}
                >
                  <Feather name="shopping-bag" size={25} color="white" />
                </View>
              </View>
            </View>
          </View>
          <View style={{ width: "70%", marginRight: 100 }}>
            <Image
              style={{ width: 200, height: 150 }}
              source={require("../assets/kem_coc-removebg-preview.png")}
            />
            <View>
              <View style={{ marginLeft: 35 }}>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                  Creamy ice
                </Text>
                <Text>Creamy flavor</Text>
              </View>
              <View
                style={{ flexDirection: "row", justifyContent: "space-around" }}
              >
                <Text style={{ color: "#862B57", fontWeight: "bold" }}>
                  $10.00
                </Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderRadius: 20,
                    width: 35,
                    alignItems: "center",
                    backgroundColor: "#862B57",
                    marginRight: 50,
                  }}
                >
                  <Feather name="shopping-bag" size={25} color="white" />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 30,
            width: 60,
            marginTop: 10,
            backgroundColor: "#862B57",
            alignItems: "center",
          }}
        >
          <AntDesign name="search1" size={40} color="white" />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 20,
        }}
      >
        <View>
          <AntDesign name="home" size={24} color="#862B57" />
          <Text style={{ color: "#862B57", fontWeight: "bold" }}>Home</Text>
        </View>
        <View>
          <Foundation name="heart" size={24} color="#862B57" />
          <Text style={{ color: "#862B57" }}>Heart</Text>
        </View>

        <View style={{ marginLeft: 100 }}>
          <Feather name="shopping-cart" size={24} color="#862B57" />
          <Text style={{ color: "#862B57" }}>shopping cart</Text>
        </View>
        <View>
          <FontAwesome name="user" size={24} color="#862B57" />
          <Text style={{ color: "#862B57" }}>Profile</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    marginTop: 20,
  },
});
