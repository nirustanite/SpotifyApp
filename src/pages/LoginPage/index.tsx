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
    
    useEffect(() => {
        const hash = window.location.hash
        let token: any = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash && hash.substring(1).split("&").find(elem => elem.startsWith("access_token"))?.split('=')[1];
            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        dispatch(AuthTokenStore.actions.setToken(token));
        
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