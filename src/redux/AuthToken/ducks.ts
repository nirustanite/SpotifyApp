import { AuthActions, IAuthToken, IAuthTokenActions, IAuthTokenInitialStateInterface } from "../../interfaces/redux/authTokenInterface";

export enum ActionTypes {
    AUTH_TOKEN = 'AUTH_TOKEN'
};

export const initialState = {
    token: ""
}

export const actions : IAuthTokenActions= {
    setToken : (token) : IAuthToken => ({
        type: ActionTypes.AUTH_TOKEN,
        token
    })
};

export default function reducer(state: IAuthTokenInitialStateInterface = initialState , action: AuthActions): IAuthTokenInitialStateInterface{
    switch (action.type) {
        case ActionTypes.AUTH_TOKEN:
            return{
                ...state,
                token: action.token
            }
        default:
            return state;
    }
};
