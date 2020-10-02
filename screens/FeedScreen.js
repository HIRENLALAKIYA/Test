import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from "react-native";
import VideoFeed from "../components/VideoFeed";
import { useDispatch, useSelector } from "react-redux";
import { loadVideo } from "../store/actions/Feed";
import ProfilePicker from "../components/ProfilePic";
import { loadStrip } from "../store/actions/Strip";

const FeedScreen = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadVideo());
    dispatch(loadStrip());
  }, [dispatch]);

  const FeedData = useSelector((state) => state.feed.videoFeeds);

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.text}>My Feed</Text>
        <View style={styles.profile}>
          <TouchableOpacity>
            <ProfilePicker navigation={props.navigation} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.videoScreen}>
        <FlatList
          data={FeedData}
          renderItem={(itemData) => (
            <VideoFeed
              title={itemData.item.title}
              thumbnail={itemData.item.thumbnail_url}
              url={itemData.item.video_url}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 20,
    // justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingBottom: 20,
    height: 50,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    width: Dimensions.get("window").width / 2,
    paddingLeft: "7%",
  },
  profile: {
    width: Dimensions.get("window").width / 2,
    alignItems: "flex-end",
    paddingRight: "7%",
  },
  videoScreen: {
    alignItems: "center",
    marginTop: 25,
    marginBottom: 50,
  },
});
export default FeedScreen;
