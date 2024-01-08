/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import arrow from "../images/Path 3.svg";
import upperarrow from "../images/Path upper 2.svg";
import message from "../images/Path.svg";
import admin from "../images/admin.svg";


function FeedbackDetail() {
    return (
        <>
            <div className="mr-[290px] ml-[365px] py-10">
                <div className="flex justify-between items-center mb-8">
                    <button className="w-[158px] h-[44px]  rounded-md text-[#647196] font-bold  flex  items-center "> <img className="mr-4 " src={arrow} alt="arrow" /> <Link to="/suggestion">Go Back </Link>  </button>
                    <button className="w-[142px] h-[44px] bg-[#4661E6] rounded-md text-[#ffffff] text-[14px] font-bold"> <Link to="edit/:id"> Edit Feedback </Link> </button>
                </div>
                <div className="bg-[#ffffff] flex justify-between items-center p-10 rounded-md mb-10 ">
                    <div className="flex">
                        <button className="w-[40px] h-[53px] text-[13px] table-column bg-[#F2F4FE] text-[#3A4374] font-bold hover:bg-[#CFD7FF] rounded-lg mb-2">
                            <img className="mx-auto" src={upperarrow} alt="arrow1" />
                            99
                        </button>
                        <div className="ml-8">
                            <h4 className="text-[18px] font-bold text-[#3A4374]">
                                Add tags for solutions
                            </h4>
                            <p className="text-[16px] font-medium text-[#647196] mb-3">Easier to search for solutions based on a specific stack.</p>
                            <a className="w-[111px]   p-2 text-[13px] text-[#4661E6] font-semibold bg-[#F2F4FF] rounded-md">Enhancement</a>
                        </div>
                    </div>

                    <li className="flex ml-10">
                        <img className="" src={message} alt="msg" />
                        <p className="text-[16px] text-[#3A4374] font-bold mx-2">5</p>
                    </li>
                </div>

                <div className="bg-[#ffffff] px-10 py-5 rounded-md">
                    <h4 className="text-[18px] text-[#3A4374] font-bold mb-5">4 Comments</h4>
                    <ul>
                        <li className="border-[#8C92B3] border-b-2 py-4 mb-2">
                            <div className="flex justify-between items-center mb-4  ">
                                <div className="flex">
                                    <img src={admin} alt="admin" />
                                    <div className="ml-10">
                                        <h4 className="text-[#3A4374] text-[14px] font-bold">Elijah Moss</h4>
                                        <p className="text-[#647196] text-sm font-normal">@hexagon.bestagon</p>
                                    </div>
                                </div>

                                <div >
                                    <h4 className="text-[13px] text-[#4661E6] font-semibold ">Reply</h4>
                                </div>
                            </div>
                            <p className="ml-20 text-[15px] font-normal text-[#647196]">Also, please allow styles to be applied based on system preferences. I would love to be able to browse Eqaim in the evening after my device’s dark mode turns on without the bright background it currently has.</p>
                        </li>
                        <li className="border-[#8C92B3] border-b-2 py-4">
                            <div className="flex justify-between items-center mb-4  ">
                                <div className="flex">
                                    <img src={admin} alt="admin" />
                                    <div className="ml-10">
                                        <h4 className="text-[#3A4374] text-[14px] font-bold">Elijah Moss</h4>
                                        <p className="text-[#647196] text-sm font-normal">@hexagon.bestagon</p>
                                    </div>
                                </div>

                                <div >
                                    <h4 className="text-[13px] text-[#4661E6] font-semibold ">Reply</h4>
                                </div>
                            </div>
                            <p className="ml-20 text-[15px] font-normal text-[#647196]">Also, please allow styles to be applied based on system preferences. I would love to be able to browse Eqaim in the evening after my device’s dark mode turns on without the bright background it currently has.</p>
                            <div>
                                <ul>
                                    <li className="py-4 mb-2 pl-10">
                                        <div className="flex justify-between items-center mb-4  ">
                                            <div className="flex">
                                                <img src={admin} alt="admin" />
                                                <div className="ml-10">
                                                    <h4 className="text-[#3A4374] text-[14px] font-bold">Elijah Moss</h4>
                                                    <p className="text-[#647196] text-sm font-normal">@hexagon.bestagon</p>
                                                </div>
                                            </div>

                                            <div >
                                                <h4 className="text-[13px] text-[#4661E6] font-semibold ">Reply</h4>
                                            </div>
                                        </div>
                                        <p className="ml-20 text-[15px] font-normal text-[#647196]"> <span className="text-[#AD1FEA] font-bold text-[15px] mr-2"> @hummingbird1 </span> While waiting for dark mode, there are browser extensions that will also do the job. Search for "dark theme” followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.</p>
                                    </li>
                                    <li className="py-4 mb-2 pl-10">
                                        <div className="flex justify-between items-center mb-4  ">
                                            <div className="flex">
                                                <img src={admin} alt="admin" />
                                                <div className="ml-10">
                                                    <h4 className="text-[#3A4374] text-[14px] font-bold">Elijah Moss</h4>
                                                    <p className="text-[#647196] text-sm font-normal">@hexagon.bestagon</p>
                                                </div>
                                            </div>

                                            <div >
                                                <h4 className="text-[13px] text-[#4661E6] font-semibold ">Reply</h4>
                                            </div>
                                        </div>
                                        <p className="ml-20 text-[15px] font-normal text-[#647196]"> <span className="text-[#AD1FEA] font-bold text-[15px] mr-2"> @hummingbird1 </span> While waiting for dark mode, there are browser extensions that will also do the job. Search for "dark theme” followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>

                </div>

                <div className="bg-[#ffffff] px-10 py-5 rounded-md">
                    <h4 className="text-[18px] text-[#3A4374] font-bold mb-5">Add Comment</h4>
                    <textarea placeholder="Type your comment here" className="p-4 w-[615px] h-[80px] bg-[#F7F8FD] rounded-md text-[#8C92B3] text-[15px]"></textarea>
                
                    <div className="flex justify-between items-center mt-4">
                        <p className="text-[15px] text-[#647196] font-normal">250 Characters left</p>
                        <button className="w-[142px] h-[44px] rounded-lg bg-[#AD1FEA] text-[#F2F4FE] font-bold text-[14px]">Post Comment</button>
                </div>
                </div>
            </div>
        </>
    )
}
export default FeedbackDetail;