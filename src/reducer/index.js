import { combineReducers } from "redux";
import {routerReducer} from "react-router-redux";
import counterReducer from "./counter";
import articlesReducer from "./articles";
import commentsReducer from "./comments";
import filtersReducer from "./filters";

export default combineReducers({
  count: counterReducer,
  articles: articlesReducer,
  filters: filtersReducer,
  comments: commentsReducer,
  router: routerReducer
});
