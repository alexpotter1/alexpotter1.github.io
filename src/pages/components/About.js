import React from 'react';
import isUndefinedOrEmpty from '../../utils/isUndefinedOrEmpty';

const About = ({summary}) => {
    if (isUndefinedOrEmpty(summary)) {
        return null;
    }
    
    return (
        <section id="about">
            <h3>About</h3>
            <article>
                {summary}
            </article>
        </section>
    )
}

export default About;