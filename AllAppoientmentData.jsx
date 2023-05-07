import pateintAvatar from "../../assets/doctor/patient.jpg"
import { AiOutlineClockCircle, } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { MdRemoveRedEye } from "react-icons/md";
import { RxCheck, RxCross2 } from "react-icons/rx";
import { SlEnvolope, SlCallEnd } from "react-icons/sl";

const AllAppoientmentData = () => {
    return (
        <div className="block lg:flex border rounded-lg  items-center">
            <div className="w-full lg:w-7/12 p-4  block lg:flex gap-2 items-center">
                <img src={pateintAvatar} className="w-36  h-36 mx-auto lg:mx-0" alt="" />
                <div className="my-3 lg:my-0 flex flex-col  gap-1">
                    <h5 className="text-lg font-bold text-center lg:text-start  text-gray-700">Richard Wilson</h5>
                    <p className="text-xs my-1 flex justify-center lg:justify-start items-center gap-1 text-gray-500 font-semibold"><AiOutlineClockCircle className="text-lg" /> 14 Nov 2019, 10.00 AM</p>
                    <p className="text-xs my-1 flex justify-center lg:justify-start items-center gap-1 text-gray-500 font-semibold"><CiLocationOn className="text-lg" />  Newyork, United States</p>
                    <p className="text-xs my-1 flex justify-center lg:justify-start items-center gap-1 text-gray-500 font-semibold"><SlEnvolope className="text-lg" />richard@example.com</p>
                    <p className="text-xs my-1 flex justify-center lg:justify-start items-center gap-1 text-gray-500 font-semibold"><SlCallEnd className="text-lg" />+1 923 782 4575</p>
                </div>
            </div>
            <div className="w-full lg:w-5/12 gap-3 p-4 flex items-center">
                <button className="px-3  bg-blue-200 text-blue-500 rounded-xl flex gap-1 items-center"> <MdRemoveRedEye />Show Details</button>
                <button className="px-3 bg-green-200 text-green-500 rounded-xl flex gap-1 items-center"><RxCheck /> Done</button>
                <button className="px-3 bg-red-300 text-red-500 rounded-xl flex gap-1 items-center"><RxCross2 /> Cancel</button>
            </div>

        </div>
    );
};

export default AllAppoientmentData;