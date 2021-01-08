import React from 'react';
import isUndefinedOrEmpty from '../../utils/isUndefinedOrEmpty';

const Contact = ({email, phone, website}) => {
    let Email, Phone, URL = null;
    if (!isUndefinedOrEmpty(email)) {
        Email = <ContactLinkItem text='Email' value={email} isEmail={true} />;
    }
    if (!isUndefinedOrEmpty(phone)) {
        Phone = <ContactItem text='Phone' value={phone} />;
    }
    if (!isUndefinedOrEmpty(website)) {
        URL = <ContactLinkItem text='Website' value={website} isEmail={false} />;
    }

    if (Email === null && Phone === null && URL === null) {
        return null;
    }
    
    return (
        <section id="contact">
            <h3>Contact</h3>
            <div className="grid-list">
                {Email}
                {Phone}
                {URL}
            </div>
        </section>
    )
}

const ContactItem = ({text, value}) => (
    <div>
        <h4>{text}</h4>
        {value}
    </div>
)

const ContactLinkItem = ({text, value, isEmail}) => (
    <div>
        <h4>{text}</h4>
        <a href={isEmail ? ("mailto:" + value) : value}>{value}</a>
    </div>
)

export default Contact;