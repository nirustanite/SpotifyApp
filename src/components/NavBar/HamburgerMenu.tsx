import React, { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { Sidebar, Icon, Menu } from "semantic-ui-react";
import { useRouteMatch } from "react-router-dom";
import { useHistory } from "react-router";
import routes from '../../pages/routes';
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../interfaces/redux/stateInterface";
import AuthTokenStore from '../../redux/AuthToken';
interface IProps {
    child: ReactNode
};

const HamburgerMenu = (props: IProps) => {

    const [visible, setVisible] = useState<boolean>(false);

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

    const handlePusher = (): void => {
        if (visible) setVisible(false);
    };

    const handleToggle = (): void => setVisible(!visible);

    const handleLogout = () => {
        dispatch(AuthTokenStore.actions.setToken(""));
        window.localStorage.removeItem("token");
        history.push(routes.LOGIN)
    }

    return (
        <React.Fragment>
            <Sidebar.Pushable>
                <Sidebar
                    as={Menu}
                    animation="overlay"
                    icon="labeled"
                    visible={visible}
                    vertical
                    width='thin'
                >

                    <Menu.Item
                        name="HOME"
                        // icon="building outline"
                        active={!!matchHome}
                        as={Link}
                        to={routes.HOME}
                    >
                        <Icon name='home' />
                        Home
                    </Menu.Item>
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
                </Sidebar>
                <Sidebar.Pusher
                    dimmed={visible}
                    onClick={handlePusher}
                    style={{ minHeight: "100vh" }}
                >
                    <Menu fixed="top" borderless>
                        <Menu.Item onClick={handleToggle}>
                            <Icon name="sidebar" />
                        </Menu.Item>
                        <Menu.Item as="span">
                            SpotifyApp
                        </Menu.Item>
                    </Menu>
                    {props.child}
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </React.Fragment>
    );
};

export default HamburgerMenu;