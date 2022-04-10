import axios from "axios";
import { takeEvery, put, call } from "redux-saga/effects";
import { searchApiBase } from "../../config/basicConfig";
import {
    ISearchData,
    ISearchDataAction,
    ISearchDataFailedAction,
    ISearchDataInitialState,
    ISearchDataRequestAction,
    ISearchDataSucceedAction,
    SearchDataActions,
    IDataFromUrlRequestedAction,
    IDataFromUrlAction,
    IDataFromUrlSucceededAction,
    IDataFromUrlFailedAction
} from "../../interfaces/redux/searchDataInterface";
import endpoints from "../../utils/endpoints";
import store from "../store";

export enum ActionTypes {
    GET_SEARCH_DATA_REQUESTED = 'GET_SEARCH_DATA_REQUESTED',
    GET_SEARCH_DATA_SUCCEEDED = ' GET_SEARCH_DATA_SUCCEEDED',
    GET_SEARCH_DATA_FAILED = 'GET_SEARCH_DATA_FAILED',
    GET_DATA_FROM_URL_REQUESTED = 'GET_DATA_FROM_URL_REQUESTED',
    GET_DATA_FROM_URL_SUCEEDED = 'GET_DATA_FROM_URL_SUCEEDED',
    GET_DATA_FROM_URL_FAILED = 'GET_DATA_FROM_URL_FAILED'
};

export const actions = {
    getSearchDataRequested: (data: string): ISearchDataRequestAction => ({
        type: ActionTypes.GET_SEARCH_DATA_REQUESTED,
        data
    }),
    getSearchDataSucceeded: (payload: ISearchData): ISearchDataSucceedAction => ({
        type: ActionTypes.GET_SEARCH_DATA_SUCCEEDED,
        payload: payload
    }),
    getSearchDataFailed: (payload: any): ISearchDataFailedAction => ({
        type: ActionTypes.GET_SEARCH_DATA_FAILED,
        payload: payload
    }),
    getDataFromUrl: (data: string | null | undefined): IDataFromUrlRequestedAction => ({
        type: ActionTypes.GET_DATA_FROM_URL_REQUESTED,
        data
    }),
    getDataFromUrlSucceeded: (payload: any): IDataFromUrlSucceededAction => ({
        type: ActionTypes.GET_DATA_FROM_URL_SUCEEDED,
        payload: payload
    }),
    getDataFromUrlFailed: (payload: any): IDataFromUrlFailedAction => ({
        type: ActionTypes.GET_DATA_FROM_URL_FAILED,
        payload: payload
    })
};

export const initialState: ISearchDataInitialState = {
    searchData: {},
    loading: false,
    error: ""
};


export default function reducer(state: ISearchDataInitialState = initialState, action: SearchDataActions): ISearchDataInitialState {
    switch (action.type) {
        case ActionTypes.GET_SEARCH_DATA_REQUESTED:
            return {
                ...state,
                loading: true
            };
        case ActionTypes.GET_SEARCH_DATA_SUCCEEDED:
            return {
                ...state,
                searchData: action.payload,
                loading: false
            };
        case ActionTypes.GET_SEARCH_DATA_FAILED:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        case ActionTypes.GET_DATA_FROM_URL_SUCEEDED:
            const key = Object.keys(action.payload)[0];
            if (key === 'albums') {
                state.searchData.albums = action.payload?.albums
            }
            if (key === 'artists') {
                state.searchData.artists = action.payload?.artists
            }
            if (key === 'tracks') {
                state.searchData.tracks = action.payload?.tracks
            }
            return {
                ...state,
                searchData: {...state.searchData}
            }
        case ActionTypes.GET_DATA_FROM_URL_FAILED:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export function* saga() {
    yield takeEvery<ISearchDataAction>(ActionTypes.GET_SEARCH_DATA_REQUESTED, getSearchDataWorker);
    yield takeEvery<IDataFromUrlAction>(ActionTypes.GET_DATA_FROM_URL_REQUESTED, getDataFromUrlWorker);
};

export function* getSearchDataWorker(data: ISearchDataAction): Generator<any, any, any> {
    try {
        const response = yield call(getSearchData, data);
        yield put(actions.getSearchDataSucceeded(response.data));
    }
    catch (error) {
        yield put(actions.getSearchDataFailed(error));
    }
};

export function* getDataFromUrlWorker(data: IDataFromUrlAction): Generator<any, any, any> {
    try {
        const response = yield call(getDataFromUrl, data);
        yield put(actions.getDataFromUrlSucceeded(response.data));
    }
    catch (error) {
        yield put(actions.getDataFromUrlFailed(error));
    }
};


function getSearchData(data: ISearchDataAction) {
    const state = store.getState();
    const token = state.authToken.token;
    return axios
        .get(`${searchApiBase}/${endpoints.SEARCH_DATA}?q=${data.data}&type=album,track,artist&limit=5`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
}

function getDataFromUrl(data: IDataFromUrlAction) {
    const state = store.getState();
    const token = state.authToken.token;
    return axios
        .get(`${data.data}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
}