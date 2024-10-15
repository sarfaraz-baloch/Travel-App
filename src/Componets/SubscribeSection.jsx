import React from 'react';
// import './SubscribeSection.css'; // Make sure this path is correct

const SubscribeSection = () => {
    return (
        <div className="container-fluid subscribe py-5 ">
            <div className="container mx-auto py-5">
                <div className="mx-auto text-center mb-5" style={{ maxWidth: '900px' }}>
                    <div className='flex justify-center items-center gap-4'>
                    <div className="border-t-4 rounded-full border-white w-10 md:w-12 lg:w-16"></div>
                    <h5 className="uppercase font-roboto text-2xl text-white ">Subscribe</h5>
                    <div className="border-t-4 rounded-full border-white w-10 md:w-12 lg:w-16"></div>
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-4">Our Newsletter</h1>
                    <p className="text-white mb-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque velit explicabo? 
                        Voluptate sunt eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum repellat a laborum quasi.
                    </p>
                    <div className="position-relative mx-auto">
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubscribeSection;
