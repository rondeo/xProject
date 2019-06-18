import update from "immutability-helper";

import _ from "lodash";
import { updateFieldValueInState } from "js/Services";

export const NAME = "screenDetail";
export const UPDATE_FIELD_FIELD = "UPDATE_FIELD_FIELD" + " " + NAME;
export const INIT_SCREEN = "INIT_SCREEN" + " " + NAME;

export const updateFieldValue = ({ screenName, data }) => {
  return { type: UPDATE_FIELD_FIELD, data: data, screenName: screenName };
};

export const initScreen = ({ screenName, isReset = false }) => {
  return { type: INIT_SCREEN, screenName: screenName, isReset };
};

const REDUCER_HANDLERS = {
  [INIT_SCREEN]: (state, action) => {
    const screenName = action.screenName;
    const isReset = action.isReset;
    if (!state[screenName] || isReset) {
      state = update(state, { [screenName]: { $set: {} } });
    }

    return state;
  },
  [UPDATE_FIELD_FIELD]: (state, action) => {
    return updateFieldValueInState(state, action);
  }
};

const initialState = {};

//export default initialState;
export default function myReducer(state = initialState, action) {
  const handler = REDUCER_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
