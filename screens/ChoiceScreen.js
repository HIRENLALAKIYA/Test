import React from "react";
import { View, StyleSheet, Text, Dimensions, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import Colors from "../constants/Colors";
import { addProfile } from "../store/actions/Feed";
import { useDispatch } from "react-redux";
import Card from "../components/Card";

const ChoiceScreen = (props) => {
  // const [pickedImage, setPickedImage] = useState();
  const dispatch = useDispatch();
  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(
      Permissions.CAMERA,
      Permissions.CAMERA_ROLL
    );
    if (result.status !== "granted") {
      Alert.alert(
        "Insufficient permissions!",
        "You need to grant camera and camera roll permissions to use this app",
        [{ text: "Okey" }]
      );
      return false;
    }
    return true;
  };

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    //   setPickedImage(image.uri);
    dispatch(addProfile(image.uri));
    props.navigation.navigate("MyFeed");
  };

  const imagePickHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    if (!image.cancelled) {
      // setPickedImage(image.uri);
      dispatch(addProfile(image.uri));
      props.navigation.navigate("MyFeed");
    }
  };
  return (
    <View style={styles.screen}>
      <Card onPress={takeImageHandler} style={styles.button}>
        <Text style={styles.text}>Open Camera</Text>
      </Card>
      <Card onPress={imagePickHandler} style={styles.button}>
        <Text style={styles.text}>Choose from Library</Text>
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    width: Dimensions.get("window").width * 0.4,
    height: Dimensions.get("window").width * 0.4,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ccc",
  },
  text: {
    color: "black",
    fontWeight: "bold",
  },
});
export default ChoiceScreen;
