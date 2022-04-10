import React from "react";
import { Segment, Image, Table } from "semantic-ui-react";
import { IAlbumProps } from "../../interfaces/components/detailsAlbumsProps";
import Pagination from '../Pagination';

const DisplayDetailsAlbums = (props: IAlbumProps) => {
    return (
        <Segment>
            {props.data.items?.length !== 0 ? (
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell />
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Release Date</Table.HeaderCell>
                            <Table.HeaderCell>Album Type</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {props.data.items?.map(item => {
                            return <Table.Row key={item.id}>
                                <Table.Cell>
                                    <Image src={item.images?.url ?? "https://react.semantic-ui.com/images/wireframe/image.png"} size='tiny' />
                                </Table.Cell>
                                <Table.Cell>{item.name}</Table.Cell>
                                <Table.Cell>{item.release_date}</Table.Cell>
                                <Table.Cell>{item.album_type}</Table.Cell>
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
                </Table>) : (
                <p> No Albums found ...</p>
            )}
        </Segment >
    );
};

export default DisplayDetailsAlbums;
