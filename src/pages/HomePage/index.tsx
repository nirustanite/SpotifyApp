import React, { useEffect, useState } from 'react';
import endpoints from '../../utils/endpoints';
import {redirectUrl, responseType} from '../../config/basicConfig';
import Page from '../Page';


const HomePage = () => {

    const [token, setToken] = useState("")

    useEffect(() => {
        const hash = window.location.hash
        let token: any = window.localStorage.getItem("token")

        if (!token && hash) {
            console.log('inside');
            token = hash && hash.substring(1).split("&").find(elem => elem.startsWith("access_token"))?.split('=')[1];

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        setToken(token)

    }, [])


    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

    return (
        <Page>
            <div>
            <h1>Spotify React</h1>
                {!token ?
                    <a href={`${endpoints.AUTH_ENDPOINT}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${redirectUrl}&response_type=${responseType}`}>Login
                        to Spotify</a>
                    : <button onClick={logout}>Logout</button>}
            </div>
        </Page>
       
    );
};

export default HomePage;