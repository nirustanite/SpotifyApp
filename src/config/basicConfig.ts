import endpoints from "../utils/endpoints";

export const redirectUrl = "http://localhost:3000/login";
export const responseType = "token";

export const authLink = `${endpoints.AUTH_ENDPOINT}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${redirectUrl}&response_type=${responseType}`
