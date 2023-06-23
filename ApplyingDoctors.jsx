import { useGetApplyingDoctorQuery } from "../../../fetures/doctorsApi/doctorsApi";
import Error from "../../../ui/Error";
import NoData from "../../../ui/NoData";
import Loading from "../../../utils/Loading";
import ApplyingDoctorItem from "./ApplyingDoctorItem";

const ApplyingDoctors = () => {
  const {
    data: applyingDoctors,
    isLoading,
    isError,
  } = useGetApplyingDoctorQuery();

  let content = null;
  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <Error />;
  }
  if (!isLoading && !isError && !applyingDoctors?.length > 0) {
    content = <NoData />;
  }
  if (!isLoading && !isError && applyingDoctors?.length > 0) {
    content = applyingDoctors?.map((doctor, index) => (
      <ApplyingDoctorItem doctor={doctor} key={index} />
    ));
  }

  return (
    <div>
      <p className="text-lg text-gray-700 font-semibold">Applying Doctors</p>
      <div className="my-3">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Doctor Name</th>
                <th>Phone Number</th>
                <th>Email </th>
                <th>Specialist</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {content}
            </tbody>
          </table>
        </div>
      </div>
      {/* <PateintModal/> */}
    </div>
  );
};

export default ApplyingDoctors;
