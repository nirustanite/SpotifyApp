import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authLink } from "../../config/basicConfig";
import Page from "../Page";
import AuthTokenStore from '../../redux/AuthToken';
import { Container } from "semantic-ui-react";
import styled from "styled-components";
import { Redirect } from "react-router";
import { IRootState } from "../../interfaces/redux/stateInterface";
import routes from "../routes";

const LoginPage = () => {

    const dispatch = useDispatch();

    const tokenfromReduxState = useSelector((state: IRootState) => state.authToken.token);

    const getReturnedParamsFromSpotifyAuth = (hash: any) => {
        const stringAfterHashtag = hash.substring(1);
        const paramsInUrl = stringAfterHashtag.split("&");
        const paramsSplitUp = paramsInUrl.reduce((accumulater: any, currentValue: any) => {
            const [key, value] = currentValue.split("=");
            accumulater[key] = value;
            return accumulater;
        }, {});

        return paramsSplitUp;
    };

    useEffect(() => {

        const { access_token, expires_in, token_type } =
            getReturnedParamsFromSpotifyAuth(window.location.hash);

        localStorage.clear();

        localStorage.setItem("accessToken", access_token);
        localStorage.setItem("tokenType", token_type);
        localStorage.setItem("expiresIn", expires_in);

        dispatch(AuthTokenStore.actions.setToken(access_token));

    }, [dispatch]);



    return (
        <Page>
            <StyledContainer>
                <h3>Click on the link to login Spotify App to get the auth token</h3>
                <a href={authLink}>Login
                    to Spotify</a>
            </StyledContainer>
            {tokenfromReduxState && <Redirect to={routes.HOME} />}
        </Page>
    );
};

export default LoginPage;

const StyledContainer = styled(Container)`
    text-align: center;
    margin-top: 50px;
`;