import React from 'react';
import isUndefinedOrEmpty from '../../utils/isUndefinedOrEmpty';

const Profiles = ({profiles}) => {
    if (profiles?.length === 0 || profiles?.length === undefined) {
        return null;
    }

    return (
        <section id="profiles">
            <h3>Profiles</h3>
            <div className="grid-list">
                {profiles.map(profile => (
                    <ProfileItem key={profile.network}
                                 network={profile.network} 
                                 username={profile.username} 
                                 url={profile.url} 
                                 icon={profile.icon} />
                ))}
            </div>
        </section>
    )
}

const ProfileItem = ({network, username, url, icon}) => {
    let usernameDefined = !isUndefinedOrEmpty(username);
    let urlDefined = !isUndefinedOrEmpty(url);
    let iconDefined = !isUndefinedOrEmpty(icon);

    if (isUndefinedOrEmpty(network)) {
        return null;
    }

    return (
        <div className="profileItem">
            {iconDefined ? <img className="profileIcon" src={icon} alt='profile icon' /> : <h4>{network}</h4>}
            {(urlDefined && usernameDefined) ? 
                <a href={url}>{username}</a> 
                : usernameDefined ? 
                {username} 
                : urlDefined ? 
                <a href={url}>{url}</a>
                : null}
        </div>
    )
}

export default Profiles;