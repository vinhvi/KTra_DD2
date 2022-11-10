import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import AddTodo from "../screen/AddTodo";
import TodoList from "../screen/Hinh1";
import UpdateTodo from "../screen/Hinh2";
import { Foundation } from "@expo/vector-icons";
import { RootStackParamList } from "../type";
import Hinh2 from "../screen/Hinh2";
import Hinh1 from "../screen/Hinh1";

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
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
        name="AddTodo"
        component={AddTodo}
        options={{ title: "Add Todo" }}
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
              <TouchableOpacity>
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
