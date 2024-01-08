/* eslint-disable jsx-a11y/anchor-is-valid */
import arrow from "../images/Path 3.svg";
import pen from "../images/Group 4.svg";
import { useState, useEffect } from "react";
import correct from "../images/correct.svg";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import swal from 'sweetalert';



function Edit() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [feedback, setFeedback] = useState({
        title: "",
        category: "features",
        status: "",
        detail: "",
    });

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/feedback/${id}`)
            .then(response => {
                const data = response.data;
                setFeedback(data);
            })
            .catch(error => {
                console.error("Error fetching feedback data:", error);
            });
    }, [id]);

    const handleButtonClick3 = () => {
        setIsOpen3(!isOpen3);
    };
    const handleButtonClick4 = () => {
        setIsOpen4(!isOpen4);
    };

    const handleOptionClick3 = (selectedValue) => {
        setFeedback((prevFeedback) => ({
            ...prevFeedback,
            category: selectedValue
        }));
        setIsOpen3(false);
    }

    const handleOptionClick4 = (selectedValue) => {
        setFeedback((prevFeedback) => ({
            ...prevFeedback,
            status: selectedValue
        }));
        setIsOpen4(false);
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFeedback((prevFeedback) => ({
            ...prevFeedback,
            [name]: value,
        }));
    };

    const handleSaveChanges = () => {
        axios.patch(`${process.env.REACT_APP_BACKEND_URL}/feedback/${id}`, feedback)
            .then(response => {
                console.log("Feedback updated successfully:", response.data);
                swal("updated successfully!!")
                navigate(`/suggestion`);
            })
            .catch(error => {
                console.error("Error updating feedback:", error);
            });
    };
    const handleDelete = () => {
        const isConfirmed = window.confirm("Are you sure you want to delete this feedback?");
        if (isConfirmed) {
            axios.delete(`${process.env.REACT_APP_BACKEND_URL}/feedback/${id}`)
                .then(response => {
                    console.log("Feedback deleted successfully:", response.data);
                    swal("deleted successfully!!")
                    navigate(`/suggestion`);
                })
                .catch(error => {
                    console.error("Error deleting feedback:", error);
                });
        }
    };

    return (
        <>
            <div className="mx-[400px] py-10">
                <button className="w-[158px] h-[44px]  rounded-md text-[#647196] font-bold mb-10 flex  items-center"> <img className="mr-4 " src={arrow} alt="arrow" /> <Link to="/suggestion">Go Back </Link></button>
                <div className="relative bg-[#ffffff] rounded-md p-10 py-20">
                    <div className="absolute top-[-25px] ">
                        <img src={pen} alt="circle" />
                    </div>
                    <h2 className="text-[24px] text-[#3A4374] font-bold mb-10">Editing ‘Add a dark theme option’</h2>
                    <ul>
                        <li className="mb-5">
                            <h4 className="text-[14px] text-[#3A4374] font-bold">Feedback Title</h4>
                            <p className="text-[14px] text-[#647196] font-medium mb-5">Add a short, descriptive headline</p>
                            <input type="text"
                                name="title"
                                value={feedback.title}
                                onChange={handleInputChange}
                                placeholder="Please add a dark theme option" className="bg-[#F7F8FD]  w-[456px] h-[48px] text-[#3A4374] text-[15px] px-4 rounded-md" />
                        </li>

                        <li className="mb-5">
                            <h4 className="text-[14px] text-[#3A4374] font-bold">Category</h4>
                            <p className="text-[14px] text-[#647196] font-medium mb-5">Choose a category for your feedback</p>

                            <div className="inline-block text-left">
                                <button
                                    type="button"
                                    className="w-[456px] h-[48px] px-6 flex justify-between items-center text-[#647196] gap-x-1.5 hover:shadow-xl   rounded-md   bg-[#F7F8FD]    shadow-sm ring-1 ring-inset ring-gray-300 "
                                    id="menu-button"
                                    aria-expanded={isOpen3}
                                    aria-haspopup="true"
                                    onClick={handleButtonClick3}
                                >
                                    {feedback.category}
                                    <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                {isOpen3 && (
                                    <div className="w-[456px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                        <div className="py-1 flex justify-between mr-5 mx-3" role="none">
                                            <a onClick={() => handleOptionClick3('UI')} className="text-[#647196] block px-4 py-2 text-sm hover:text-[#AD1FEA]" role="menuitem" tabIndex="-1" id="menu-item-0">UI</a>
                                            <img src={correct} alt="coorect" />
                                        </div>
                                        <div className="py-1 flex justify-between  mr-5 mx-3" role="none">
                                            <a onClick={() => handleOptionClick3('UX')} className="text-[#647196] block px-4 py-2 text-sm hover:text-[#AD1FEA]" role="menuitem" tabIndex="-1" id="menu-item-1">UX</a>
                                            <img src={correct} alt="coorect" />

                                        </div>
                                        <div className="py-1 flex justify-between  mr-5 mx-3" role="none">
                                            <a onClick={() => handleOptionClick3('Enhancement')} className="text-[#647196] block px-4 py-2 text-sm hover:text-[#AD1FEA]" role="menuitem" tabIndex="-1" id="menu-item-2">Enhancement</a>
                                            <img src={correct} alt="coorect" />

                                        </div>
                                        <div className="py-1 flex justify-between  mr-5 mx-3" role="none">

                                            <a onClick={() => handleOptionClick3('Bug')} className="text-[#647196] block px-4 py-2 text-sm hover:text-[#AD1FEA]" role="menuitem" tabIndex="-1" id="menu-item-3">Bug</a>
                                            <img src={correct} alt="coorect" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </li>

                        <li className="mb-5">
                            <h4 className="text-[14px] text-[#3A4374] font-bold">Update Status</h4>
                            <div className="inline-block text-left">

                                <button
                                    type="button"
                                    className="w-[456px] h-[48px] px-6 flex justify-between items-center text-[#647196] gap-x-1.5 hover:shadow-xl   rounded-md   bg-[#F7F8FD]    shadow-sm ring-1 ring-inset ring-gray-300 "
                                    id="menu-button"
                                    aria-expanded={isOpen4}
                                    aria-haspopup="true"
                                    onClick={handleButtonClick4}
                                >
                                    {feedback.status}
                                    <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                {isOpen4 && (
                                    <div className="w-[456px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                        <div className="py-1 flex justify-between mr-5 mx-3" role="none">
                                            <a onClick={() => handleOptionClick4('Suggestion')} className="text-[#647196] block px-4 py-2 text-sm hover:text-[#AD1FEA]" role="menuitem" tabIndex="-1" id="menu-item-0">Suggestion</a>
                                            <img src={correct} alt="coorect" />
                                        </div>
                                        <div className="py-1 flex justify-between  mr-5 mx-3" role="none">
                                            <a onClick={() => handleOptionClick4('Planned')} className="text-[#647196] block px-4 py-2 text-sm hover:text-[#AD1FEA]" role="menuitem" tabIndex="-1" id="menu-item-1">Planned</a>
                                            <img src={correct} alt="coorect" />

                                        </div>
                                        <div className="py-1 flex justify-between  mr-5 mx-3" role="none">
                                            <a onClick={() => handleOptionClick4('In-Progress')} className="text-[#647196] block px-4 py-2 text-sm hover:text-[#AD1FEA]" role="menuitem" tabIndex="-1" id="menu-item-2">In-Progress</a>
                                            <img src={correct} alt="coorect" />

                                        </div>
                                        <div className="py-1 flex justify-between  mr-5 mx-3" role="none">

                                            <a onClick={() => handleOptionClick4('Live')} className="text-[#647196] block px-4 py-2 text-sm hover:text-[#AD1FEA]" role="menuitem" tabIndex="-1" id="menu-item-3">Live</a>
                                            <img src={correct} alt="coorect" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </li>

                        <li className="mb-5">
                            <h4 className="text-[14px] text-[#3A4374] font-bold">Feedback Detail</h4>
                            <p className="text-[14px] text-[#647196] font-medium  mb-5">Include any specific comments on what should be improved, added, etc.</p>
                            <textarea
                                onChange={handleInputChange}
                                type="text" name="detail" value={feedback.detail} placeholder="It would help people with light sensitivities and who prefer dark 
                            mode." className="bg-[#F7F8FD]  w-[456px] h-[96px] text-[#3A4374] text-[15px] px-4 rounded-md p-5" ></textarea>
                        </li>
                    </ul>

                    <div className="flex justify-between  mx-2">
                        <button onClick={handleDelete} className="text-sm text-[#ffffff] font-bold w-[93px] h-[44px] bg-[#D73737] rounded-md">
                            Delete
                        </button>
                        <div>

                            <button className="text-sm text-[#ffffff] font-bold w-[93px] h-[44px] bg-[#3A4374] rounded-md">
                              <Link to="/suggestion">  Cancel </Link>
                            </button>

                            <button onClick={handleSaveChanges} className="text-sm text-[#ffffff] font-bold w-[144px] h-[44px] bg-[#AD1FEA] rounded-md ml-5">
                                Save Changes
                            </button>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default Edit;