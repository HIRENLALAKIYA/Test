import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  Button,
  TouchableOpacity,
} from "react-native";
import Colors from "../constants/Colors";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import ChoiceScreen from "../screens/ChoiceScreen";
import { useSelector } from "react-redux";

const ProfilePicker = (props) => {
  const selectedImage = useSelector((state) => state.feed.profileImage);
  const [pickedImage, setPickedImage] = useState();
  //   const verifyPermissions = async () => {
  //     const result = await Permissions.askAsync(
  //       Permissions.CAMERA,
  //       Permissions.CAMERA_ROLL
  //     );
  //     if (result.status !== "granted") {
  //       Alert.alert(
  //         "Insufficient permissions!",
  //         "You need to grant camera and camera roll permissions to use this app",
  //         [{ text: "Okey" }]
  //       );
  //       return false;
  //     }
  //     return true;
  //   };

  //   const takeImageHandler = async () => {
  //     const hasPermission = await verifyPermissions();
  //     if (!hasPermission) {
  //       return;
  //     }
  //     const image = await ImagePicker.launchCameraAsync({
  //       allowsEditing: true,
  //       aspect: [16, 9],
  //       quality: 0.5,
  //     });
  //     setPickedImage(image.uri);
  //   };

  //   const pickImage = async () => {
  //     const hasPermission = await verifyPermissions();
  //     if (!hasPermission) {
  //       return;
  //     }
  //     const image = await ImagePicker.launchImageLibraryAsync({
  //       allowsEditing: true,
  //       aspect: [16, 9],
  //       quality: 0.5,
  //     });

  //     if (!image.cancelled) {
  //       setPickedImage(image.uri);
  //     }
  //   };

  useEffect(() => {
    if (selectedImage) {
      setPickedImage(selectedImage);
    }
  }, [selectedImage]);

  const choiceSelector = () => {
    props.navigation.navigate("Choice");
  };
  return (
    <TouchableOpacity onPress={choiceSelector}>
      <View style={styles.profile}>
        {!pickedImage ? (
          <Text>Profile</Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickedImage }} />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  profile: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ProfilePicker;
