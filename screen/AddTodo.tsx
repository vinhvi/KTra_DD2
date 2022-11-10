import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Image,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
  StyleSheet,
  Alert,
  Button,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { aa } from "../assets/icon.png";
export default function AddTodo() {
  const navigation = useNavigation();
  const [uriImage, setUri] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );

  const [tile, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imager, setImage] = useState();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      // setUri(result.uri);
      console.log(result.uri);
      uploadphoto(
        "file:///data/user/0/host.exp.exponent/cache/ImagePicker/928be73b-253a-4450-9324-6651bc273e97.jpeg"
      );
    }
  };
  const uploadphoto = (uri: any) => {
    const data = new FormData();
    data.append("file", uri);
    data.append("upload_preset", "testUpload");
    data.append("cloud_name", "dv329zg5e");
    fetch("https://api.cloudinary.com/v1_1/dv329zg5e/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        // setImage(data.secure_url);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const addTodo = async () => {
    fetch(`https://6346c3c59eb7f8c0f8850411.mockapi.io/api/todo/Todo/`, {
      method: "post",
      body: JSON.stringify({
        title: tile,
        content: content,
        image: imager,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Alert.alert("Thành Công !!");
        navigation.navigate("ListTodo");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.a}>New Todo</Text>
      <TextInput
        onChangeText={(e) => setTitle(e)}
        placeholder="Title"
        style={styles.title}
      />
      <TextInput
        placeholder="Content"
        onChangeText={(e) => setContent(e)}
        style={styles.content}
      />
      <View>
        <Image source={{ uri: uriImage }} style={styles.image} />
        <TouchableNativeFeedback onPress={pickImage}>
          <View style={styles.add}>
            <Text>add iamge</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
      <View style={{ marginTop: 10 }}>
        <Button title="Add" onPress={addTodo} />
      </View>
    </View>
  );
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
});
