import React, { useEffect, useState } from 'react';
import { Carousel } from 'antd';
import dropDown from '../../../shared/DropDown.png';
import apple from '../../../shared/apple.png';
import iconRight from '../../../shared/iconRight.png';
import heroIphone from '../../../shared/heroIphone.png';
import { Link } from 'react-router';
import leftIcon from '../../../shared/Fill With Left Arrow.png';
import rightIcon from '../../../shared/Fill with Right Arrow.png';
import GetData from '../../../entities/component/getData';
import GetCategories from '../../../getCategories/getCategories';
import frame694 from '../../../shared/Frame 694.png';

const Home = () => {
    const targetDate = new Date('2025-08-01T00:00:00');

    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = targetDate - now;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const TimeBox = ({ label, value }) => (
        <div className="flex flex-col items-center">
            <span className="text-sm text-black">{label}</span>
            <span className="text-3xl font-bold text-black">{String(value).padStart(2, '0')}</span>
        </div>
    );

    return (
        <div className='mt-[100px]'>
            <div className="flex flex-col sm:flex-row justify-center gap-8 p-4 sm:p-6">
                <div className=" min-w-[220px] space-y-3 text-sm font-medium">
                    <div className="flex items-center gap-2">
                        <p>Woman’s Fashion</p>
                        <img src={dropDown} alt="dropdown" className="w-3" />
                    </div>
                    <div className="flex items-center gap-2">
                        <p>Men’s Fashion</p>
                        <img src={dropDown} alt="dropdown" className="w-3" />
                    </div>
                    <p>Electronics</p>
                    <p>Home & Lifestyle</p>
                    <p>Medicine</p>
                    <p>Sports & Outdoor</p>
                    <p>Baby’s & Toys</p>
                    <p>Groceries & Pets</p>
                    <p>Health & Beauty</p>
                </div>

                <div className="w-full sm:w-[892px] h-[344px]">
                    <Carousel autoplay autoplaySpeed={5000}>
                        {[1, 2, 3].map((_, i) => (
                            <div key={i}>
                                <div className="flex flex-col sm:flex-row items-center justify-between bg-black text-white h-[344px] rounded-md px-6 sm:px-10 py-6">
                                    <div className="flex flex-col justify-center gap-4 w-full sm:max-w-[50%]">
                                        <div className="flex items-center gap-4">
                                            <img src={apple} alt="apple" className="w-6 h-6" />
                                            <p className="text-lg font-medium">iPhone 14 Series</p>
                                        </div>
                                        <p className="text-3xl sm:text-4xl font-bold leading-snug">
                                            Up to 10% <br /> off Voucher
                                        </p>
                                        <Link to="/product">
                                            <div className="flex items-center gap-4">
                                                <p className="hover:underline text-white">Shop Now</p>
                                                <img src={iconRight} alt="arrow" className="w-5" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="hidden sm:block sm:max-w-[45%]">
                                        <img src={heroIphone} alt="iPhone" className="h-[280px] object-contain" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>

            <div className="w-[90%] max-w-[1200px] mx-auto">
                <div className="flex items-center gap-4 mt-20">
                    <div className="bg-[#DB4444] h-10 w-5 rounded-sm"></div>
                    <p className="text-[#DB4444]">Today’s</p>
                </div>

                <div className='flex flex-col md:flex-row items-start md:items-center justify-between'>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-[100px]">
                        <p className="text-[24px] sm:text-[40px] font-bold">Flash Sales</p>
                        <div className="flex gap-4 items-center justify-center">
                            <TimeBox label="Days" value={timeLeft.days} />
                            <span className="text-2xl text-red-400 font-bold">:</span>
                            <TimeBox label="Hours" value={timeLeft.hours} />
                            <span className="text-2xl text-red-400 font-bold">:</span>
                            <TimeBox label="Minutes" value={timeLeft.minutes} />
                            <span className="text-2xl text-red-400 font-bold">:</span>
                            <TimeBox label="Seconds" value={timeLeft.seconds} />
                        </div>
                    </div>
                    <div className='flex gap-5 mt-4 md:mt-0'>
                        <img src={leftIcon} alt="" />
                        <img src={rightIcon} alt="" />
                    </div>
                </div>
                <GetData />
            </div>

            <div className="w-[90%] max-w-[1200px] mx-auto">
                <div className="flex items-center gap-4 mt-20">
                    <div className="bg-[#DB4444] h-10 w-5 rounded-sm"></div>
                    <p className="text-[#DB4444]">Categories</p>
                </div>

                <div className='flex items-center justify-between mt-10'>
                    <p className="text-[24px] sm:text-[40px] font-bold">Browse By Category</p>
                    <div className='flex gap-5'>
                        <img src={leftIcon} alt="" />
                        <img src={rightIcon} alt="" />
                    </div>
                </div>
                <GetCategories />
            </div>

            <div className="w-[90%] max-w-[1200px] mx-auto">
                <div className="flex items-center gap-4 mt-20">
                    <div className="bg-[#DB4444] h-10 w-5 rounded-sm"></div>
                    <p className="text-[#DB4444]">This Month</p>
                </div>

                <div className='flex flex-col md:flex-row items-start md:items-center justify-between mt-5'>
                    <p className="text-[24px] sm:text-[40px] font-bold">Best Selling Products</p>
                    <Link to={'/product'}>
                        <button className='border bg-[#DB4444] text-white py-2 px-8 rounded-sm mt-4 md:mt-0 cursor-pointer'>View All</button>
                    </Link>
                </div>
                <GetData />
            </div>

            <div className='bg-black flex flex-col md:flex-row justify-between items-center p-10 sm:p-20 mt-12 gap-10'>
                <div>
                    <p className='text-[#00FF66]'>Categories</p>
                    <p className='text-[32px] sm:text-[50px] text-white font-semibold'>Enhance Your <br /> Music Experience</p>
                    <div className="flex flex-wrap sm:flex-nowrap gap-4 py-10">
                        {Object.entries(timeLeft).map(([label, value]) => (
                            <div key={label} className="bg-white w-20 h-20 sm:w-24 sm:h-24 rounded-full flex flex-col items-center justify-center shadow-md">
                                <span className="text-black text-xl sm:text-2xl font-bold">{value}</span>
                                <span className="text-black text-xs sm:text-sm">{label}</span>
                            </div>
                        ))}
                    </div>
                    <button className='bg-[#00FF66] font-semibold py-2 px-6 sm:px-10 rounded-sm'>Buy Now!</button>
                </div>
                <div>
                    <img
                        className="hover:scale-105 hover:shadow-[0_0_80px_rgba(0,0,0,0.6)] transition duration-300"
                        src={frame694}
                        alt="Speaker"
                    />
                </div>
            </div>

            <div className="w-[90%] max-w-[1200px] mx-auto">
                <div className="flex items-center gap-4 mt-20">
                    <div className="bg-[#DB4444] h-10 w-5 rounded-sm"></div>
                    <p className="text-[#DB4444]">Our Products</p>
                </div>

                <div className='mt-5'>
                    <p className="text-[24px] sm:text-[40px] font-bold">Explore Our Products</p>
                </div>
                <GetData />
            </div>
        </div>
    );
};

export default Home;