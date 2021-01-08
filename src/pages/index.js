import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Profiles from './components/Profiles';
import Work from './components/Work';
import Volunteer from './components/Volunteer';
import Education from './components/Education';
import Publications from './components/Publications'
import Skills from './components/Skills';
import Languages from './components/Languages';
import Interests from './components/Interests';
import Footer from './components/Footer';

const CV = ({ data }) => {
    const cv = data.cvJson;
    const git = data.gitCommit;
    return (
        <>
            <Helmet>
                <meta charset="utf-8" />
                <meta name="description" content="{{resume.basics.summary}}" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>{cv.basics.name}</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,700" />
            </Helmet>
            <div className="resume-container">
                <Header {...cv.basics} />
                <About summary={cv.basics.summary} />
                <Contact email={cv.basics.email} phone={cv.basics.phone} website={cv.basics.website} />
                <Profiles profiles={cv.basics.profiles} />
                <Education education={cv.education} />
                <Work work={cv.work} />
                <Volunteer volunteer={cv.volunteer} />
                <Publications publications={cv.publications} />
                <Skills skills={cv.skills} />   
                <Languages languages={cv.languages} />
                <Interests interests={cv.interests} />
                <Footer commit={git.hash} />
            </div>
        </>
    )
}

export default CV;

export const query = graphql`
    query MyQuery {
        gitCommit(latest: { eq: true }) {
            hash
        }
        cvJson {
            basics {
                label
                name
                image
                summary
                email
                website
                phone
                profiles {
                    network
                    username
                    url
                    icon
                }
            }
            work {
                company
                location
                position
                website
                startDate
                endDate
                summary
                highlights
                icon
            }
            education {
                institution
                score
                title
                website
                startDate
                endDate
                studyType
                courses
                icon
            }
            publications {
                name
                publisher
                releaseDate
                summary
            }
            skills {
                name
                keywords
            }
            languages {
                language
                fluency
            }
            interests {
                name
                keywords
            }
        }
    }
`;