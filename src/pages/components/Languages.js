import React from 'react';
import isUndefinedOrEmpty from '../../utils/isUndefinedOrEmpty';

const Languages = ({languages}) => {
    if (languages?.length === 0 || languages?.length === undefined) {
        return null;
    }

    return (
        <section id="languages">
            <h3>Languages</h3>
            <div className="grid-list">
                {languages.map((lang) => (
                    <Language key={lang.language} {...lang} />
                ))}
            </div>
        </section>
    )
}

const Language = ({language, fluency}) => {
    if (isUndefinedOrEmpty(language)) {
        return null;
    }

    return (
        <div>
            <h4>{language}</h4>
            {!isUndefinedOrEmpty(fluency) ? fluency : null}
        </div>
    )
}

export default Languages;