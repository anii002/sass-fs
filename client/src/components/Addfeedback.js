/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import axios from "axios";
import arrow from "../images/Path 3.svg";
import circle from "../images/circle.svg";
import correct from "../images/correct.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';

function Add() {
    const navigate = useNavigate();
    const [isOpen2, setIsOpen2] = useState(false);
    const [value2, setValue2] = useState('Choose an option');
    const [feedbackTitle, setFeedbackTitle] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [feedbackText, setFeedbackText] = useState('');
    const [error, setError] = useState('');

    const handleButtonClick2 = () => {
        setIsOpen2(!isOpen2);
    };

    const handleOptionClick2 = (selectedValue) => {
        setValue2(selectedValue);
        setSelectedOption(selectedValue);
        setIsOpen2(false);
    }

    const handleCancel = () => {
    };

    const handleAddFeedback = () => {
        if (!feedbackTitle || !selectedOption || !feedbackText) {
            setError('Please fill in all fields.');
            return;
        }

        setError('');

        axios.post(`${process.env.REACT_APP_BACKEND_URL}/feedback`, {
            title: feedbackTitle,
            category: selectedOption,
            detail: feedbackText,
        })
            .then(response => {
                console.log('Feedback added successfully:', response.data);
                setFeedbackTitle('');
                setSelectedOption('');
                setFeedbackText('');
                swal("Add successfully!!")


                navigate(`/suggestion`);
            })
            .catch(error => {
                console.error('Error adding feedback:', error);
                setError('Error adding feedback. Please try again.');
            });
    };

    return (
        <>
            <div className="mx-[400px] py-10">
                <button className="w-[158px] h-[44px] rounded-md text-[#647196] font-bold mb-10 flex  items-center "> <img className="mr-4 " src={arrow} alt="arrow" /><Link to="/suggestion"> Go Back </Link></button>
                <div className="relative bg-[#ffffff] rounded-md p-10 py-20">
                    <div className="absolute top-[-25px] ">
                        <img src={circle} alt="circle" />
                    </div>
                    <h2 className="text-[24px] text-[#3A4374] font-bold mb-10">Create New Feedback</h2>
                    <ul>
                        <li className="mb-5">
                            <h4 className="text-[14px] text-[#3A4374] font-bold">Feedback Title</h4>
                            <p className="text-[14px] text-[#647196] font-medium mb-5">Add a short, descriptive headline</p>
                            <input
                                type="text"
                                value={feedbackTitle}
                                onChange={(e) => setFeedbackTitle(e.target.value)}
                                className="bg-[#F7F8FD]  w-[456px] h-[48px] text-[#3A4374] text-[15px] px-4 rounded-md"
                            />
                            {error && <p className="text-red-500 mt-3">{error}</p>}

                        </li>

                        <li className="mb-5">
                            <h4 className="text-[14px] text-[#3A4374] font-bold">Feedback Title</h4>
                            <p className="text-[14px] text-[#647196] font-medium mb-5">Add a short, descriptive headline</p>
                            <div className="inline-block text-left">
                                <button
                                    type="button"
                                    className="w-[456px] h-[48px] px-6 flex justify-between items-center text-[#647196] gap-x-1.5 hover:shadow-xl   rounded-md   bg-[#F7F8FD]    shadow-sm ring-1 ring-inset ring-gray-300 "
                                    id="menu-button"
                                    aria-expanded={isOpen2}
                                    aria-haspopup="true"
                                    onClick={handleButtonClick2}
                                >
                                    {value2}
                                    <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                {isOpen2 && (
                                    <div className="w-[456px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                        <div className="py-1 flex justify-between mr-5 mx-3" role="none">
                                            <a onClick={() => handleOptionClick2('UI')} className=" block px-4 py-2 text-[16px] text-[#647196] hover:text-[#AD1FEA]" role="menuitem" tabIndex="-1" id="menu-item-0">UI</a>
                                            <img src={correct} alt="coorect" />
                                        </div>
                                        <div className="py-1 flex justify-between  mr-5 mx-3" role="none">
                                            <a onClick={() => handleOptionClick2('UX')} className="text-[#647196] block px-4 py-2 text-sm hover:text-[#AD1FEA]" role="menuitem" tabIndex="-1" id="menu-item-1">UX</a>
                                            <img src={correct} alt="coorect" />

                                        </div>
                                        <div className="py-1 flex justify-between  mr-5 mx-3" role="none">
                                            <a onClick={() => handleOptionClick2('Enhancement')} className="text-[#647196] block px-4 py-2 text-sm hover:text-[#AD1FEA]" role="menuitem" tabIndex="-1" id="menu-item-2">Enhancement</a>
                                            <img src={correct} alt="coorect" />

                                        </div>
                                        <div className="py-1 flex justify-between  mr-5 mx-3" role="none">
                                            <a onClick={() => handleOptionClick2('Bug')} className="text-[#647196] block px-4 py-2 text-sm hover:text-[#AD1FEA]" role="menuitem" tabIndex="-1" id="menu-item-3">Bug</a>
                                            <img src={correct} alt="coorect" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </li>

                        <li className="mb-5">
                            <h4 className="text-[14px] text-[#3A4374] font-bold">Feedback Title</h4>
                            <p className="text-[14px] text-[#647196] font-medium  mb-5">Add a short, descriptive headline</p>
                            <textarea
                                type="text"
                                value={feedbackText}
                                onChange={(e) => setFeedbackText(e.target.value)}
                                className="bg-[#F7F8FD]  w-[456px] h-[96px] text-[#3A4374] text-[15px] p-5 rounded-md"
                            ></textarea>
                            {error && <p className="text-red-500 mt-3">{error}</p>}

                        </li>
                    </ul>

                    <div className="flex float-right mx-2">
                        <button className="text-sm text-[#ffffff] font-bold w-[93px] h-[44px] bg-[#3A4374] rounded-md" onClick={handleCancel}>
                            <Link to="/suggestion"> Cancel </Link>
                        </button>

                        <button className="text-sm text-[#ffffff] font-bold w-[158px] h-[44px] bg-[#AD1FEA] rounded-md ml-5" onClick={handleAddFeedback}>
                            Add Feedback
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Add;
