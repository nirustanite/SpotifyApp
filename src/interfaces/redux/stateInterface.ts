import { IAuthTokenInitialStateInterface } from "./authTokenInterface";
import { ISearchDataInitialState } from "./searchDataInterface";

export interface IRootState{
    authToken: IAuthTokenInitialStateInterface,
    searchData: ISearchDataInitialState
}