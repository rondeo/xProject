import _ from "lodash";
export const getStatusFromProgress = progress => {
  const red = _.get(progress, "red", 0);
  const green = _.get(progress, "green", 0);
  const orange = _.get(progress, "orange", 0);
  if (red > 0) {
    return "red";
  } else if (orange > red) {
    return "orange";
  } else {
    return "green";
  }
};
