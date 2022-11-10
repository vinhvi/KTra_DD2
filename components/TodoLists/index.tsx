import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableNativeFeedback, View, StyleSheet } from "react-native";
import { Todo } from "../../type";

export type TodoListItem = {
  todo: Todo;
};

const TodoList = (props: TodoListItem) => {
  const navigation = useNavigation();
  const { todo } = props;
  const todoID = () => {
    navigation.navigate("Update", {
      todo: {
        id: todo.id,
        title: todo.title,
        content: todo.content,
      },
    });
  };
  return (
    <TouchableNativeFeedback onPress={todoID}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{todo.title}</Text>
          <Text style={styles.content}>{todo.content}</Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};
export default TodoList;
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: "90%",
    height: 70,
    marginLeft: 20,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "gray",
    alignItems: "center",
  },
  title: {
    marginTop: 5,
    fontWeight: "bold",
    fontSize: 20,
    marginRight: 200,
  },
  content: {
    fontSize: 16,
  },
});
