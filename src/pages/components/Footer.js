import React from 'react';
import moment from 'moment';
import GatsbyImg from '../../resources/Gatsby-Logo.svg';
import isUndefinedOrEmpty from '../../utils/isUndefinedOrEmpty';
import { version } from '../../utils/consts'

const Footer = ({ commit }) => {
    return (
        <footer>
            <FooterItem img={GatsbyImg} text={'Built with '} />
            <Version commit={commit} />
        </footer>
    )
}

const Version = ({ commit }) => {
    var date = moment().format('YYYY-MM-DD');

    if (isUndefinedOrEmpty(commit)) {
        // dirty fallback, only synced if PDF is generated before build
        commit = version + " ";
    }

    return (
        <section>
            <div className='footerItem'>Version: &nbsp;{date}-{commit.substring(0, 7)}</div>
        </section>
    )
}

const FooterItem = ({ img, text }) => {
    var hasImg = !isUndefinedOrEmpty(img);
    return (
        <section>
            <div className="footerItem" id="footerPowered">
                {text}
                {hasImg ? <img src={img} alt='gatsby logo' /> : null}
            </div>
        </section>
    )
}

export default Footer;