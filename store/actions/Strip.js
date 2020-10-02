export const LOAD_STRIP = "LOAD_STRIP";

export const loadStrip = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://5f16ad48a346a0001673929b.mockapi.io/api/mockdata/chemicals"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();
      dispatch({ type: LOAD_STRIP, stripList: responseData });
    } catch (err) {
      throw err;
    }
  };
};
