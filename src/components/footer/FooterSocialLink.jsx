import React from 'react';

const FooterSocialLink = ({svg, className, ...props}) => {
    return (
        <div className={className} dangerouslySetInnerHTML={{ __html: svg }}>
        </div>
    );
};

export default FooterSocialLink;