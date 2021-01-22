import React from 'react';
import Collapsible from 'react-collapsible';
import isUndefinedOrEmpty from '../../utils/isUndefinedOrEmpty';
import { timeFormat, maxPriorityGroups } from '../../utils/consts';
import moment from 'moment';

const Education = ({education}) => {
    let lotsOfEducation = false;
    let priorityEducation = [];

    if (education?.length === 0 || education?.length === undefined) {
        return null;
    }

    if (education.length > maxPriorityGroups) {
        lotsOfEducation = true;
        for (var i = 0; i < maxPriorityGroups; i++) {
            priorityEducation.push(education.shift())
        }
    }

    return (
        <section id="education">
            <h3>Education</h3>
            <div className="stack">
                {lotsOfEducation ? 
                (<LotsOfEducationWithCollapse priority={priorityEducation} rest={education} />) 
                : (education.map((w) => (
                    <EducationItem key={w.startDate} {...w} />
                )))}
            </div>
        </section>
    )
}

const LotsOfEducationWithCollapse = ({priority, rest}) => {
    return (
        <>
            {priority.map((w) => (
                <EducationItem key={w.startDate} {...w} />
            ))}
            <Collapsible trigger="More..." triggerWhenOpen="Less...">
                {rest.map((w) => (
                    <EducationItem key={w.startDate} {...w} />
                ))}
            </Collapsible>
        </>
    )
}

const EducationItem = ({institution, icon, startDate, endDate, title, website, studyType, score, courses}) => {
    if (isUndefinedOrEmpty(institution) || isUndefinedOrEmpty(title)) {
        return null;
    }

    return (
        <article>
            <header>
                <div className="spaced-list">
                    <div className="institution-container">
                        {!isUndefinedOrEmpty(icon) ? <img src={icon} alt='institution icon' /> : null}
                        <h4>{institution}</h4>
                    </div>
                    <span>
                        <time dateTime={startDate}>{moment(startDate).format(timeFormat)}</time> -
                        {!isUndefinedOrEmpty(endDate) ? <time dateTime={endDate}>{' ' + moment(endDate).format(timeFormat)}</time> : ' Present'}
                    </span>
                </div>
                <div className="spaced-list">
                    <h5>{title}</h5>
                    {!isUndefinedOrEmpty(website) ? <a href={website}>{website}</a> : null}
                </div>
                <div className="spaced-list">
                    <h6>{!isUndefinedOrEmpty(studyType) ? studyType : null}</h6>
                    {!isUndefinedOrEmpty(score) ? <strong>{score}</strong> : null}
                </div>
            </header>
            <EducationItemCourses courses={courses} />
        </article>
    )
}

const EducationItemCourses = ({courses}) => {
    if (courses?.length === 0 || courses?.length === undefined) {
        return null;
    }

    return (
        <>
            <h5>Courses</h5>
            <ul>
                {courses.map((courses) => (
                    <li key={courses}>{courses}</li>
                ))}
            </ul>
        </>
    )
}

export default Education;