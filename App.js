import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import FeedNavigator from "./navigation/FeedNavigator";
import feedReducer from "./store/reducers/Feed";

const rootReducer = combineReducers({
  feed: feedReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <FeedNavigator />
    </Provider>
  );
}
