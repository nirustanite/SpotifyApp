import { ActionTypes } from "../../redux/AuthToken/ducks";

export interface IAuthTokenInitialStateInterface{
    token: string;
}

export interface IAuthToken {
    type: typeof ActionTypes.AUTH_TOKEN;
    token: string;
}
  
export interface IAuthTokenActions{
    setToken : (token: string) => void;
}

export type AuthActions = 
    | IAuthToken