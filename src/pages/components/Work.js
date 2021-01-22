import React from 'react';
import Collapsible from 'react-collapsible';
import isUndefinedOrEmpty from '../../utils/isUndefinedOrEmpty';
import { timeFormat, maxPriorityGroups } from '../../utils/consts';
import moment from 'moment';

const Work = ({work}) => {
    let lotsOfWork = false;
    let priorityWork = [];

    if (work?.length === 0 || work?.length === undefined) {
        return null;
    }

    if (work.length > maxPriorityGroups) {
        lotsOfWork = true;
        for (var i = 0; i < maxPriorityGroups; i++) {
            priorityWork.push(work.shift())
        }
    }

    return (
        <section id="work">
            <h3>Work</h3>
            <div className="stack">
                {lotsOfWork ? 
                (<LotsOfWorkWithCollapse priority={priorityWork} rest={work} />) 
                : (work.map((w) => (
                    <WorkItem key={w.startDate} {...w} />
                )))}
            </div>
        </section>
    )
}

const LotsOfWorkWithCollapse = ({priority, rest}) => {
    return (
        <>
            {priority.map((w) => (
                <WorkItem key={w.startDate} {...w} />
            ))}
            <Collapsible trigger="More..." triggerWhenOpen="Less...">
                {rest.map((w) => (
                    <WorkItem key={w.startDate} {...w} />
                ))}
            </Collapsible>
        </>
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