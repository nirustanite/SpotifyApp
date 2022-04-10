import axios from "axios";
import { takeEvery, put, call } from "redux-saga/effects";
import { searchApiBase } from "../../config/basicConfig";
import { ISearchData, 
        ISearchDataAction, 
        ISearchDataFailedAction, 
        ISearchDataInitialState, 
        ISearchDataRequestAction, 
        ISearchDataSucceedAction, 
        SearchDataActions } from "../../interfaces/redux/searchDataInterface";
import endpoints from "../../utils/endpoints";
import store from "../store";

export enum ActionTypes {
    GET_SEARCH_DATA_REQUESTED = 'GET_SEARCH_DATA_REQUESTED',
    GET_SEARCH_DATA_SUCCEEDED = ' GET_SEARCH_DATA_SUCCEEDED',
    GET_SEARCH_DATA_FAILED = 'GET_SEARCH_DATA_FAILED'
};

export const actions = {
    getSearchDataRequested : (data: string): ISearchDataRequestAction => ({
        type: ActionTypes.GET_SEARCH_DATA_REQUESTED,
        data
    }),
    getSearchDataSucceeded: ( payload: ISearchData ):ISearchDataSucceedAction => ({
        type: ActionTypes.GET_SEARCH_DATA_SUCCEEDED,
        payload:payload 
    }),
    getSearchDataFailed: ( payload: any ):ISearchDataFailedAction => ({
        type: ActionTypes.GET_SEARCH_DATA_FAILED,
        payload: payload
    })
};

export const initialState : ISearchDataInitialState = {
    searchData: {},
    loading: false,
    error: ""
};


export default function reducer(state: ISearchDataInitialState = initialState , action: SearchDataActions): ISearchDataInitialState{
    switch (action.type) {
        case ActionTypes.GET_SEARCH_DATA_REQUESTED:
            return{
                ...state,
                loading: true
            };
        case ActionTypes.GET_SEARCH_DATA_SUCCEEDED:
            return{
                ...state,
                searchData: action.payload,
                loading: false
            };
        case ActionTypes.GET_SEARCH_DATA_FAILED:
            return{
                ...state,
                error: action.payload,
                loading: false
            };
        default:
            return state;
    }
};

export function* saga(){
    yield takeEvery<ISearchDataAction>(ActionTypes.GET_SEARCH_DATA_REQUESTED, getSearchDataWorker);
};

export function* getSearchDataWorker(data: ISearchDataAction) : Generator<any, any, any>{
    try{
        const response = yield call(getSearchData, data);
        yield put(actions.getSearchDataSucceeded(response.data)); 
    }
    catch(error){
        yield put(actions.getSearchDataFailed(error)); 
    } 
};


function getSearchData(data: ISearchDataAction) {
    const state = store.getState();
    const token = state.authToken.token;
    return axios
    .get(`${searchApiBase}/${endpoints.SEARCH_DATA}?q=${data.data}&type=album,track,artist`, {
        headers:{
            Authorization: `Bearer ${token}`
        } 
    });
}