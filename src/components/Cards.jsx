import React from 'react';
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
    return (
        <div className='w-full py-[10rem] px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Web development</h2>
                    <p className='text-center text-4xl font-bold'>₹ 2999</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>🌐 Learn HTML, CSS, JavaScript, and more: Master the essential building blocks of web development. </p>
                        <p className='py-2 border-b mx-8'>💻 Create Real-World Projects: Build your portfolio with hands-on projects like websites, web applications, and interactive features.</p>
                        <p className='py-2 border-b mx-8'>🌍 Web Technologies: Dive into the latest web technologies, including React, Node.js, and RESTful APIs.</p>
                    </div>
                    <button className='bg-[#FFD700] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>
                <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Digital Marketing</h2>
                    <p className='text-center text-4xl font-bold'>₹ 3999</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>📱 Social Media Mastery: Learn to create engaging content, grow your social media presence, and run successful ad campaigns.</p>
                        <p className='py-2 border-b mx-8'> 📝 Content Strategy: Craft compelling content that converts and drives audience engagement.</p>
                        <p className='py-2 border-b mx-8'>📈 Analytics and Data-driven Marketing: Harness data to make informed marketing decisions and track campaign performance.</p>
                    </div>
                    <button className='bg-black text-[white] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>App Development</h2>
                    <p className='text-center text-4xl font-bold'>₹ 4999</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>📱 iOS and Android Development: Master both iOS and Android app development with hands-on projects.</p>
                        <p className='py-2 border-b mx-8'>💡 Idea to Launch: Learn how to conceptualize, design, code, and launch your own mobile apps.</p>
                        <p className='py-2 border-b mx-8'>🛠 Debugging and Optimization: Hone your debugging and performance optimization skills.</p>
                    </div>
                    <button className='bg-[#FFD700] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>
            </div>
        </div>
    );
};

export default Cards;
