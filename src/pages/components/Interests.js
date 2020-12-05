import React from 'react';
import isUndefinedOrEmpty from '../../utils/isUndefinedOrEmpty';

const Interests = ({interests}) => {
    if (interests?.length === 0 || interests?.length === undefined) {
        return null;
    }

    return (
        <section id="interests">
            <h3>Interests</h3>
            <div className="grid-list">
                {interests.map((interest) => (
                    <Interest key={interest.name} {...interest} />
                ))}
            </div>
        </section>
    )
}

const Interest = ({name, keywords}) => {
    if (isUndefinedOrEmpty(name) || isUndefinedOrEmpty(keywords)) {
        return null;
    }

    return (
        <div>
            <h4>{name}</h4>
            {keywords.length > 0 ?
            <ul className="tag-list">
                {keywords.map((keyword) => (
                    <li key={keyword}>{keyword}</li>
                ))}
            </ul>
            : null}
        </div>
    )
}

export default Interests;