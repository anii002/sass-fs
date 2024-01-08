/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import admin from "../images/Group 16.svg";


function EmptySuggestion() {
   
    return (
        <>
            <div class="flex flex-col items-center text-center bg-[#ffffff] rounded-md py-[150px]">
                <img src={admin} alt="admin" className="mb-10" />
                <h4 className="text-[24px] text-[#3A4374] font-bold mb-4">
                    There is no feedback yet.
                </h4>
                <p className="w-[410px] text-[16px] text-[#647196] mb-5">Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
                <button class="text-sm text-[#ffffff] font-bold w-[158px] h-[44px] bg-[#AD1FEA] hover:bg-[#C75AF6] rounded-md">
                    <Link to="/add">+ Add Feedback</Link> 
                </button>
            </div>

        </>
    )
}


export default EmptySuggestion;