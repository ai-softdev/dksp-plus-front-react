import React from 'react';
import './ChooseUs.css'

const ChooseUs = () => {
    return (
        <div className={'flex items-center justify-center'}>
            <div className={'relative'}>
                <img className={'w-full h-full'} src="/image/choose-us.jpg" alt="choose-us"/>
                <div className={'absolute top-32 left-32 right-32 bottom-32 flex items-center justify-center gap-3 flex-col choose-block'}>
                    <div className={'flex w-[400px]'}>
                        <div className={'bg-butterscotch p-3 font-black text-cloudburst'}>
                            3956
                        </div>
                        <div className={'w-full border border-whitesmoke p-3 text-whitesmoke'}>
                            Project Done
                        </div>
                    </div>
                    <div className={'flex w-[400px]'}>
                        <div className={'bg-butterscotch p-3 font-black text-cloudburst'}>
                            3956
                        </div>
                        <div className={'w-full border border-whitesmoke p-3 text-whitesmoke'}>
                            Project Done
                        </div>
                    </div>
                    <div className={'flex w-[400px]'}>
                        <div className={'bg-butterscotch p-3 font-black text-cloudburst'}>
                            3956
                        </div>
                        <div className={'w-full border border-whitesmoke p-3 text-whitesmoke'}>
                            Project Done
                        </div>
                    </div>
                    <div className={'flex w-[400px]'}>
                        <div className={'bg-butterscotch p-3 font-black text-cloudburst'}>
                            3956
                        </div>
                        <div className={'w-full border border-whitesmoke p-3 text-whitesmoke'}>
                            Project Done
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;