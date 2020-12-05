import React from 'react';
import isUndefinedOrEmpty from '../../utils/isUndefinedOrEmpty';
import { timeFormat } from '../../utils/consts';
import moment from 'moment';

const Publications = ({publications}) => {
    if (publications?.length === 0 || publications?.length === undefined) {
        return null;
    }

    return (
        <section id="publications">
            <h3>Publications</h3>
            <div className="stack">
                {publications.map((pub) => (
                    <PublicationItem key={pub.releaseDate} {...pub}/>
                ))}
            </div>
        </section>
    )
}

const PublicationItem = ({name, publisher, releaseDate, url, summary}) => {
    if (isUndefinedOrEmpty(name) || isUndefinedOrEmpty(publisher)) {
        return null;
    }

    return (
        <article>
            <header>
                <div className="spaced-list">
                    <h4>{name}</h4>
                    {!isUndefinedOrEmpty(releaseDate) ? <time dateTime={releaseDate}>{moment(releaseDate).format(timeFormat)}</time>: null}
                </div>
                <div className="spaced-list">
                    {!isUndefinedOrEmpty(publisher) ? 
                        <span>
                            Published by <strong>{publisher}</strong>
                        </span> 
                        : null
                    }
                    {!isUndefinedOrEmpty(url) ? <a href={url}>{url}</a> : null}
                </div>
            </header>
            {!isUndefinedOrEmpty(summary) ? summary : null}
        </article>
    )
}

export default Publications;