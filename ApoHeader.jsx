import { DayPicker } from "react-day-picker";
import { AiFillStar } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import serviceImg from "../../assets/services/dentist.png";

const ApoHeader = ({ selected, setSelected, doctor }) => {
  const { name, image, certificate, adress, specialist } = doctor || {};

  return (
    <header className="mx-5 my-5">
      <div className="w-full block lg:flex flex-reow items-center gap-5 mb-5 p-6 border border-gray-300  rounded-md justify-between">
        <div className="block lg:flex  gap-5">
          <img
            src={image}
            className="w-[270px] h-[270px] object-cover rounded-md"
            alt="doctor"
          />
          <div>
            <h4 className="text-2xl font-semibold text-blue-500">{name}</h4>
            <p className="text-gray-400 my-1">{certificate}</p>
            <div className="my-3 flex gap-1 items-center">
              <img src={serviceImg} className="w-4 h-4" alt="" />
              <span className="text-gray-700 text-lg font-semibold">
                {specialist}
              </span>
            </div>
            <div className="text-yellow-400 items-center text-xl flex">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <p className="text-gray-700">(23)</p>
            </div>

            <div className="flex items-center text-gray-400">
              <IoLocationSharp />
              <p className="">{adress}</p>
            </div>
          </div>
        </div>
        <div className="shadow-lg p-8 rounded-md">
          <DayPicker mode="single" selected={selected} onSelect={setSelected} />
        </div>
      </div>
    </header>
  );
};

export default ApoHeader;
