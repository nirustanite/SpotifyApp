import { Action } from "redux";
import { ActionTypes } from "../../redux/SearchData/ducks";

export interface ISearchData{
    albums?: any;
    artists?: any;
    tracks?: any;
}

export interface ISearchDataInitialState{
    searchData: ISearchData;
    loading: boolean;
    error: string;
}


export interface ISearchDataRequestAction {
    type: typeof ActionTypes.GET_SEARCH_DATA_REQUESTED;
    data: string;
}

export interface ISearchDataSucceedAction {
    type: typeof ActionTypes.GET_SEARCH_DATA_SUCCEEDED;
    payload: ISearchData;
}

export interface  ISearchDataFailedAction {
    type: typeof ActionTypes.GET_SEARCH_DATA_FAILED;
    payload: any;
}

export type SearchDataActions =
  | ISearchDataRequestAction
  | ISearchDataSucceedAction
  | ISearchDataFailedAction


export interface ISearchDataAction extends Action {
    type: typeof ActionTypes.GET_SEARCH_DATA_REQUESTED;
    data: string; 
    token: string;
}