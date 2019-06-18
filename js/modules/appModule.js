import update from "immutability-helper";
import {SERVER_URL} from "js/static";
import request from "superagent";
import _ from "lodash";
import moment from "moment";

export const NAME = "app";
export const IS_NETWORK_CONNECTED = "IS_NETWORK_CONNECTED" + " " + NAME;
export const SET_TOAST_MSG = "SET_TOAST_MSG" + " " + NAME;
export const CLEAR_TOAST_MSG = "CLEAR_TOAST_MSG" + " " + NAME;

export const isNetworkConnected = data => {
    return {type: IS_NETWORK_CONNECTED, data: data};
};

export const setToastMsg = data => {
    return {type: SET_TOAST_MSG, payload: data};
};

export const clearToast = () => {
    return {type: CLEAR_TOAST_MSG};
};

export const callAPI = ({
                            eventType,
                            eventMessage,
                            successCallBack,
                            failureCallBack
                        }) => {
    return async (dispatch, getState) => {
        let res;

        const kxToken = _.get(getState().login, "user.kxToken", "");
        //console.log("kxToken=>  " + kxToken);
        try {
            res = await request
                .post(`${SERVER_URL}`)
                .send({
                    eventType: eventType,
                    eventMessage: eventMessage,
                    eventTime: moment().valueOf()
                }) // sends a JSON post body
                .set("kxToken", kxToken);

            const eventResponse = _.get(res, "body.eventMessage", {});
            const responseCode = _.get(eventResponse, "header.code", "");
            // console.log(eventResponse, eventResponse);
            if (responseCode == 200 && successCallBack) {
                successCallBack(eventResponse);
            } else if (failureCallBack) {
                failureCallBack(
                    _.get(eventResponse, "header.msg", "Something went wrong.")
                );
            }
        } catch (e) {
            //console.log(e);
            failureCallBack(e.rawResponse ? e.rawResponse : "Something went wrong.");
        }
    };
};

const REDUCER_HANDLERS = {
    [IS_NETWORK_CONNECTED]: (state, action) => {
        return update(state, {networkConnected: {$set: action.data}});
    },
    [SET_TOAST_MSG]: (state, action) => {
        if (action.payload !== null && typeof action.payload === "object") {
            return Object.assign({}, state, {
                toastMsg: action.payload.msg,
                showToast: true
            });
        } else {
            return Object.assign({}, state, {
                toastMsg: action.payload,
                toastPosition: "toast-bottom-right",
                showToast: true
            });
        }
    },
    [CLEAR_TOAST_MSG]: (state, action) => {
        return Object.assign({}, state, {showToast: false});
    }
};

const initialState = {
    networkConnected: true,
    toastMsg: "",
    showToast: false
};

//export default initialState;
export default function myReducer(state = initialState, action) {
    const handler = REDUCER_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}
