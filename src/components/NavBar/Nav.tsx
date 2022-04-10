import React from 'react';
import { Menu, Container, Icon } from 'semantic-ui-react';
import { useRouteMatch, Link, } from "react-router-dom";
import { useHistory } from 'react-router';
import routes from '../../pages/routes';
import styled from 'styled-components';
import { IRootState } from '../../interfaces/redux/stateInterface';
import { useDispatch, useSelector } from 'react-redux';
import AuthTokenStore from '../../redux/AuthToken';

const StyledMenu = styled(Menu)`
    border: none !important;
    .item {
        
        &:first-child {
            border-left: 0px !important;
        }
        &::before {
            display: none;
        }    
        &.active {
            box-shadow: 0px -2px 0px 0px #0085bb inset !important;
            background: none !important;
        }
    }   
`;

const Nav = () => {

    const dispatch = useDispatch();

    const history = useHistory();

    const token = useSelector((state: IRootState) => state.authToken.token);

    const matchHome = useRouteMatch({
        path: "/",
        exact: true
    });

    const matchLogin = useRouteMatch({
        path: "/login",
    })

    const handleLogout = () => {
        dispatch(AuthTokenStore.actions.setToken(""));
        window.localStorage.removeItem("token");
        history.push(routes.LOGIN)
    }

    return (
        <StyledMenu fixed="top" stackable>
            <Container>
                <Menu.Item>
                    Spotify App
                </Menu.Item>
                <Menu.Item
                    as={Link}
                    name="HOME"
                    to={routes.HOME}
                    active={!!matchHome}
                >
                    <Icon name='home' />
                    Home
                </Menu.Item>
                <Menu.Menu position='right'>
                    {token ? (
                        <Menu.Item onClick={handleLogout}>
                            Logout
                        </Menu.Item>
                    ) : (
                        <Menu.Item
                            as={Link}
                            name="LOGIN"
                            to={routes.LOGIN}
                            active={!!matchLogin}
                        >
                            <Icon name='user outline' />
                            Login
                        </Menu.Item>
                    )}

                </Menu.Menu>
            </Container>
        </StyledMenu>
    );
};

export default Nav;