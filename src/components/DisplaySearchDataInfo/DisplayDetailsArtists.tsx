import React from "react";
import { Segment, Table, Image } from "semantic-ui-react";
import { IArtistsProps } from "../../interfaces/components/detailsArtistsProps";
import Pagination from "../Pagination";

const DisplayDetailsArtists = (props: IArtistsProps) => {

    return (
        <Segment>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell />
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Popularity</Table.HeaderCell>
                        <Table.HeaderCell>Genres</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {props.data.items?.map(item => {
                        return <Table.Row key={item?.id}>
                            <Table.Cell>
                                <Image src={item?.images?.url ?? "https://react.semantic-ui.com/images/wireframe/image.png"} size='tiny' />
                            </Table.Cell>
                            <Table.Cell>{item?.name}</Table.Cell>
                            <Table.Cell>{item?.popularity}</Table.Cell>
                            <Table.Cell>
                                <ul>
                                    {item.genres?.map((el, index) => {
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

export default DisplayDetailsArtists;