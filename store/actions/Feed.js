export const ADD_PROFILE = "ADD_PROFILE";
export const LOAD_VIDEO = "LOAD_VIDEO";

export const addProfile = (image) => {
  return {
    type: ADD_PROFILE,
    imagePath: image,
  };
};

export const loadVideo = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://private-c31a5-task27.apiary-mock.com/videos"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();
      dispatch({ type: LOAD_VIDEO, videoList: responseData.videos });
    } catch (err) {
      throw err;
    }
  };
};
