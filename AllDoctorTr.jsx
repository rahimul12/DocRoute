import { RxCheck, RxCross2 } from "react-icons/rx";
import { useDeleteDoctorMutation } from "../../../fetures/doctorsApi/doctorsApi";

const AllDoctorTr = ({ doctor }) => {
  const { _id, name, email, image, address, specialist } = doctor || {};
  const [deleteDoctor] = useDeleteDoctorMutation();

  // delte handler
  const handleDelete = () => {
    const confirmBox = confirm(
      `Do you want to delete  ${name.toUpperCase()}  from our system?`
    );
    if (confirmBox) {
      deleteDoctor(_id);
    }
  };
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{address}</div>
          </div>
        </div>
      </td>
      <td>12 Apr 2023</td>
      <td>{email}</td>
      <td>{specialist}</td>
      <td className="flex gap-3  items-center mt-2">
        <button className="px-3 bg-green-200 text-green-500 rounded-xl flex gap-1 items-center">
          <RxCheck /> Make an Admin
        </button>
        <button
          onClick={handleDelete}
          className="px-3 bg-red-300 text-red-500 rounded-xl flex gap-1 items-center"
        >
          <RxCross2 /> Remove Doctor
        </button>
      </td>
    </tr>
  );
};

export default AllDoctorTr;
