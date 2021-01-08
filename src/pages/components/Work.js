import React from 'react';
import isUndefinedOrEmpty from '../../utils/isUndefinedOrEmpty';
import { timeFormat } from '../../utils/consts';
import moment from 'moment';

const Work = ({work}) => {
    if (work?.length === 0 || work?.length === undefined) {
        return null;
    }

    return (
        <section id="work">
            <h3>Work</h3>
            <div className="stack">
                {work.map((w) => (
                    <WorkItem key={w.name} {...w} />
                ))}
            </div>
        </section>
    )
}

const WorkItem = ({company, icon, startDate, endDate, position, website, summary, highlights}) => {
    if (isUndefinedOrEmpty(company) || isUndefinedOrEmpty(position)) {
        return null;
    }

    return (
        <article>
            <header>
                <div className="spaced-list">
                    <div className="institution-container">
                        {!isUndefinedOrEmpty(icon) ? <img src={icon} alt='institution icon' /> : null}
                        <h4>{company}</h4>
                    </div>
                    <span>
                        <time dateTime={startDate}>{moment(startDate).format(timeFormat)}</time> -
                        {!isUndefinedOrEmpty(endDate) ? <time dateTime={endDate}>{' ' + moment(endDate).format(timeFormat)}</time> : ' Present'}
                    </span>
                </div>
                <div className="spaced-list">
                    <strong>{position}</strong>
                    {!isUndefinedOrEmpty(website) ? <a href={website}>{website}</a> : null}
                </div>
                {!isUndefinedOrEmpty(summary) ? summary : null}
            </header>
            <WorkItemHighlights highlights={highlights} />
        </article>
    )
}

const WorkItemHighlights = ({highlights}) => {
    if (highlights.length === 0) {
        return null;
    }

    return (
        <>
            <h5>Highlights</h5>
            <ul>
                {highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                ))}
            </ul>
        </>
    )
}

export default Work;