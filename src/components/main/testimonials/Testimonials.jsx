import React from 'react';
import Customers from "./Customers.jsx";
import Banner from "./Banner.jsx";
import Form from "./Form.jsx";

const Testimonials = () => {
    return (
        <div className={'py-32'}>
            <div className={'container flex gap-12 '}>
                <div className={'w-6/12 flex gap-5 flex-col'}>
                    <Customers/>
                    <Banner/>
                </div>
                <Form
                    className={'w-6/12'}
                />
            </div>
        </div>
    );
};

export default Testimonials;