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

export default function Hinnh3() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <Image
          source={require("../assets/kem_coc-removebg-preview.png")}
          style={{ width: 150, height: 150 }}
        />
        <View style={{ marginTop: 50 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Chocolate</Text>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>$08.00</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <Image
          source={require("../assets/kem_coc-removebg-preview.png")}
          style={{ width: 150, height: 150 }}
        />
        <View style={{ marginTop: 50 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Chocolate</Text>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>$08.00</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <Image
          source={require("../assets/kem_coc-removebg-preview.png")}
          style={{ width: 150, height: 150 }}
        />
        <View style={{ marginTop: 50 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Chocolate</Text>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>$08.00</Text>
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
});
