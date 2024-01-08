/* eslint-disable jsx-a11y/anchor-is-valid */
import arrow2 from "../images/Path 2.svg";
import message from "../images/Path.svg";
import upperarrow from "../images/Path upper 2.svg";
import { Link } from "react-router-dom";


function Roadmap() {
    return (
        <>
            <div className="py-10 mx-[172px]">
                <div className="flex justify-between items-center bg-[#373F68]  rounded-md p-6 mb-10">
                    <div className="mx-2">
                        <button className="w-[158px]  bg-[#373F68] rounded-md text-[#ffffff] font-bold flex  items-center"><img className="mr-3" src={arrow2} alt="arrow" /><Link to="/"> Go Back </Link></button>
                        <h4 className="text-[24px] text-[#ffffff] font-bold">Roadmap</h4>
                    </div>
                    <button className="text-sm text-[#ffffff] font-bold w-[158px] h-[44px] bg-[#AD1FEA] rounded-md ml-5">
                        <Link to="/add"> + Add Feedback</Link>
                    </button>
                </div>
                <ul className="flex  items-center">
                    <li>
                        <h4 className="text-[18px] text-[#3A4374] font-bold"> Planned (2)</h4>
                        <p className="text-[16px] text-[#647196] mb-5">Ideas prioritized for research</p>
                    </li>
                    <li className="ml-[140px]">
                        <h4 className="text-[18px] text-[#3A4374] font-bold"> In-Progress (3)</h4>
                        <p className="text-[16px] text-[#647196] mb-5">Currently being developed</p>
                    </li>
                    <li className="ml-[150px]">
                        <h4 className="text-[18px] text-[#3A4374] font-bold"> Live (1)</h4>
                        <p className="text-[16px] text-[#647196] mb-5">Released features</p>
                    </li>

                </ul>
                <div className="grid grid-cols-3 gap-4">
                    <ul className="">
                        <li className="mb-5">
                            <div>

                                <div className="bg-[#ffffff] p-5 border-t-4 border-[#F49F85] rounded-md">
                                    <div className="flex items-center">
                                        <p className="w-[8px] h-[8px] rounded-full bg-[#F49F85]"></p>
                                        <p className="text-[16px] text-[#647196] ml-3">Planned</p>
                                    </div>

                                    <h4 className="text-[18px] text-[#3A4374] font-bold">More comprehensive reports</h4>
                                    <p className="text-[16px] text-[#647196] font-normal mb-5">It would be great to see a more detailed breakdown of solutions.</p>
                                    <a className="w-[77px] p-2 px-4 text-[13px] text-[#4661E6] font-semibold bg-[#F2F4FF] rounded-lg ">
                                        Feature
                                    </a>

                                    <div className="flex justify-between items-center mt-5">
                                        <button className="w-[69px] h-[40px] text-[13px] flex   items-center bg-[#F2F4FE] text-[#3A4374] font-bold hover:bg-[#CFD7FF] rounded-lg mb-2">
                                            <img src={upperarrow} className="mx-3" alt="arrow1" />
                                            123
                                        </button>
                                        <div className="flex  items-center">
                                            <img className="" src={message} alt="msg" />
                                            <p className="text-[16px] text-[#3A4374] font-bold mx-2">2</p></div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="mb-5">
                            <div> 
                                <div className="bg-[#ffffff] p-5 border-t-4 border-[#F49F85] rounded-md">
                                    <div className="flex items-center">
                                        <p className="w-[8px] h-[8px] rounded-full bg-[#F49F85]"></p>
                                        <p className="text-[16px] text-[#647196] ml-3">Planned</p>
                                    </div>

                                    <h4 className="text-[18px] text-[#3A4374] font-bold">Learning paths</h4>
                                    <p className="text-[16px] text-[#647196] font-normal mb-5">Sequenced projects for different goals to help people improve.</p>
                                    <a className="w-[77px] p-2 px-4 text-[13px] text-[#4661E6] font-semibold bg-[#F2F4FF] rounded-lg ">
                                        Feature
                                    </a>

                                    <div className="flex justify-between items-center mt-5">
                                        <button className="w-[69px] h-[40px] text-[13px] flex   items-center bg-[#F2F4FE] text-[#3A4374] font-bold hover:bg-[#CFD7FF] rounded-lg mb-2">
                                            <img src={upperarrow} className="mx-3" alt="arrow1" />
                                            28
                                        </button>
                                        <div className="flex  items-center">
                                            <img className="" src={message} alt="msg" />
                                            <p className="text-[16px] text-[#3A4374] font-bold mx-2">2</p></div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>

                    <ul >
                        <li className="mb-5">
                            <div> 
                                <div className="bg-[#ffffff] p-5 border-t-4 border-[#AD1FEA] rounded-md">
                                    <div className="flex items-center">
                                        <p className="w-[8px] h-[8px] rounded-full bg-[#AD1FEA]"></p>
                                        <p className="text-[16px] text-[#647196] ml-3">In Progress</p>
                                    </div>

                                    <h4 className="text-[18px] text-[#3A4374] font-bold">One-click portfolio generation</h4>
                                    <p className="text-[16px] text-[#647196] font-normal mb-5">Add ability to create professional looking portfolio from profile.</p>
                                    <a className="w-[77px] p-2 px-4 text-[13px] text-[#4661E6] font-semibold bg-[#F2F4FF] rounded-lg ">
                                        Feature
                                    </a>

                                    <div className="flex justify-between items-center mt-5">
                                        <button className="w-[69px] h-[40px] text-[13px] flex   items-center bg-[#F2F4FE] text-[#3A4374] font-bold hover:bg-[#CFD7FF] rounded-lg mb-2">
                                            <img src={upperarrow} className="mx-3" alt="arrow1" />
                                            62
                                        </button>
                                        <div className="flex  items-center">
                                            <img className="" src={message} alt="msg" />
                                            <p className="text-[16px] text-[#3A4374] font-bold mx-2">1</p></div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="mb-5">
                            <div>
                                <div className="bg-[#ffffff] p-5 border-t-4 border-[#AD1FEA] rounded-md">
                                    <div className="flex items-center">
                                        <p className="w-[8px] h-[8px] rounded-full bg-[#AD1FEA]"></p>
                                        <p className="text-[16px] text-[#647196] ml-3">In Progress</p>
                                    </div>

                                    <h4 className="text-[18px] text-[#3A4374] font-bold">One-click portfolio generation</h4>
                                    <p className="text-[16px] text-[#647196] font-normal mb-5">Add ability to create professional looking portfolio from profile.</p>
                                    <a className="w-[77px] p-2 px-4 text-[13px] text-[#4661E6] font-semibold bg-[#F2F4FF] rounded-lg ">
                                        Feature
                                    </a>

                                    <div className="flex justify-between items-center mt-5">
                                        <button className="w-[69px] h-[40px] text-[13px] flex   items-center bg-[#F2F4FE] text-[#3A4374] font-bold hover:bg-[#CFD7FF] rounded-lg mb-2">
                                            <img src={upperarrow} className="mx-3" alt="arrow1" />
                                            62
                                        </button>
                                        <div className="flex  items-center">
                                            <img className="" src={message} alt="msg" />
                                            <p className="text-[16px] text-[#3A4374] font-bold mx-2">1</p></div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="mb-5">
                            <div>
                                <div className="bg-[#ffffff] p-5 border-t-4 border-[#AD1FEA] rounded-md">
                                    <div className="flex items-center">
                                        <p className="w-[8px] h-[8px] rounded-full bg-[#AD1FEA]"></p>
                                        <p className="text-[16px] text-[#647196] ml-3">In Progress</p>
                                    </div>

                                    <h4 className="text-[18px] text-[#3A4374] font-bold">One-click portfolio generation</h4>
                                    <p className="text-[16px] text-[#647196] font-normal mb-5">Add ability to create professional looking portfolio from profile.</p>
                                    <a className="w-[77px] p-2 px-4 text-[13px] text-[#4661E6] font-semibold bg-[#F2F4FF] rounded-lg ">
                                        Feature
                                    </a>

                                    <div className="flex justify-between items-center mt-5">
                                        <button className="w-[69px] h-[40px] text-[13px] flex   items-center bg-[#F2F4FE] text-[#3A4374] font-bold hover:bg-[#CFD7FF] rounded-lg mb-2">
                                            <img src={upperarrow} className="mx-3" alt="arrow1" />
                                            62
                                        </button>
                                        <div className="flex  items-center">
                                            <img className="" src={message} alt="msg" />
                                            <p className="text-[16px] text-[#3A4374] font-bold mx-2">1</p></div>
                                    </div>
                                </div>
                            </div>
                        </li>

                    </ul>

                    <ul>
                        <li className="mb-5">
                            <div>  
                                <div className="bg-[#ffffff] p-5 border-t-4 border-[#62BCFA] rounded-md">
                                    <div className="flex items-center">
                                        <p className="w-[8px] h-[8px] rounded-full bg-[#62BCFA]"></p>
                                        <p className="text-[16px] text-[#647196] ml-3">Live</p>
                                    </div>

                                    <h4 className="text-[18px] text-[#3A4374] font-bold">Add micro-interactions</h4>
                                    <p className="text-[16px] text-[#647196] font-normal mb-5">Small animations at specific points can add delight.</p>
                                    <a className="w-[77px] p-2 px-4 text-[13px] text-[#4661E6] font-semibold bg-[#F2F4FF] rounded-lg ">
                                        Enhancement
                                    </a>

                                    <div className="flex justify-between items-center mt-5">
                                        <button className="w-[69px] h-[40px] text-[13px] flex   items-center bg-[#F2F4FE] text-[#3A4374] font-bold hover:bg-[#CFD7FF] rounded-lg mb-2">
                                            <img src={upperarrow} className="mx-3" alt="arrow1" />
                                            71
                                        </button>
                                        <div className="flex  items-center">
                                            <img className="" src={message} alt="msg" />
                                            <p className="text-[16px] text-[#3A4374] font-bold mx-2">2</p></div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Roadmap;