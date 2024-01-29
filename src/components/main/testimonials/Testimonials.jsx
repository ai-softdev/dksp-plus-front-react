import React from 'react';
import Customers from "./Customers.jsx";
import Banner from "./Banner.jsx";

const Testimonials = () => {
    return (
        <div className={'py-32'}>
            <div className={'container'}>
                <div className={'w-4/12 flex gap-5 flex-col'}>
                    <Customers/>
                    <Banner/>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;