import React from 'react';
import isUndefinedOrEmpty from '../../utils/isUndefinedOrEmpty';
import { timeFormat } from '../../utils/consts';
import moment from 'moment';

const Education = ({education}) => {
    if (education?.length === 0 || education?.length === undefined) {
        return null;
    }

    return (
        <section id="education">
            <h3>Education</h3>
            <div className="stack">
                {education.map((w) => (
                    <EducationItem key={w.startDate} {...w} />
                ))}
            </div>
        </section>
    )
}

const EducationItem = ({institution, icon, startDate, endDate, area, url, studyType, score, courses}) => {
    if (isUndefinedOrEmpty(institution) || isUndefinedOrEmpty(area)) {
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
                    <h5>{area}</h5>
                    {!isUndefinedOrEmpty(url) ? <a href={url}>{url}</a> : null}
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