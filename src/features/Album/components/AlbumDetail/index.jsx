import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
AlbumDetail.propTypes = {
    albumDetail: PropTypes.object.isRequired,
};

function AlbumDetail({ albumDetail }) {
    return (
        <div className='album'>
            <div className='album__thumbnail'>
                <img src={albumDetail.thumbnailUrl} alt={albumDetail.title} />
            </div>
            <p className='album__title'>{albumDetail.title}</p>
        </div>
    );
}

export default AlbumDetail;