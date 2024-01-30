import React from 'react';

const FooterPageLink = ({link, name, ...props}) => {
    return (
        <a href={link} className={'cursor-pointer hover:text-butterscotch transition-all ease-in-out duration-200 w-fit'}>
            {name}
        </a>
    );
};

export default FooterPageLink;