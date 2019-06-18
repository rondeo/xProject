import generateRandomId from "./generateRandomId";

import { getCountString } from "./getCountString";
import { normalizeFonts } from "./normalizeFonts";

import { getRouteName, getDeepRouteName, navigateOnce } from "./getRouteInfo";
import {
  getHeightExcludeTabBarAndHeader,
  getHeightExcludeTabBar
} from "./getScreenInfo";

import { validateEmail } from "./validateEmail";
import { isIphoneX } from "./isIphoneX";
import { getStatusFromProgress } from "./getStatusFromProgress";
import { dateDifference } from "./dateDifference";
import { getRegionBoundaries } from "./getRegionBoundaries";
import { getCountriesNames } from "./getCountriesNames";
import { updateFieldValueInState } from "./updateFieldValueInState";

//exports.customizeAttachmentObject = customizeAttachmentObject;
exports.generateRandomId = generateRandomId;

exports.getDeepRouteName = getDeepRouteName;
exports.getRouteName = getRouteName;
exports.getHeightExcludeTabBarAndHeader = getHeightExcludeTabBarAndHeader;

exports.navigateOnce = navigateOnce;

exports.validateEmail = validateEmail;

exports.isIphoneX = isIphoneX;

exports.getCountString = getCountString;
exports.normalizeFonts = normalizeFonts;
exports.getStatusFromProgress = getStatusFromProgress;
exports.dateDifference = dateDifference;
exports.getRegionBoundaries = getRegionBoundaries;
exports.getCountriesNames = getCountriesNames;
exports.updateFieldValueInState = updateFieldValueInState;
