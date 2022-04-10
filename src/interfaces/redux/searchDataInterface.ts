import { Action } from "redux";
import { ActionTypes } from "../../redux/SearchData/ducks";

export interface ISearchData{
    albums?: any;
    artists?: any;
    tracks?: any;
}

export interface IError{
    status: number;
    message: string;
}
export interface ISearchDataInitialState{
    searchData: ISearchData;
    loading: boolean;
    error: IError;
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

export interface IDataFromUrlRequestedAction {
    type: typeof ActionTypes.GET_DATA_FROM_URL_REQUESTED;
    data: string | null | undefined;
}

export interface IDataFromUrlSucceededAction {
    type: typeof ActionTypes.GET_DATA_FROM_URL_SUCEEDED;
    payload: any;
}
export interface IDataFromUrlFailedAction {
    type: typeof ActionTypes.GET_DATA_FROM_URL_FAILED;
    payload: any;
}

export type SearchDataActions =
  | ISearchDataRequestAction
  | ISearchDataSucceedAction
  | ISearchDataFailedAction
  | IDataFromUrlRequestedAction
  | IDataFromUrlSucceededAction
  | IDataFromUrlFailedAction
export interface ISearchDataAction extends Action {
    type: typeof ActionTypes.GET_SEARCH_DATA_REQUESTED;
    data: string;
}

export interface IDataFromUrlAction extends Action {
    type: typeof ActionTypes.GET_DATA_FROM_URL_REQUESTED;
    data: string | null | undefined;
}