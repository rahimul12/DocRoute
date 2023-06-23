import CountUp from "react-countup";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { useGetDoctorsQuery } from "../../../fetures/doctorsApi/doctorsApi";

const Cards = () => {
  const { data: doctors } = useGetDoctorsQuery();
  return (
    <div className="my-6 border rounded-lg p-5 flex gap-4 items-center ">
      <div className="bg-cyan-300 p-5 text-white text-5xl rounded-lg">
        <AiOutlineUsergroupAdd className="mx-auto" />
      </div>
      <div>
        <p className="text-lg text-gray-700 font-semibold">Total Doctors</p>
        <h4 className="text-3xl text-gray-900 font-semibold">
          <CountUp end={doctors?.length} duration={2} />
        </h4>
      </div>
      x
    </div>
  );
};

export default Cards;
