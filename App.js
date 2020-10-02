import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import FeedNavigator from "./navigation/FeedNavigator";
import feedReducer from "./store/reducers/Feed";
import ReduxThunk from "redux-thunk";
const rootReducer = combineReducers({
  feed: feedReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <FeedNavigator />
    </Provider>
  );
}
