import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Container, Icon, Input, InputOnChangeData } from 'semantic-ui-react';
import styled from 'styled-components';
import SearchDataStore from '../redux/SearchData';

declare global {
    interface Window { webkitSpeechRecognition: any;  SpeechRecognition: any}
}

const SearchForm = () => {

    const [searchText, setSearchText] = useState<string>('');
    const dispatch = useDispatch();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, data: InputOnChangeData): void => {
        setSearchText(data.value);
    }

    const handleSearch = () => {
        dispatch(SearchDataStore.actions.getSearchDataRequested(searchText));
    }

    const handleVoice = () => {
        let SpeechRecognition  =
            window.webkitSpeechRecognition || window.SpeechRecognition;

        if (typeof SpeechRecognition === 'undefined') {
            const message: any = document.getElementById('message');
            message.removeAttribute('hidden');
            message.setAttribute('aria-hidden', 'false');
        } else {
            const recognition = new SpeechRecognition();
            recognition.start();
            recognition.onresult = (event : any) => {
                let word = event.results[0][0].transcript;
                setSearchText(word);
            };
        }
    }

    return (
        <StyledContainer>
            <StyledInput placeholder='Search for albums tracks and artists' onChange={handleChange} value={searchText} />
            <StyledButton icon onClick={handleVoice}>
                <Icon name='microphone' />
            </StyledButton>
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

