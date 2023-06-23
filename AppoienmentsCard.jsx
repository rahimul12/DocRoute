// import CountUp from "react-countup/build/CountUp";
import CountUp from "react-countup";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { useGetAllCounsultaionsQuery } from "../../../fetures/consultaionApi/consultationApi";

const AppoienmentsCard = () => {
  const { data: allConsultations } = useGetAllCounsultaionsQuery();

  return (
    <div className="my-6 border rounded-lg p-5 flex gap-4 items-center ">
      <div className="bg-yellow-300 p-5 text-white text-5xl rounded-lg">
        <BsFillCalendarCheckFill className="mx-auto" />
      </div>
      <div>
        <p className="text-lg text-gray-700 font-semibold">
          Total Appoienments
        </p>
        <h4 className="text-3xl text-gray-900 font-semibold">
          <CountUp end={allConsultations?.length} duration={2} />
        </h4>
      </div>
    </div>
  );
};

export default AppoienmentsCard;
