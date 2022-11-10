import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import AddTodo from "../screen/AddTodo";
import TodoList from "../screen/ListTodoScreen";
import UpdateTodo from "../screen/Update";
import { RootStackParamList } from "../type";

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
        name="ListTodo"
        component={TodoList}
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
        name="Update"
        component={UpdateTodo}
        options={({}) => ({
          title: "",
          headerLeft: () => (
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TouchableOpacity>
                <View style={{}}>
                  <Ionicons name="caret-back" size={24} color="black" />
                </View>
              </TouchableOpacity>
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
}
