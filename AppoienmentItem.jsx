import { MdRemoveRedEye } from "react-icons/md";
import { useGetUserDataQuery } from "../../fetures/usersApi/usersApi";
import PateintModal from "./PateintModal";

const AppoienmentItem = ({ patient }) => {
  const {
    patientName,
    consultationTime,
    consultationDate,
    patientImage,
    patientAdress,
    patientEmail,
    pateintBlood,
    patietnDisease,
  } = patient || {};

  const { data: patientData } = useGetUserDataQuery(patientEmail);

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={patientImage} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{patientName}</div>
            <div className="text-sm opacity-50">{patientAdress}</div>
          </div>
        </div>
      </td>
      <td className="text-center">
        {consultationDate.slice(0, 10)}
        <br />
        <span className="badge badge-ghost badge-sm">{consultationTime}</span>
      </td>
      <td>New Patient</td>
      <td>$150</td>
      <td className="flex gap-3  items-center mt-2">
        <label
          htmlFor="my-modal-3"
          className="px-3  bg-blue-200  text-blue-500 rounded-xl flex gap-1 items-center"
        >
          {" "}
          <MdRemoveRedEye />
          Show Details
        </label>
        <PateintModal
          patientData={patientData}
          pateintBlood={pateintBlood}
          patietnDisease={patietnDisease}
        />
        {/* <label htmlFor="my-modal-3" className="btn">open modal</label> */}
        {/* <button
          onClick={handleDone}
          className="px-3 bg-green-200 text-green-500 rounded-xl flex gap-1 items-center"
        >
          <RxCheck /> Done
        </button>
        <button className="px-3 bg-red-300 text-red-500 rounded-xl flex gap-1 items-center">
          <RxCross2 /> Cancel
        </button> */}
      </td>
    </tr>
  );
};

export default AppoienmentItem;
