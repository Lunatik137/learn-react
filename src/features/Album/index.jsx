import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';
AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/2/4/5/3/24538985249cd4d3b324b4a4a09ad288.jpg',
            title: 'Lofi',
        },
        {
            id: 2,
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/f/e/2/9/fe2964f51f4e3ede798ded5258aac857.jpg',
            title: 'Nhẹ nhàng',
        },
        {
            id: 3,
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/7/8/3/5/78355641f2001767ed62f29ef644e942.jpg',
            title: 'Chill',
        },
    ];
    return (
        <div>
            <h2>Chill</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;