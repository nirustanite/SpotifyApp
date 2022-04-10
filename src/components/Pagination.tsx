import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";
import SearchDataStore from '../redux/SearchData';

interface IProps{
    prev: string | null | undefined;
    next: string | null | undefined;
    length: number | undefined;
}
const Pagination = (props: IProps) => {

    const dispatch = useDispatch();

    const handlePrev = () => {
        dispatch(SearchDataStore.actions.getDataFromUrl(props.prev));
    }

    const handleNext = () => {
        dispatch(SearchDataStore.actions.getDataFromUrl(props.next));
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'flex-end' }}>
            <Button
                inverted
                color='blue'
                onClick={handlePrev}
                disabled={props.prev === null}
            > Prev </Button>
            <Button
                inverted
                color='blue'
                onClick={handleNext}
                disabled={props.length === 0}
            > Next </Button>
        </div>
    );
};

export default Pagination;