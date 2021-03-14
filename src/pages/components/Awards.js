import React from 'react';
import isUndefinedOrEmpty from '../../utils/isUndefinedOrEmpty';
import { timeFormat } from '../../utils/consts';
import moment from 'moment';

const Awards = ({ awards }) => {
    if (awards?.length === 0 || awards?.length === undefined) {
        return null;
    }

    return (
        <section id="awards">
            <h3>Awards</h3>
            <div className="stack">
                {awards.map((award) => (
                    <AwardItem key={award.title} {...award} />
                ))}
            </div>
        </section>
    )
}

const AwardItem = ({ title, date, awarder }) => {
    if (isUndefinedOrEmpty(title) || isUndefinedOrEmpty(awarder)) {
        return null;
    }

    return (
        <article>
            <header>
                <div className="spaced-list">
                    <h4>{title}</h4>
                    {!isUndefinedOrEmpty(date) ? <time dateTime={date}>{moment(date).format(timeFormat)}</time> : null}
                </div>
                <div className="spaced-list">
                    {!isUndefinedOrEmpty(awarder) ?
                        <span>
                            Awarded by <strong>{awarder}</strong>
                        </span>
                        : null
                    }
                </div>
            </header>
        </article>
    )
}

export default Awards;