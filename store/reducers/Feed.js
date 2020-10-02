import { ADD_PROFILE, LOAD_VIDEO } from "../actions/Feed";

const initialState = {
  profileImage: "",
  videoFeeds: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROFILE:
      const newImagePath = action.imagePath;
      return { ...state, profileImage: newImagePath };
    case LOAD_VIDEO:
      let lodedFeed = action.videoList;
      lodedFeed = lodedFeed.map((x, i) => {
        x.id = (i + 1).toString();
        return x;
      });
      return { ...state, videoFeeds: lodedFeed };
  }

  return state;
};
