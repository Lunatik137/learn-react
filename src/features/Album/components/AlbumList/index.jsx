import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import AlbumDetail from '../AlbumDetail';
AlbumList.propTypes = {
    albumList: PropTypes.array.isRequired,
};

function AlbumList({ albumList }) {
    return (
        <ul className='album-list'>
            {albumList.map(album => (
                <li key={album.id}><AlbumDetail albumDetail={album} /></li>
            ))}
        </ul>
    );
}

export default AlbumList;