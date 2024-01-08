/* eslint-disable jsx-a11y/anchor-is-valid */
import oval from "../images/Oval.svg";
import bulb from "../images/bulb 2.svg";
import correct from "../images/correct.svg";
import upperarrow from "../images/Path upper 2.svg";
import message from "../images/Path.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import EmptySuggestion from "./EmptySuggestion";

function Suggestion() {
    const [Open, setOpen] = useState(false);
    const [value1, setValue1] = useState('Default');
    const [feedbacks, setFeedbacks] = useState([]);
    const [error, setError] = useState('');
    const handleButtonClick1 = () => {
        setOpen(!Open);
    };

    const handleClick = (selectedValue) => {
        setValue1(selectedValue);
        setOpen(false);
    };

    useEffect(() => {
       
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/feedback`)
            .then(response => {
                setFeedbacks(response.data);
            })
            .catch(error => {
                setError('Error fetching feedbacks. Please try again.');
                console.error('Error fetching feedbacks:', error);
            });
    }, []); 

    return (
        <>

            <div className="flex justify-between  mx-[165px] py-10">
                <div className="w-[20%]  " >
                  <div className="w-[255px] relative">
                        <Link to="/feedbackdetail"> <img src={oval} alt="oval" className="mb-10  object-cover" />
                          <div className="absolute bottom-[20px] left-[20px]">
                            <h4 className="text-[20px] text-[#FFFFFF] font-bold">Eqaim</h4>
                            <p className="text-[15px] text-[#FFFFFF] font-medium">Feedback Board</p>
                        </div>
                    </Link>
                    </div>
                    <ul className="grid grid-cols-3 gap-y-4 p-8 w-[255px] bg-[#FFFFFF] rounded-md mb-10">
                        <li >
                            <p className="flex justify-center items-center w-[48px] h-[30px] rounded-md text-[13px] text-[#ffffff] font-bold bg-[#4661E6]">All</p>
                        </li>
                        <li >
                            <p className="flex justify-center items-center w-[48px] h-[30px] rounded-md text-[13px] text-[#4661E6] font-bold  bg-[#F2F4FF]">UI</p>
                        </li>
                        <li>
                            <p className="flex justify-center items-center w-[48px] h-[30px] rounded-md text-[13px] text-[#4661E6] font-bold bg-[#F2F4FF]">UX</p>
                        </li>

                        <li className="col-span-2">
                            <p className=" flex justify-center items-center w-[111px] h-[30px] rounded-md text-[13px] text-[#4661E6] font-bold bg-[#F2F4FF]">Enhancement</p>
                        </li>
                        <li >
                            <p className="flex justify-center items-center w-[56px] h-[30px] rounded-md text-[13px] text-[#4661E6] font-bold bg-[#F2F4FF]">Bug</p>
                        </li>
                        <li >
                            <p className="flex justify-center items-center w-[77px] h-[30px] rounded-md text-[13px] text-[#4661E6] font-bold bg-[#F2F4FF]">Feature</p>
                        </li>
                    </ul>
                    <Link to="/roadmap">  <div className="p-8 w-[255px] bg-[#FFFFFF] rounded-md">
                        <div className="flex justify-between items-center mb-6">
                            <h4 className="text-[18px] text-[#3A4374] font-bold ">
                                Roadmap
                            </h4>
                            <p className="text-[13px] text-[#4661E6] hover:text-[#3A4374] underline font-semibold">View</p>
                        </div>
                        <ul>
                            <li className="flex justify-between items-center mb-2">
                                <div className="flex  justify-between items-center gap-4">
                                    <p className="w-[8px] h-[8px] rounded-full bg-[#F49F85]"></p>
                                    <p className="text-[16px] text-[#647196]">Planned</p>
                                </div>
                                <p className="text-[16px] text-[#647196] font-bold">2</p>
                            </li>
                            <li className="flex justify-between items-center mb-2">
                                <div className="flex  justify-between items-center gap-4">
                                    <p className="w-[8px] h-[8px] rounded-full bg-[#AD1FEA]"></p>
                                    <p className="text-[16px] text-[#647196]">In-Progress</p>
                                </div>
                                <p className="text-[16px] text-[#647196] font-bold">3</p>
                            </li>
                            <li className="flex justify-between items-center">
                                <div className="flex  justify-between items-center gap-4">
                                    <p className="w-[8px] h-[8px] rounded-full bg-[#62BCFA]"></p>
                                    <p className="text-[16px] text-[#647196]">Live</p>
                                </div>
                                <p className="text-[16px] text-[#647196] font-bold">1</p>
                            </li>
                        </ul>
                    </div>
                    </Link> 
                </div>
                <div className="w-[72%] ">
                    <ul className="flex  justify-between items-center bg-[#373F68] rounded-md p-5 mb-10 ">
                        <li className="flex">
                            <div className="flex">
                                <img src={bulb} alt="bulb" />
                                <h4 className="mx-2 text-[18px] text-[#ffffff] font-bold">6 Suggestions</h4>
                            </div>
                            <div className="relative inline-block text-left ml-5">
                                <button
                                    type="button"
                                    className="inline-flex justify-center items-center gap-x-1.5 rounded-md w-[200px] text-[#ffffff] text-sm"
                                    id="menu-button"
                                    aria-expanded={Open}
                                    aria-haspopup="true"
                                    onClick={handleButtonClick1}
                                >
                                    Sort by : <span className="font-bold">{value1}</span>
                                    <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                {Open && (
                                    <div className="absolute   z-10 mt-10 w-[255px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                        <div className="py-1 flex justify-between mr-5 mx-3" role="none">
                                            <a onClick={() => handleClick('Most Upvotes')} className="text-gray-700 block px-4 py-2 text-sm hover:text-[#AD1FEA]" role="menuitem" tabIndex="-1" id="menu-item-0">Most Upvotes</a>
                                            {value1 === "Most Upvotes" &&
                                                <img src={correct} alt="correct" />
                                            }
                                        </div>
                                        <div className="py-1 flex justify-between  mr-5 mx-3" role="none">
                                            <a onClick={() => handleClick('Least Upvotes')} className="text-gray-700 block px-4 py-2 text-sm hover:text-[#AD1FEA]" role="menuitem" tabIndex="-1" id="menu-item-1">Least Upvotes</a>
                                            {value1 === "Least Upvotes" &&
                                                <img src={correct} alt="correct" />
                                            }

                                        </div>
                                        <div className="py-1 flex justify-between  mr-5 mx-3" role="none">
                                            <a onClick={() => handleClick('Most Comments')} className="text-gray-700 block px-4 py-2 text-sm hover:text-[#AD1FEA]" role="menuitem" tabIndex="-1" id="menu-item-2">Most Comments</a>
                                            {value1 === "Most Comments" &&
                                                <img src={correct} alt="correct" />
                                            }

                                        </div>
                                        <div className="py-1 flex justify-between  mr-5 mx-3" role="none">
                                            <a onClick={() => handleClick('Least Comments')} className="text-gray-700 block px-4 py-2 text-sm hover:text-[#AD1FEA]" role="menuitem" tabIndex="-1" id="menu-item-3">Least Comments</a>
                                            {value1 === "Least Comments" &&
                                                <img src={correct} alt="correct" />
                                            }
                                        </div>
                                    </div>
                                )}
                            </div>
                        </li>
                        <li>
                            <button className="text-sm text-[#ffffff] font-bold w-[158px] h-[44px] bg-[#AD1FEA] rounded-md">
                                <Link to="/add">
                                    + Add Feedback
                                </Link>
                            </button>
                        </li>
                    </ul>

                    {feedbacks.length > 0 ? feedbacks.map(feedback => (
                        <Link to={{ pathname: `/edit/${feedback._id}`, state: { feedback } }}>
                        <div className="bg-[#ffffff] flex justify-between items-center p-10 rounded-md mb-10">
                                    <div className="flex">
                                        <button className="w-[40px] h-[53px] text-[13px] table-column bg-[#F2F4FE] text-[#3A4374] font-bold hover:bg-[#CFD7FF] rounded-lg mb-2">
                                            <img className="mx-auto" src={upperarrow} alt="arrow1" />
                                            99
                                        </button>
                                        <div className="ml-8">
                                            <h4 className="text-[18px] font-bold text-[#3A4374]">
                                                {feedback.title}
                                            </h4>
                                            <p className="text-[16px] font-medium text-[#647196] mb-3">{feedback.detail}</p>
                                            <a className="w-[111px] p-2 text-[13px] text-[#4661E6] font-semibold bg-[#F2F4FF] rounded-md">{feedback.category}</a>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <img className="mr-2" src={message} alt="msg" />
                                        <p className="text-[16px] text-[#3A4374] font-bold">1</p>
                                    </div>
                            </div>
                        </Link>
                    )) : <>
                    <EmptySuggestion />
                    </>}
                </div>
            </div>
        </>
    )
}


export default Suggestion;