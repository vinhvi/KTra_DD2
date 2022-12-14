import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { Foundation } from "@expo/vector-icons";
import { RootStackParamList } from "../type";
import Hinh2 from "../screen/Hinh2";
import Hinh1 from "../screen/Hinh1";
import Hinh3 from "../screen/Hinh3";

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const navigation = useNavigation();
  const b = () => {
    navigation.navigate("Hinh1");
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Hinh1"
        component={Hinh1}
        options={({}) => ({
          title: "",
          headerLeft: () => (
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View>
                <Ionicons
                  name="ellipsis-vertical-circle"
                  size={30}
                  color="black"
                />
              </View>
              <Text
                style={{ marginLeft: 120, fontWeight: "bold", fontSize: 20 }}
              >
                lcYYY
              </Text>
              <View style={{ marginLeft: 130 }}>
                <MaterialCommunityIcons
                  name="bag-personal"
                  size={30}
                  color="black"
                />
              </View>
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="Hinh3"
        component={Hinh3}
        options={({}) => ({
          title: "",
          headerLeft: () => (
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <TouchableOpacity onPress={b}>
                <View
                  style={{
                    borderWidth: 1,
                    borderRadius: 20,
                    width: 30,
                    alignItems: "center",
                    backgroundColor: "#862B57",
                  }}
                >
                  <Ionicons name="caret-back" size={25} color="white" />
                </View>
              </TouchableOpacity>
              <Text
                style={{ marginLeft: 120, fontWeight: "bold", fontSize: 20 }}
              >
                Your Cart
              </Text>
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="Hinh2"
        component={Hinh2}
        options={({}) => ({
          title: "",
          headerLeft: () => (
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <TouchableOpacity onPress={b}>
                <View
                  style={{
                    borderWidth: 1,
                    borderRadius: 20,
                    width: 30,
                    alignItems: "center",
                    backgroundColor: "#862B57",
                  }}
                >
                  <Ionicons name="caret-back" size={25} color="white" />
                </View>
              </TouchableOpacity>
              <Text
                style={{ marginLeft: 120, fontWeight: "bold", fontSize: 20 }}
              >
                Detalis
              </Text>
              <Foundation
                name="heart"
                size={24}
                color="red"
                style={{ marginLeft: 130 }}
              />
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
}
