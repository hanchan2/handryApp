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
} from '../constants/constant';

const INITIAL_STATE = {
    places: [],
    searchHistory: [],
    loading: false,
    loadingUpdate: false,
    message: '',
};

export default (state, action) => {
    if (typeof state === 'undefined') {
        return INITIAL_STATE;
    }
    switch (action.type) {
        case SEARCH_PLACE:
            return {
                ...state,
                places: [],
                loading: true,
            };
        case SEARCH_PLACE_SUCCESS:
            return {
                ...state,
                places: [...action.payload],
                loading: false,
            };
        case SEARCH_PLACE_FAILED:
            return {
                ...state,
                places: [],
                loading: false,
                message: action.payload,
            };
        case GET_HISTORY:
            return {
                ...state,
                searchHistory: [],
                loading: true,
            };
        case GET_HISTORY_SUCCESS:
            return {
                ...state,
                searchHistory: [...action.payload],
                loading: false,
            };
        case GET_HISTORY_FAILED:
            return {
                ...state,
                searchHistory: [],
                loading: false,
                message: action.payload,
            };
        case SAVE_HISTORY:
            return {
                ...state,
                loadingUpdate: false,
            }
        case SAVE_HISTORY_SUCCESS:
            return {
                ...state,
                searchHistory: [...action.payload],
                loadingUpdate: false,
            }
        case SAVE_HISTORY_FAILED:
            return {
                ...state,
                loadingUpdate: false,
            }
        default:
            return state;
    }
};