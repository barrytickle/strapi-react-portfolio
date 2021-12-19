import pages from "./pages";
import { combineReducers } from "redux";
import navigation from "./navigation";

const allReducers = combineReducers({
  pages: pages,
  navigation: navigation,
});

export default allReducers;
