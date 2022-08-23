import { call, fork, put, select, takeLatest } from 'redux-saga/effects';
import api from '../services/placeApi';
import searchHistoryApi from '../services/searchHistoryApi';
import { SEARCH_PLACE, GET_HISTORY, SAVE_HISTORY, } from '../constants/constant';
import {
    searchPlaceSuccess,
    searchPlaceFailed,
    saveHistorySuccess,
    saveHistoryFailed,
    getHistorySuccess,
    getHistoryFailed,
} from '../actions/place';

function* workerGetPlaceSaga(params) {
    try {
        const response = yield call(api.getPlaces);
        if (response.status === 200) {
            yield put(searchPlaceSuccess(response.data));
        } else {
            if (response) {
                yield put(searchPlaceFailed(response));
            } else {
                if (response.status) {
                }
                yield put(searchPlaceFailed(response.data));
            }
        }
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

/*function* workerGetPlaceSaga(params) {
    try {
        const response = yield call(api.getPlaces, params.payload);
        if (response.status === 200) {
            yield put(searchPlaceSuccess(response.data));
        } else {
            if (response) {
                yield put(searchPlaceFailed(response));
            } else {
                if (response.status) {
                }
                yield put(searchPlaceFailed(response.data));
            }
        }
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}*/

function* workerGetHistorySaga(params) {
    try {
        const response = yield call(searchHistoryApi.getHistory);
        if (response.status === 200) {
            yield put(getHistorySuccess(response.data));
        } else {
            if (response) {
                yield put(getHistoryFailed(response));
            } else {
                if (response.status) {
                }
                yield put(getHistoryFailed(response.data));
            }
        }
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

function* workerSaveHistorySaga(params) {
    try {
        const state = yield select();
        const newHistory = yield state.places.searchHistory.filter(data => {
            return data.name !== params.payload.name;
        });

        console.log('new history state', newHistory);

        const postResponse = yield call(searchHistoryApi.saveHistory, params.payload);
        console.log('post response', JSON.stringify(postResponse));

        if (postResponse.status === 201) {
            yield put(saveHistorySuccess([...newHistory], postResponse.data));
            console.log('success');
        } else {
            if (postResponse) {
                yield put(saveHistoryFailed(postResponse));
            } else {
                yield put(saveHistoryFailed(postResponse.data));
            }
        }
    } catch (error) {
        console.log(error);
    }
}

function* getPlaceSaga() {
    yield takeLatest(SEARCH_PLACE, workerGetPlaceSaga);
}

function* getHistorySaga() {
    yield takeLatest(GET_HISTORY, workerGetHistorySaga);
}

function* saveHistorySaga() {
    yield takeLatest(SAVE_HISTORY, workerSaveHistorySaga);
}

export const watcherPlace = [
    fork(getPlaceSaga),
    fork(getHistorySaga),
    fork(saveHistorySaga),
];