import React from 'react';
import IntroBg from "../../components/ui/intro-bg/IntroBg.jsx";
import MainTitle from "../../components/ui/MainTitle.jsx";

const PricingIntro = () => {
    return (
        <div className={'relative py-36 overflow-hidden'}>
            <IntroBg
                background={`url('./image/pricing.webp')`}
            />
            <div className="container">
                <MainTitle
                    className={'relative text-whitesmoke z-10 text-center'}
                    content={'Pricing'}
                />
            </div>
        </div>
    );
};

export default PricingIntro;