import {
    SEARCH_PLACE,
    SEARCH_PLACE_SUCCESS,
    SEARCH_PLACE_FAILED,
    GET_HISTORY,
    GET_HISTORY_SUCCESS,
    GET_HISTORY_FAILED,
    SAVE_HISTORY,
    SAVE_HISTORY_SUCCESS,
    SAVE_HISTORY_FAILED,
} from "../constants/constant";

export const searchPlace = payload => ({
    type: SEARCH_PLACE,
    payload,
});

export const searchPlaceSuccess = payload => ({
    type: SEARCH_PLACE_SUCCESS,
    payload,
});

export const searchPlaceFailed = payload => ({
    type: SEARCH_PLACE_FAILED,
    payload,
});

export const getHistory = payload => ({
    type: GET_HISTORY,
    payload,
});

export const getHistorySuccess = payload => ({
    type: GET_HISTORY_SUCCESS,
    payload,
});

export const getHistoryFailed = payload => ({
    type: GET_HISTORY_FAILED,
    payload,
});

export const saveHistory = payload => ({
    type: SAVE_HISTORY,
    payload,
});

export const saveHistorySuccess = payload => ({
    type: SAVE_HISTORY_SUCCESS,
    payload,
});

export const saveHistoryFailed = payload => ({
    type: SAVE_HISTORY_FAILED,
    payload,
});