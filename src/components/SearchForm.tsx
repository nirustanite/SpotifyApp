import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Container, Input, InputOnChangeData } from 'semantic-ui-react';
import styled from 'styled-components';
import SearchDataStore from '../redux/SearchData';

const SearchForm = () => {

    const [searchText, setSearchText] = useState<string>('');
    const dispatch = useDispatch();
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, data: InputOnChangeData): void => {
        setSearchText(data.value);
    }

    const handleSearch = () => {
        dispatch(SearchDataStore.actions.getSearchDataRequested(searchText));
    }
    

    return (
        <StyledContainer>
            <StyledInput placeholder='Search for albums tracks and artists' onChange={handleChange}/>
            <StyledButton primary onClick={handleSearch}>Search</StyledButton>
        </StyledContainer>
    );
};

export default SearchForm;

const StyledContainer = styled(Container)`
    display: flex;
    flex-direction: row;
    text-align: center;
`;

const StyledInput = styled(Input)`
    width: 50%;
`;

const StyledButton = styled(Button)`
    margin-left: 20px !important;
`;