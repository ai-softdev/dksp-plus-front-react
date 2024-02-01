import React, {useState} from 'react';
import MainTitle from "../ui/MainTitle.jsx";
import MainDescription from "../ui/MainDescription.jsx";
import PackageButton from "./ui/PackageButton.jsx";
import MainButton from "../ui/MainButton.jsx";

const Packages = () => {
    const [activeMonthly, setActiveMonthly] = useState(true)
    const [activeAnnually, setActiveAnnually] = useState(false)
    function handleMonthly(){
        setActiveMonthly(true)
        setActiveAnnually(false)
    }
    function handleAnnually(){
        setActiveMonthly(false)
        setActiveAnnually(true)
    }

    const monthlyPlans = [
        {
            name: 'Basic Plan',
            price: 599,
        },
        {
            name: 'Standard',
            price: 699,
            popular: true
        },
        {
            name: 'Professional',
            price: 799,
        }
    ]
    const annuallyPlans = [
        {
            name: 'Basic Plan',
            price: 1599,
        },
        {
            name: 'Standard',
            price: 1699,
            popular: true
        },
        {
            name: 'Professional',
            price: 1799,
        }
    ]

    const servicesMonthly = [
        {
            name: 'Electrical Service Repairs, Upgrades',
            basic: true,
            standart: true,
            professional: true
        },
        {
            name: 'Distribution Power Systems',
            basic: true,
            standart: true,
            professional: true
        },
        {
            name: 'High & Medium Voltage Substations',
            basic: true,
            standart: true,
            professional: true
        },
        {
            name: 'Industrial Control Systems',
            basic: true,
            standart: true,
            professional: true
        },
        {
            name: 'Switch Installation',
            basic: true,
            standart: true,
            professional: true
        },
        {
            name: 'Generator Installations',
            basic: true,
            standart: true,
            professional: true
        },
        {
            name: 'Innovative Construction Alternatives',
            basic: false,
            standart: false,
            professional: false
        },
        {
            name: 'PLC Controls',
            basic: false,
            standart: false,
            professional: true
        },
        {
            name: 'Conveyor systems',
            basic: true,
            standart: true,
            professional: true
        },
        {
            name: 'Wiring renovations',
            basic: true,
            standart: true,
            professional: true
        }
    ]
    const servicesAnnually = [
        {
            name: 'Electrical Service Repairs, Upgrades',
            basic: true,
            standart: true,
            professional: true
        },
        {
            name: 'Distribution Power Systems',
            basic: true,
            standart: true,
            professional: true
        },
        {
            name: 'High & Medium Voltage Substations',
            basic: true,
            standart: true,
            professional: true
        },
        {
            name: 'Industrial Control Systems',
            basic: true,
            standart: true,
            professional: true
        },
        {
            name: 'Switch Installation',
            basic: true,
            standart: true,
            professional: true
        },
        {
            name: 'Generator Installations',
            basic: true,
            standart: true,
            professional: true
        },
        {
            name: 'Innovative Construction Alternatives',
            basic: true,
            standart: true,
            professional: true
        },
        {
            name: 'PLC Controls',
            basic: true,
            standart: true,
            professional: true
        },
        {
            name: 'Conveyor systems',
            basic: true,
            standart: true,
            professional: true
        },
        {
            name: 'Wiring renovations',
            basic: true,
            standart: true,
            professional: true
        }
    ]
    return (
        <div className={'py-20'}>
            <div className="container">
                <MainTitle
                    className={'text-center'}
                    content={'Our Packages'}
                />
                <MainDescription
                    className={'mx-auto text-center w-7/12 mt-5'}
                    content={'Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium metus. Proin pretium id urna sit amet tincidunt.'}
                />
                <div className={'flex items-center justify-center mt-10'}>
                    <PackageButton
                        active={activeMonthly}
                        content={'Monthly'}
                        onClicked={handleMonthly}
                    />
                    <PackageButton
                        active={activeAnnually}
                        content={'Annually'}
                        onClicked={handleAnnually}
                    />
                </div>
                <table className="table-auto bg-whitesmoke mt-10 w-full">
                    <thead>
                        <tr className={'border-b'}>
                            <th className={'p-10 text-start'}>
                                <MainTitle
                                    className={'text-xl'}
                                    content={'Services'}
                                />
                            </th>
                            {activeMonthly && monthlyPlans.map((item, index) => (
                                <th className={`relative px-5 py-10 pt-20 ${item.popular ? '!bg-white' : ''}`}>
                                    {item.popular &&
                                        <span className={'p-3 uppercase bg-butterscotch text-sm absolute top-0 w-full left-0'}>
                                            popular
                                        </span>
                                    }
                                    <p className={'font-black text-cloudburst'}>
                                        {item.name}
                                    </p>
                                    <p className={'font-black text-cloudburst mt-1 text-2xl'}>
                                        {Number(item.price).toLocaleString('en-US', {
                                            style: 'currency',
                                            currency: 'USD',
                                        })}
                                    </p>
                                    <span className={'block text-mediumgray font-normal mt-1'}>
                                        Per Visit Charge
                                    </span>
                                </th>
                            ))}
                            {activeAnnually && annuallyPlans.map((item, index) => (
                                <th className={`relative px-5 py-10 pt-20 ${item.popular ? '!bg-white' : ''}`}>
                                    {item.popular &&
                                        <span className={'p-3 uppercase bg-butterscotch text-sm absolute top-0 w-full left-0'}>
                                            popular
                                        </span>
                                    }
                                    <p className={'font-black text-cloudburst'}>
                                        {item.name}
                                    </p>
                                    <p className={'font-black text-cloudburst mt-1 text-2xl'}>
                                        {Number(item.price).toLocaleString('en-US', {
                                            style: 'currency',
                                            currency: 'USD',
                                        })}
                                    </p>
                                    <span className={'block text-mediumgray font-normal mt-1'}>
                                        Per Visit Charge
                                    </span>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            activeMonthly && servicesMonthly.map((item, index) => (
                                <tr>
                                    <td className={'pt-5'}>
                                        <p className={`px-10 pb-5 text-mediumgray ${index+1 === servicesMonthly.length ? '' : 'border-b'}`}>
                                            {item.name}
                                        </p>
                                    </td>
                                    <td className={`pt-4 pb-4 ${index+1 === servicesMonthly.length ? '' : 'border-b'}`}>
                                        {item.basic ?
                                            <svg className={'mx-auto'} xmlns="http://www.w3.org/2000/svg" width="32" height="35" viewBox="0 0 32 32" fill="none">
                                                <circle cx="16" cy="16" r="16" fill="#FF7B47"/>
                                                <path d="M23 11L13.9 22L10 17.875" stroke="#1C2752" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            :
                                            <div className={'mx-auto bg-butterscotch w-fit rounded-full opacity-40'}>
                                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7 17L16.8995 7.10051" stroke="#1C2752" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M7 7.00001L16.8995 16.8995" stroke="#1C2752" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </div>
                                        }
                                    </td>
                                    <td className={`pt-4 pb-4 bg-white ${index+1 === servicesMonthly.length ? '' : 'border-b'}`}>
                                        {item.standart ?
                                            <svg className={'mx-auto'} xmlns="http://www.w3.org/2000/svg" width="32" height="35" viewBox="0 0 32 32" fill="none">
                                                <circle cx="16" cy="16" r="16" fill="#FF7B47"/>
                                                <path d="M23 11L13.9 22L10 17.875" stroke="#1C2752" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            :
                                            <div className={'mx-auto bg-butterscotch w-fit rounded-full opacity-40'}>
                                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7 17L16.8995 7.10051" stroke="#1C2752" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M7 7.00001L16.8995 16.8995" stroke="#1C2752" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </div>
                                        }
                                    </td>
                                    <td className={`pt-4 pb-4 ${index+1 === servicesMonthly.length ? '' : 'border-b'}`}>
                                        {item.professional ?
                                            <svg className={'mx-auto'} xmlns="http://www.w3.org/2000/svg" width="32" height="35" viewBox="0 0 32 32" fill="none">
                                                <circle cx="16" cy="16" r="16" fill="#FF7B47"/>
                                                <path d="M23 11L13.9 22L10 17.875" stroke="#1C2752" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            :
                                            <div className={'mx-auto bg-butterscotch w-fit rounded-full opacity-40'}>
                                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7 17L16.8995 7.10051" stroke="#1C2752" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M7 7.00001L16.8995 16.8995" stroke="#1C2752" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </div>
                                        }
                                    </td>
                                </tr>
                            ))
                        }
                        {
                            activeAnnually && servicesAnnually.map((item, index) => (
                                <tr>
                                    <td className={'pt-5'}>
                                        <p className={`px-10 pb-5 text-mediumgray ${index+1 === servicesMonthly.length ? '' : 'border-b'}`}>
                                            {item.name}
                                        </p>
                                    </td>
                                    <td className={`pt-4 pb-4 ${index+1 === servicesMonthly.length ? '' : 'border-b'}`}>
                                        {item.basic ?
                                            <svg className={'mx-auto'} xmlns="http://www.w3.org/2000/svg" width="32" height="35" viewBox="0 0 32 32" fill="none">
                                                <circle cx="16" cy="16" r="16" fill="#FF7B47"/>
                                                <path d="M23 11L13.9 22L10 17.875" stroke="#1C2752" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            :
                                            <div className={'mx-auto bg-butterscotch w-fit rounded-full opacity-40'}>
                                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7 17L16.8995 7.10051" stroke="#1C2752" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M7 7.00001L16.8995 16.8995" stroke="#1C2752" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </div>
                                        }
                                    </td>
                                    <td className={`pt-4 pb-4 bg-white ${index+1 === servicesMonthly.length ? '' : 'border-b'}`}>
                                        {item.standart ?
                                            <svg className={'mx-auto'} xmlns="http://www.w3.org/2000/svg" width="32" height="35" viewBox="0 0 32 32" fill="none">
                                                <circle cx="16" cy="16" r="16" fill="#FF7B47"/>
                                                <path d="M23 11L13.9 22L10 17.875" stroke="#1C2752" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            :
                                            <div className={'mx-auto bg-butterscotch w-fit rounded-full opacity-40'}>
                                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7 17L16.8995 7.10051" stroke="#1C2752" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M7 7.00001L16.8995 16.8995" stroke="#1C2752" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </div>
                                        }
                                    </td>
                                    <td className={`pt-4 pb-4 ${index+1 === servicesMonthly.length ? '' : 'border-b'}`}>
                                        {item.professional ?
                                            <svg className={'mx-auto'} xmlns="http://www.w3.org/2000/svg" width="32" height="35" viewBox="0 0 32 32" fill="none">
                                                <circle cx="16" cy="16" r="16" fill="#FF7B47"/>
                                                <path d="M23 11L13.9 22L10 17.875" stroke="#1C2752" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            :
                                            <div className={'mx-auto bg-butterscotch w-fit rounded-full opacity-40'}>
                                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7 17L16.8995 7.10051" stroke="#1C2752" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M7 7.00001L16.8995 16.8995" stroke="#1C2752" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </div>
                                        }
                                    </td>
                                </tr>
                            ))
                        }
                        <tr>
                            <td className={'py-10 pt-32'}></td>
                            {
                                activeMonthly && monthlyPlans.map((item, index) => (
                                    <td className={`px-3 ${index === 1 ? 'bg-white' : ''}`}>
                                        <MainButton
                                            className={'w-full'}
                                            content={'Buy Now'}
                                        />
                                    </td>
                                ))
                            }
                            {
                                activeAnnually && monthlyPlans.map((item, index) => (
                                    <td className={`px-3 ${index === 1 ? 'bg-white' : ''}`}>
                                        <MainButton
                                            className={'w-full'}
                                            content={'Buy Now'}
                                        />
                                    </td>
                                ))
                            }
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Packages;