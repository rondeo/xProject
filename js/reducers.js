import { combineReducers } from "redux";
import {
  app,
  login,
  navigation,
  shipmentDetail,
  screenDetail
} from "js/modules";

export default combineReducers({
  app,
  login,
  navigation,
  shipmentDetail,
  screenDetail
});
