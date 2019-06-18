import update from "immutability-helper";

import _ from "lodash";
export const updateFieldValueInState = (state, action) => {
  let params = action.data;
  let screenName = action.screenName;

  if (!state[screenName]) {
    state = update(state, { [screenName]: { $set: {} } });
  }
  Object.keys(params).map((key, index) => {
    const value = params[key];
    if (_.isObject(value) && !_.isArray(value)) {
      if (!state[screenName][key]) {
        state = update(state, {
          [screenName]: { [key]: { $set: {} } }
        });
      }
      Object.keys(value).map((insideKey, index) => {
        if (!state[screenName][key][insideKey]) {
          state = update(state, {
            [screenName]: { [key]: { [insideKey]: { $set: {} } } }
          });
        }
        state = update(state, {
          [screenName]: {
            [key]: { [insideKey]: { $set: value[insideKey] } }
          }
        });
      });
    } else {
      if (!state[screenName][key]) {
        state = update(state, {
          [screenName]: { [key]: { $set: "" } }
        });
      }
      state = update(state, {
        [screenName]: { [key]: { $set: value } }
      });
    }
  });

  return state;
};
