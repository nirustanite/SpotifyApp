import React, { useEffect } from 'react';
import Page from '../Page';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { IRootState } from '../../interfaces/redux/stateInterface';
import routes from '../routes';
import SearchForm from '../../components/SearchForm';
import DisplayMenu from '../../components/DisplaySearchDataInfo/DisplayMenu';
import { Container, Loader } from 'semantic-ui-react';
import styled from 'styled-components';

const HomePage = () => {
    const history = useHistory();

    const token = useSelector((state: IRootState) => state.authToken.token);
    const loading = useSelector((state: IRootState) => state.searchData.loading);
    const error = useSelector((state: IRootState) => state.searchData.error);
    const searchData = useSelector((state: IRootState) => state.searchData.searchData);

    useEffect(() => {
        if (!token) {
            history.push(routes.LOGIN);
        }
        if(error?.status === 401){
            history.push(routes.LOGIN);
        }
    }, [history, token, error]);

    return (
        <Page>
            <SearchForm />
            <StyledContainer>
                {loading ? (
                    <Loader content='Loading' />
                ) : (
                    <>
                        {Object.keys(searchData).length !== 0 && <DisplayMenu />}
                    </>
                )}
            </StyledContainer>
        </Page>
    );
};

export default HomePage;

const StyledContainer = styled(Container)`
    margin-top: 30px;
`;