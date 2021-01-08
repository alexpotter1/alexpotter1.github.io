import React from 'react';
import cv from '../../../cv/out/resume.pdf';

const DownloadCV = () => {
    return (
        <a className="cv-link" href={cv} download>Download CV</a>
    )
}

export default DownloadCV;