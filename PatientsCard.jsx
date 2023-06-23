import CountUp from "react-countup";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { useGetAllPatinetsQuery } from "../../../fetures/pateintApi/pateintApi";

const PatientsCard = () => {
  const { data: allPatietns } = useGetAllPatinetsQuery();
  return (
    <div className="my-6 border rounded-lg p-5 flex gap-4 items-center ">
      <div className="bg-blue-900 p-5 text-white text-5xl rounded-lg">
        <AiOutlineUsergroupDelete className="mx-auto" />
      </div>
      <div>
        <p className="text-lg text-gray-700 font-semibold">Totaol Patients</p>
        <h4 className="text-3xl text-gray-900 font-semibold">
          <CountUp end={allPatietns?.length} duration={2} />
        </h4>
      </div>
    </div>
  );
};

export default PatientsCard;
