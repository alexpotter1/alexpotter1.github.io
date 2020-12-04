import React from 'react';
import { graphql } from 'gatsby';

const CV = ({ data }) => {
    const cv = data.cvJson;
    const { basics } = cv;
    return (
        <>
            <h1>{basics.name}</h1>
            <h2>{basics.email}</h2>
        </>
    )
}

export default CV;

export const query = graphql`
    query MyQuery {
        cvJson {
            basics {
                email
                name
            }
        }
    }
`;