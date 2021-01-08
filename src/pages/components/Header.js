import React from 'react';
import isUndefinedOrEmpty from '../../utils/isUndefinedOrEmpty';
import DownloadCV from './DownloadCV';

const Header = (basics) => {
    return (
        <header className="masthead">
            <Me {...basics} />
            <Photo image_url={basics.image} />
            <DownloadCV />
        </header>
    )
}

const Me = ({name, label}) => {
    if (isUndefinedOrEmpty(name) || isUndefinedOrEmpty(label)) {
        return null;
    }

    return (
        <div className="me">
            <h1>{name}</h1>
            <h2>{label}</h2>
        </div>
    )
}

const Photo = ({image_url}) => {
    if (isUndefinedOrEmpty(image_url)) {
        return null;
    }

    return (
        <div className="me-photo">
            <img className="photo" src={image_url} alt="profile" />
        </div>
    )
}

export default Header;