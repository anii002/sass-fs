/* eslint-disable jsx-a11y/anchor-is-valid */
import image from "../images/Group 5.svg";
import arrow from "../images/Path 3.svg";
import arrow2 from "../images/Path 2.svg";
import upperarrow from "../images/Path upper 2.svg";
import upperarrow2 from "../images/Path upper 3.svg";
import correct from "../images/correct.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from 'react';


function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState('Default');
    const [value1, setValue1] = useState('Feature')
    const [isOpen1, setIsOpen1] = useState(false);
    const navigate = useNavigate();

    const handleButtonClick = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (selectedValue) => {
        setValue(selectedValue);
        setIsOpen(false);
    }
    const handleOptionClick1 = (selectedValue) => {
        setValue1(selectedValue);
        setIsOpen1(false);
    }
    const handleButtonClick1 = () => {
        setIsOpen1(!isOpen1);
    }
   
    useEffect(() => {
       
        navigate('/');
    }, [navigate]);
    return (
        <>
            <div className="mt-10 bg-[#ffffff]  pb-[200px]">
                <div className="flex justify-between items-center  mr-[75px] ml-[165px] ">
                    <Link to="./Suggestion">  <img className="w-48px rounded-lg" src={image} alt="img" /></Link>
                    <h4 className="text-[#647196] text-[24px] font-bold ">DESIGN SYSTEM</h4>
                </div>
                <div className="flex items-center mt-20">
                    <h4 className="m-0 bg-[#e3e6f2] w-[144px] text-[#ffffff] px-2 text-right text-2xl not-italic font-bold uppercase"> 01 </h4>
                    <h4 className=" text-[#3A4374] text-[24px] font-bold ml-5 uppercase">COLORS</h4>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2  gap-[2rem] lg:grid-cols-4 mt-10   mr-[75px] ml-[165px]">
                    <li className="mb-[100px]">
                        <div className="w-[255px] h-[109px] rounded-md bg-[#AD1FEA] relative">
                            <h4 className="absolute bottom-[20px] left-[21px] text-[#ffffff]  text-lg not-italic font-bold">#AD1FEA</h4>
                            <div className="flex items-start absolute bottom-[-35px]">
                                <p className="text-[#647196] text-base not-italic font-normal">RGB</p>
                                <p className="ml-[60px] text-[#647196] text-base not-italic font-bold">173, 31, 234</p>
                            </div>
                            <div className="flex items-start absolute bottom-[-60px]">
                                <p className="text-[#647196] text-base not-italic font-normal">HSL</p>
                                <p className="ml-[60px] text-[#647196] text-base not-italic font-bold">231°, 100%, 97%</p>
                            </div>
                        </div>
                    </li>
                    <li className="mb-[100px]">
                        <div className="w-[255px] h-[109px] rounded-md bg-[#4661E6] relative">
                            <h4 className="absolute bottom-[20px] left-[21px] text-[#ffffff]  text-lg not-italic font-bold">#4661E6</h4>
                            <div className="flex items-start absolute bottom-[-35px]">
                                <p className="text-[#647196] text-base not-italic font-normal">RGB</p>
                                <p className="ml-[60px] text-[#647196] text-base not-italic font-bold">70, 97, 230</p>
                            </div>
                            <div className="flex items-start absolute bottom-[-60px]">
                                <p className="text-[#647196] text-base not-italic font-normal">HSL</p>
                                <p className="ml-[60px] text-[#647196] text-base not-italic font-bold">230°, 76%, 59%</p>
                            </div>
                        </div>
                    </li>
                    <li className="mb-[100px]">
                        <div className="w-[255px] h-[109px] rounded-md bg-[#373F68] relative">
                            <h4 className="absolute bottom-[20px] left-[21px] text-[#ffffff]  text-lg not-italic font-bold">#373F68</h4>
                            <div className="flex items-start absolute bottom-[-35px]">
                                <p className="text-[#647196] text-base not-italic font-normal">RGB</p>
                                <p className="ml-[60px] text-[#647196] text-base not-italic font-bold">55, 63, 104</p>
                            </div>
                            <div className="flex items-start absolute bottom-[-60px]">
                                <p className="text-[#647196] text-base not-italic font-normal">HSL</p>
                                <p className="ml-[60px] text-[#647196] text-base not-italic font-bold">230°, 31%, 31%</p>
                            </div>
                        </div>
                    </li>
                    <li className="mb-[100px]">
                        <div className="w-[255px] h-[109px] rounded-md bg-[#ffffff] relative border-2 border-[#CDD2EE]">
                            <h4 className="absolute bottom-[20px] left-[21px] text-[#647196]  text-lg not-italic font-bold">#FFFFFF</h4>
                            <div className="flex items-start absolute bottom-[-35px]">
                                <p className="text-[#647196] text-base not-italic font-normal">RGB</p>
                                <p className="ml-[60px] text-[#647196] text-base not-italic font-bold">255, 255, 255</p>
                            </div>
                            <div className="flex items-start absolute bottom-[-60px]">
                                <p className="text-[#647196] text-base not-italic font-normal">HSL</p>
                                <p className="ml-[60px] text-[#647196] text-base not-italic font-bold">0°, 0%, 100%</p>
                            </div>
                        </div>
                    </li>
                    <li className="mb-[100px]">
                        <div className="w-[255px] h-[109px] rounded-md bg-[#F2F4FF] relative">
                            <h4 className="absolute bottom-[20px] left-[21px] text-[#647196]  text-lg not-italic font-bold">#F2F4FF</h4>
                            <div className="flex items-start absolute bottom-[-35px]">
                                <p className="text-[#647196] text-base not-italic font-normal">RGB</p>
                                <p className="ml-[60px] text-[#647196] text-base not-italic font-bold">242, 244, 255</p>
                            </div>
                            <div className="flex items-start absolute bottom-[-60px]">
                                <p className="text-[#647196] text-base not-italic font-normal">HSL</p>
                                <p className="ml-[60px] text-[#647196] text-base not-italic font-bold">231°, 100%, 97%</p>
                            </div>
                        </div>
                    </li>
                    <li className="mb-[100px]">
                        <div className="w-[255px] h-[109px] rounded-md bg-[#F7F8FD] relative">
                            <h4 className="absolute bottom-[20px] left-[21px] text-[#647196]  text-lg not-italic font-bold">#F7F8FD</h4>
                            <div className="flex items-start absolute bottom-[-35px]">
                                <p className="text-[#647196] text-base not-italic font-normal">RGB</p>
                                <p className="ml-[60px] text-[#647196] text-base not-italic font-bold">247, 248, 253</p>
                            </div>
                            <div className="flex items-start absolute bottom-[-60px]">
                                <p className="text-[#647196] text-base not-italic font-normal">HSL</p>
                                <p className="ml-[60px] text-[#647196] text-base not-italic font-bold">230°, 60%, 98%</p>
                            </div>
                        </div>
                    </li>
                    <li className="mb-[100px]">
                        <div className="w-[255px] h-[109px] rounded-md bg-[#3A4374] relative">
                            <h4 className="absolute bottom-[20px] left-[21px] text-[#ffffff]  text-lg not-italic font-bold">#3A4374</h4>
                            <div className="flex items-start absolute bottom-[-35px]">
                                <p className="text-[#647196] text-base not-italic font-normal">RGB</p>
                                <p className="ml-[60px] text-[#647196] text-base not-italic font-bold">58, 67, 116</p>
                            </div>
                            <div className="flex items-start absolute bottom-[-60px]">
                                <p className="text-[#647196] text-base not-italic font-normal">HSL</p>
                                <p className="ml-[60px] text-[#647196] text-base not-italic font-bold">231°, 33%, 34%</p>
                            </div>
                        </div>
                    </li>
                    <li className="mb-[100px]">
                        <div className="w-[255px] h-[109px] rounded-md bg-[#647196] relative">
                            <h4 className="absolute bottom-[20px] left-[21px] text-[#ffffff]  text-lg not-italic font-bold">#647196</h4>
                            <div className="flex items-start absolute bottom-[-35px]">
                                <p className="text-[#647196] text-base not-italic font-normal">RGB</p>
                                <p className="ml-[60px] text-[#647196] text-base not-italic font-bold">100, 113, 150</p>
                            </div>
                            <div className="flex items-start absolute bottom-[-60px]">
                                <p className="text-[#647196] text-base not-italic font-normal">HSL</p>
                                <p className="ml-[60px] text-[#647196] text-base not-italic font-bold">224°, 20%, 49%</p>
                            </div>
                        </div>
                    </li>
                    <li className="mb-[100px]">
                        <div className="w-[255px] h-[109px] rounded-md bg-[#F49F85] relative">
                            <h4 className="absolute bottom-[20px] left-[21px] text-[#ffffff]  text-lg not-italic font-bold">#F49F85</h4>
                            <div className="flex items-start absolute bottom-[-35px]">
                                <p className="text-[#647196] text-base not-italic font-normal">RGB</p>
                                <p className="ml-[60px] text-[#647196] text-base not-italic font-bold">244, 159, 133</p>
                            </div>
                            <div className="flex items-start absolute bottom-[-60px]">
                                <p className="text-[#647196] text-base not-italic font-normal">HSL</p>
                                <p className="ml-[60px] text-[#647196] text-base not-italic font-bold">14°, 83%, 74%</p>
                            </div>
                        </div>
                    </li>
                    <li className="mb-[100px]">
                        <div className="w-[255px] h-[109px] rounded-md bg-[#62BCFA] relative">
                            <h4 className="absolute bottom-[20px] left-[21px] text-[#ffffff]  text-lg not-italic font-bold">#62BCFA</h4>
                            <div className="flex items-start absolute bottom-[-35px]">
                                <p className="text-[#647196] text-base not-italic font-normal">RGB</p>
                                <p className="ml-[60px] text-[#647196] text-base not-italic font-bold">98, 188, 250</p>
                            </div>
                            <div className="flex items-start absolute bottom-[-60px]">
                                <p className="text-[#647196] text-base not-italic font-normal">HSL</p>
                                <p className="ml-[60px] text-[#647196] text-base not-italic font-bold">204°, 94%, 68%</p>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="flex items-center mt-20">
                    <h4 className="m-0 bg-[#e3e6f2] w-[144px] text-[#ffffff] px-2 text-right text-2xl not-italic font-bold"> 02 </h4>
                    <h4 className=" text-[#3A4374] text-[24px] font-bold ml-5 uppercase">TYPOGRAPHY</h4>
                </div>
                <div className="flex   bg-[#F7F8FD] relative overflow-hidden pb-20 rounded-md mt-10 mr-[75px] ml-[165px]">
                    <h1 className="text-[#e3e6f2]  absolute  top-[-91px] left-[-8px] text-[200px] not-italic font-bold z-0 ">Aa</h1>
                    <h4 className="text-indigo-900 text-[40px] font-bold z-50 absolute top-[70px] left-[83px]">JOST</h4>

                    <p className="text-[#3A4374] font-bold text-[20px] ml-[25rem] mt-20 leading-[40px] tracking-widest w-[55%]">
                        A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
                        <span className="font-normal"> a b c d e f g h i j k l m n o q r s t u v w x y z 1 2 3 4 5 6 7 8 9 0 ! @  # $ % ^ & * ( ) _+</span></p>
                </div>
                <div className="flex mt-10 mr-[75px] ml-[165px]">
                    <ul className="w-[50%]">
                        <li>
                            <p className="text-[#647196] text-[16px] font-normal">H1 - Jost Bold  |  24px; 35px Line; -0.33 Spacing</p>
                            <p className="text-[#3A4374] text-[24px] font-bold">Sed egestas ante et vulputate volutpat</p>
                        </li>
                        <li className="mt-10">
                            <p className="text-[#647196] text-[16px] font-normal">H2 - Jost Bold  |  20px; 29px Line; -0.25 Spacing</p>
                            <p className="text-[#3A4374] text-[20px] font-bold">Vestibulum volutpat acus a ultrices sagittis</p>
                        </li>
                        <li className="mt-10">
                            <p className="text-[#647196] text-[16px] font-normal">H3 - Jost Bold  |  18px; 26px Line; -0.25 Spacing</p>
                            <p className="text-[#3A4374] text-[18px] font-bold">Pellentesque a diam sit amet mi ullamcorper vehicula</p>
                        </li>
                        <li className="mt-10">
                            <p className="text-[#647196] text-[16px] font-normal">H4 - Jost Bold  |  14px; 20px Line; -0.2 Spacing</p>
                            <p className="text-[#3A4374] text-[14px] font-bold">Ut scelerisque hendrerit tellus. Integer sagittis</p>
                        </li>
                    </ul>
                    <ul className="w-[50%]">
                        <li className="mb-10">
                            <p className="text-[#647196] text-[16px]  font-normal mb-2">Body 1 - Jost Regular  |  16px; 23px Line</p>
                            <p className="text-[#3A4374] text-[16px]  font-normal leading-5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna.
                                In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis.</p>
                        </li>
                        <li className="mb-10">
                            <p className="text-[#647196] text-[15px]  font-normal mb-2">Body 2 - Jost Regular  |  15px; 22px Line</p>
                            <p className="text-[#3A4374] text-[16px]  font-normal leading-5">Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu</p>
                        </li>
                        <li>
                            <p className="text-[#647196] text-[16px]  font-normal mb-2">Body 3 - Jost Semibold  |  13px; 19px Line</p>
                            <p className="text-[#3A4374] text-[13px]  font-bold leading-5">Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu</p>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center mt-20">
                    <h4 className="m-0 bg-[#e3e6f2] w-[144px] text-[#ffffff] px-2 text-right text-2xl not-italic font-bold uppercase"> 03</h4>
                    <h4 className=" text-[#3A4374] text-[24px] font-bold ml-5 uppercase">BUTTONS</h4>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2  gap-x-[150px] lg:grid-cols-4 mt-10   mr-[75px] ml-[165px]">
                    <li className="mb-10">
                        <button className="w-[158px] h-[44px] bg-[#AD1FEA] rounded-md text-[#F2F4FE] font-bold mb-2">Button 1</button>
                        <p className="ml-[10px] text-gray-600 text-center text-base">Default</p>
                    </li>
                    <li className="mb-10">
                        <button className="w-[158px] h-[44px] bg-[#4661E6] rounded-md text-[#F2F4FE] font-bold mb-2">Button 2</button>
                        <p className="ml-[10px] text-gray-600 text-center text-base">Default</p>

                    </li>
                    <li className="mb-10">
                        <button className="w-[158px] h-[44px] bg-[#3A4374] rounded-md text-[#F2F4FE] font-bold mb-2">Button 3</button>
                        <p className="ml-[10px] text-gray-600 text-center text-base">Default</p>

                    </li>
                    <li className="mb-10">
                        <button className="w-[158px] h-[44px] bg-[#D73737] rounded-md text-[#F2F4FE] font-bold mb-2">Button 4</button>
                        <p className="ml-[10px] text-gray-600 text-center text-base">Default</p>

                    </li>
                    <li className="mb-10">
                        <button className="w-[158px] h-[44px] bg-[#C75AF6] hover:bg-[#AD1FEA] rounded-md text-[#F2F4FE] font-bold mb-2">Button 1</button>
                        <p className="ml-[10px] text-gray-600 text-center text-base">Hover</p>

                    </li>
                    <li className="mb-10">
                        <button className="w-[158px] h-[44px] bg-[#7C91F9] hover:bg-[#4661E6] rounded-md text-[#F2F4FE] font-bold mb-2">Button 2</button>
                        <p className="ml-[10px] text-gray-600 text-center text-base">Hover</p>

                    </li>
                    <li className="mb-10">
                        <button className="w-[158px] h-[44px] bg-[#656EA3] hover:bg-[#3A4374] rounded-md text-[#F2F4FE] font-bold mb-2">Button 3</button>
                        <p className="ml-[10px] text-gray-600 text-center text-base">Hover</p>

                    </li>
                    <li className="mb-10">
                        <button className="w-[158px] h-[44px] bg-[#E98888] hover:bg-[#D73737] rounded-md text-[#F2F4FE] font-bold mb-2">Button 4</button>
                        <p className="ml-[10px] text-gray-600 text-center text-base">Hover</p>
                    </li>

                </ul>
                <ul className="w-[36%] grid grid-cols-1 md:grid-cols-2  gap-x-[150px] lg:grid-cols-2  mr-[75px] ml-[165px]">
                    <li className="mb-10">
                        <button className="w-[158px] h-[44px]  rounded-md text-[#647196] font-bold mb-2 flex justify-center items-center"><img className="mr-4 " src={arrow} alt="arrow" /> Go Back</button>
                        <p className="ml-[10px] text-gray-600 text-center text-base">Default</p>
                    </li>
                    <li className="mb-10">
                        <button className="w-[158px] h-[50px] bg-[#373F68] rounded-md text-[#ffffff] font-bold mb-2 flex justify-center items-center"><img className="mr-4 " src={arrow2} alt="arrow" /> Go Back</button>
                        <p className="ml-[10px] text-gray-600 text-center text-base ">Default</p>
                    </li>
                    <li className="mb-10">
                        <button className="w-[158px] h-[44px]  rounded-md text-[#647196] font-bold mb-2 flex justify-center items-center hover:underline"><img className="mr-4 " src={arrow} alt="arrow" /> Go Back</button>
                        <p className="ml-[10px] text-gray-600 text-center text-base">Hover</p>
                    </li>
                    <li className="mb-10">
                        <button className="w-[158px] h-[50px]  bg-[#373F68] rounded-md text-[#ffffff] hover:underline font-bold mb-2 flex justify-center items-center"><img className="mr-4 " src={arrow2} alt="arrow" /> Go Back</button>
                        <p className="ml-[10px] text-gray-600 text-center text-base">Hover</p>
                    </li>
                </ul>
                <div className="flex items-center mt-20">
                    <h4 className="m-0 bg-[#e3e6f2] w-[144px] text-[#ffffff] px-2 text-right text-2xl not-italic font-bold "> 04 </h4>
                    <h4 className=" text-[#3A4374] text-[24px] font-bold ml-5 uppercase">interactive elements</h4>
                </div>
                <div className="flex mr-[137px] ml-[114px] justify-around  mt-20 ">
                    <ul className=" mt-10 gap-x-[80px] grid grid-cols-1 md:grid-cols-3   lg:grid-cols-3">
                        <li className="mb-10">
                            <button className="w-[40px] h-[53px] table-column text-[13px] font-bold text-[#3A4374] bg-[#F2F4FE] rounded-lg mb-2">
                                <img className="mx-auto" src={upperarrow} alt="arrow1" />
                                99
                            </button>
                            <p className="text-[16px] text-[#647196]">Default</p>
                        </li>
                        <li className="mb-10">
                            <button className="w-[40px] h-[53px] text-[13px] table-column bg-[#F2F4FE] text-[#3A4374] font-bold hover:bg-[#CFD7FF] rounded-lg mb-2">
                                <img className="mx-auto" src={upperarrow} alt="arrow1" />
                                99
                            </button>
                            <p className="text-[16px] text-[#647196]">Hover</p>
                        </li>
                        <li className="mb-10">
                            <button className="w-[40px] h-[53px] text-[13px] text-[#ffffff] table-column bg-[#4661E6] text--[#ffffff] font-bold rounded-lg mb-2">
                                <img className="mx-auto" src={upperarrow2} alt="arrow1" />
                                100
                            </button>
                            <p className="text-[16px] text-[#647196]">Active</p>
                        </li>
                        <li>
                            <button className="w-[48px] h-[30px] bg-[#F2F4FF] font-bold text-[#4661E6] text-[13px] rounded-lg"> UX</button>
                            <p className="text-[16px] text-[#647196]">Default</p>

                        </li>
                        <li>
                            <button className="w-[48px] h-[30px] bg-[#F2F4FF] font-bold text-[#4661E6] text-[13px] hover:bg-[#CFD7FF] rounded-lg"> UX</button>
                            <p className="text-[16px] text-[#647196]">Hover</p>

                        </li>
                        <li>
                            <button className="w-[48px] h-[30px] bg-[#4661E6] font-bold text-[13px] rounded-lg text-[#ffffff]">UX</button>
                            <p className="text-[16px] text-[#647196]">Active</p>

                        </li>
                    </ul>
                    <div className=" relative   inline-block text-left">
                        <button
                            type="button"
                            className="inline-flex justify-center items-center gap-x-1.5   rounded-md w-[200px] h-[72px] text-[#ffffff] bg-[#373F68] text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 "
                            id="menu-button"
                            aria-expanded={isOpen}
                            aria-haspopup="true"
                            onClick={handleButtonClick}
                        >
                            Sort by : <span className="font-bold">{value}</span>
                            <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>
                        </button>
                        {isOpen && (
                            <div className="absolute  z-10 mt-2 w-[255px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                <div className="py-1 flex justify-between mr-5 mx-3" role="none">
                                    <a onClick={() => handleOptionClick('Most Upvotes')} className="text-gray-700 block px-4 py-2 text-sm hover:text-[#AD1FEA]" role="menuitem" tabIndex="-1" id="menu-item-0">Most Upvotes</a>
                                    <img src={correct} alt="coorect" />
                                </div>
                                <div className="py-1 flex justify-between  mr-5 mx-3" role="none">
                                    <a onClick={() => handleOptionClick('Least Upvotes')} className="text-gray-700 block px-4 py-2 text-sm hover:text-[#AD1FEA]" role="menuitem" tabIndex="-1" id="menu-item-1">Least Upvotes</a>
                                    <img src={correct} alt="coorect" />

                                </div>
                                <div className="py-1 flex justify-between  mr-5 mx-3" role="none">
                                    <a onClick={() => handleOptionClick('Most Comments')} className="text-gray-700 block px-4 py-2 text-sm hover:text-[#AD1FEA]" role="menuitem" tabIndex="-1" id="menu-item-2">Most Comments</a>
                                    <img src={correct} alt="coorect" />

                                </div>
                                <div className="py-1 flex justify-between  mr-5 mx-3" role="none">
                                    <a onClick={() => handleOptionClick('Least Comments')} className="text-gray-700 block px-4 py-2 text-sm hover:text-[#AD1FEA]" role="menuitem" tabIndex="-1" id="menu-item-3">Least Comments</a>

                                    <img src={correct} alt="coorect" />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex items-center mt-20">
                    <h4 className="m-0 bg-[#e3e6f2] w-[144px] text-[#ffffff] px-2 text-right text-2xl not-italic font-bold uppercase"> 05 </h4>
                    <h4 className=" text-[#3A4374] text-[24px] font-bold ml-5 uppercase">FORM ELEMENTS</h4>
                </div>
                <div className="mr-[75px] ml-[165px]">
                    <ul className=" grid grid-cols-1 md:grid-cols-2  gap-4 lg:grid-cols-4 mt-10">
                        <li className="mb-20">
                            <p className="flex justify-center text-[#647196] text-[16px] mb-2">Text Field - Default</p>
                            <input type="text" disabled className="bg-[#F7F8FD] w-[255px] h-[48px] text-[#3A4374] text-[15px] rounded-md" />
                        </li>
                        <li className="mb-20">
                            <p className="flex justify-center text-[#647196] text-[16px] mb-2">Text Field - Filled</p>
                            <input type="text" value="Lorem ipsum dolor" className="bg-[#F7F8FD]  w-[255px] h-[48px] text-[#3A4374] text-[15px] px-4 rounded-md" />
                        </li>
                        <li className="mb-20">
                            <p className="flex justify-center text-[#647196] text-[16px] mb-2">Text Field - Active</p>
                            <input type="text" value="Lorem ipsum dolor" className="bg-[#F7F8FD]  w-[255px] h-[48px]  text-[#3A4374] text-[15px] px-4 border-2 border-[#4661E6] rounded-md" />
                        </li>
                        <li className="mb-20">
                            <p className="flex justify-center text-[#647196] text-[16px] mb-2">Text Field - Error</p>
                            <input type="text" className="bg-[#F7F8FD]  w-[255px] h-[48px] text-[#3A4374] text-[15px] px-4 rounded-md border-2 border-[#D73737]" />
                            <p className="text-[14px] text-[#D73737]">Can’t be empty</p>
                        </li>
                        <li>
                            <div>
                                <p className="flex justify-center text-[#647196] text-[16px] mb-2">Dropdown - Default</p>
                                <button
                                    type="button"
                                    className="w-[255px] h-[48px] bg-[#F7F8FD] rounded-md flex justify-between items-center px-5"
                                    id="menu-button"
                                    aria-expanded={isOpen}
                                    aria-haspopup="true"
                                    onClick={handleButtonClick}
                                >
                                    <p className="flex justify-center text-[#647196] text-[16px]">Feature</p>
                                    <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </li>
                        <li>
                            <div>
                                <p className="flex justify-center text-[#647196] text-[16px] mb-2">Dropdown - Active</p>

                                <button
                                    type="button"
                                    className="w-[255px] h-[48px] bg-[#F7F8FD] rounded-md flex justify-between items-center px-5 border-2 border-[#4661E6]"
                                    id="menu-button"
                                >
                                    <p className="flex justify-center text-[#647196] text-[16px]">Feature</p>
                                    <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </li>
                        <li>
                            <div>
                            <p className="flex justify-center text-[#647196] text-[16px] mb-2">Dropdown - Default</p>

                            <div className="inline-block text-left">

                                <button
                                    type="button"
                                        className="w-[255px] px-5 h-[48px] flex justify-between items-center text-[#647196] gap-x-1.5 hover:shadow-xl   rounded-md   bg-[#F7F8FD] hover:bg-[#ffffff]   shadow-sm ring-1 ring-inset ring-gray-300 "
                                    id="menu-button"
                                    aria-expanded={isOpen}
                                    aria-haspopup="true"
                                    onClick={handleButtonClick1}
                                >
                                        {value1}
                                    <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                {isOpen1 && (
                                    <div className="w-[255px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                        <div className="py-1 flex justify-between mr-5 mx-3" role="none">
                                                <a onClick={() => handleOptionClick1('UI')} className="text-gray-700 block px-4 py-2 text-sm hover:text-[#AD1FEA]" role="menuitem" tabIndex="-1" id="menu-item-0">UI</a>
                                            <img src={correct} alt="coorect" />
                                        </div>
                                        <div className="py-1 flex justify-between  mr-5 mx-3" role="none">
                                                <a onClick={() => handleOptionClick1('UX')} className="text-gray-700 block px-4 py-2 text-sm hover:text-[#AD1FEA]" role="menuitem" tabIndex="-1" id="menu-item-1">UX</a>
                                            <img src={correct} alt="coorect" />
                                        </div>
                                        <div className="py-1 flex justify-between  mr-5 mx-3" role="none">
                                                <a onClick={() => handleOptionClick1('Enhancement')} className="text-gray-700 block px-4 py-2 text-sm hover:text-[#AD1FEA]" role="menuitem" tabIndex="-1" id="menu-item-2">Enhancement</a>
                                            <img src={correct} alt="coorect" />

                                        </div>
                                        <div className="py-1 flex justify-between  mr-5 mx-3" role="none">
                                                <a onClick={() => handleOptionClick1('Bug')} className="text-gray-700 block px-4 py-2 text-sm hover:text-[#AD1FEA]" role="menuitem" tabIndex="-1" id="menu-item-3">Bug</a>
                                            <img src={correct} alt="coorect" />
                                        </div>
                                    </div>
                                )}
                            </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Home;