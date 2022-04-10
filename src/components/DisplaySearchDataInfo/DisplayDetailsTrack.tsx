import React from "react";
import { Segment, Table } from "semantic-ui-react";
import { ITracksProps } from "../../interfaces/components/detailsTrackProps";
import Pagination from "../Pagination";

const DisplayDetailsTrack = (props: ITracksProps) => {

    return (
        <Segment>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Popularity</Table.HeaderCell>
                        <Table.HeaderCell>Track Number</Table.HeaderCell>
                        <Table.HeaderCell>Album</Table.HeaderCell>
                        <Table.HeaderCell>Artists</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {props.data.items?.map(item => {
                        return <Table.Row key={item.id}>
                            <Table.Cell>{item.name}</Table.Cell>
                            <Table.Cell>{item.popularity}</Table.Cell>
                            <Table.Cell>{item.track_number}</Table.Cell>
                            <Table.Cell>{item.album}</Table.Cell>
                            <Table.Cell>
                                <ul>
                                    {item.artists?.map((el, index) => {
                                        return <li key={index}>{el}</li>
                                    })}
                                </ul>
                            </Table.Cell>
                        </Table.Row>
                    })}
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='7'>
                            <Pagination prev={props.data?.previous} next={props.data?.next} length={props.data.items?.length} />
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </Segment >
    );
};

export default DisplayDetailsTrack;