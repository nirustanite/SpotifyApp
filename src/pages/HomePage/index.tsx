import React, { useEffect } from 'react';
import Page from '../Page';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { IRootState } from '../../interfaces/redux/stateInterface';
import routes from '../routes';



const HomePage = () => {
    const history = useHistory();

    const token =  useSelector((state: IRootState) => state.authToken.token);
    useEffect(() => {
        if(!token){
            history.push(routes.LOGIN);
        }
    },[history, token]);

    return (
        <Page>
         
         
        </Page>
       
    );
};

export default HomePage;