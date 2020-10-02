import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Dimensions,
} from "react-native";
import Card from "../components/Card";
import { Video } from "expo-av";

const VideoFeed = (props) => {
  return (
    <Card style={styles.videoCard}>
      <View style={styles.videoFeed}>
        <Video
          source={{ uri: props.url }}
          useNativeControls={true}
          resizeMode="cover"
          usePoster={true}
          posterSource={{
            uri: props.thumbnail,
          }}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <View style={styles.title}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  videoCard: {
    height: Dimensions.get("window").width * 60,
    width: "90%",
    maxWidth: 350,
    maxHeight: 250,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  videoFeed: {
    height: "80%",
    width: "100%",
  },
  title: {
    backgroundColor: "#ccc",
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
});

export default VideoFeed;
