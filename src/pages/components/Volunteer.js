import React from 'react';
import isUndefinedOrEmpty from '../../utils/isUndefinedOrEmpty';
import { timeFormat } from '../../utils/consts';
import moment from 'moment';

const Volunteer = ({volunteer}) => {
    if (volunteer?.length === 0 || volunteer?.length === undefined) {
        return null;
    }

    return (
        <section id="volunteer">
            <h3>Volunteer</h3>
            <div className="stack">
                {volunteer.map((v) => (
                    <VolunteerItem key={v.name} {...v} />
                ))}
            </div>
        </section>
    )
}

const VolunteerItem = ({name, icon, startDate, endDate, position, url, summary, highlights}) => {
    if (isUndefinedOrEmpty(name) || isUndefinedOrEmpty(position)) {
        return null;
    }

    return (
        <article>
            <header>
                <div className="spaced-list">
                    <div className="institution-container">
                        {!isUndefinedOrEmpty(icon) ? <img src={icon} alt='institution icon' /> : null}
                        <h4>{name}</h4>
                    </div>
                    <span>
                        <time dateTime={startDate}>{moment(startDate).format(timeFormat)}</time> -
                        {!isUndefinedOrEmpty(endDate) ? <time dateTime={endDate}>{' ' + moment(endDate).format(timeFormat)}</time> : ' Present'}
                    </span>
                </div>
                <div className="spaced-list">
                    <strong>{position}</strong>
                    {!isUndefinedOrEmpty(url) ? <a href={url}>{url}</a> : null}
                </div>
                {!isUndefinedOrEmpty(summary) ? summary : null}
            </header>
            <VolunteerItemHighlights highlights={highlights} />
        </article>
    )
}

const VolunteerItemHighlights = ({highlights}) => {
    if (highlights.length === 0) {
        return null;
    }

    return (
        <>
            <h5>Highlights</h5>
            <ul>
                {highlights.map((highlight) => (
                    <li>{highlight}</li>
                ))}
            </ul>
        </>
    )
}

export default Volunteer;