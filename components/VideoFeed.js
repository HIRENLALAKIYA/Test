import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Dimensions,
  Share,
} from "react-native";
import Card from "../components/Card";
import { Video } from "expo-av";
import { Ionicons } from "@expo/vector-icons";

const VideoFeed = (props) => {
  const [play, setPlay] = useState(false);
  // const [show, setShow] = useState(true);
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: props.url,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const playPauseHandler = () => {
    setPlay((prevState) => !prevState);
  };

  return (
    <Card
      style={styles.videoCard}
      onPress={playPauseHandler}
      onLongPress={onShare}
    >
      <View style={styles.videoFeed}>
        <Video
          isLooping={true}
          shouldPlay={play}
          source={{ uri: props.url }}
          posterSource={{
            uri: props.thumbnail,
          }}
          resizeMode="stretch"
          style={{ width: "100%", height: "100%" }}
        />
        <View style={styles.button}>
          {play ? null : (
            <Ionicons name="md-play-circle" size={65} color="white" />
          )}
        </View>
      </View>
      <View style={styles.title}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  videoCard: {
    height: Dimensions.get("window").width * 0.6,
    width: Dimensions.get("window").width * 0.9,
    maxWidth: 350,
    maxHeight: 250,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    marginVertical: 10,
  },
  videoFeed: {
    height: "80%",
    width: "100%",
  },
  title: {
    // backgroundColor: "#ccc",
    borderRadius: 10,
    width: "100%",
    height: "20%",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    position: "absolute",
    alignSelf: "center",
    // left: (Dimensions.get("window").width * 0.9) / 2.4,
    bottom: (Dimensions.get("window").width * 0.6) / 4,
  },
});

export default VideoFeed;
