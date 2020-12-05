import React from 'react';
import isUndefinedOrEmpty from '../../utils/isUndefinedOrEmpty';

const Skills = ({skills}) => {
    if (skills?.length === 0 || skills?.length === undefined) {
        return null;
    }

    return (
        <section id="skills">
            <h3>Skills</h3>
            <div className="grid-list">
                {skills.map((skill) => (
                    <Skill key={skill.name} {...skill} />
                ))}
            </div>
        </section>
    )
}

const Skill = ({name, keywords}) => {
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


export default Skills;