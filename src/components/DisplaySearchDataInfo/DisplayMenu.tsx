import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';

const DisplayMenu = () => {

    const [activeItem, setActiveItem] = useState<string>('albums');

    const handleItemClick = (e: any, { name }: any) => {
        setActiveItem(name)
    };

    return (
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
    );
}

export default DisplayMenu