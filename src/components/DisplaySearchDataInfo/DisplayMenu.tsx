import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Menu } from 'semantic-ui-react';
import { IRootState } from '../../interfaces/redux/stateInterface';
import getAlbumData from '../../utils/getAlbumData';
import getArtistData from '../../utils/getArtistData';
import getTrackData from '../../utils/getTrackData';
import DisplayDetailsAlbums from './DisplayDetailsAlbums';
import DisplayDetailsArtists from './DisplayDetailsArtists';
import DisplayDetailsTrack from './DisplayDetailsTrack';

const DisplayMenu = () => {

    const [activeItem, setActiveItem] = useState<string>('albums');

    const searchData = useSelector((state: IRootState) => state.searchData.searchData);

    const handleItemClick = (e: any, { name }: any) => {
        console.log('name', name);
        setActiveItem(name)
    };

    return (
        <div>
            <Menu fluid tabular>
                <Menu.Item
                    name='albums'
                    active={activeItem === 'albums'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='artists'
                    active={activeItem === 'artists'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='tracks'
                    active={activeItem === 'tracks'}
                    onClick={handleItemClick}
                />
            </Menu>
            {activeItem === 'albums' && <DisplayDetailsAlbums data={getAlbumData(searchData.albums)} />}
            {activeItem === 'artists' && <DisplayDetailsArtists data={getArtistData(searchData.artists)} />}
            {activeItem === 'tracks' && <DisplayDetailsTrack data={getTrackData(searchData.tracks)} />}
        </div>
    );
}

export default DisplayMenu