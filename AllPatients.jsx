import { useGetAllPatinetsQuery } from "../../../fetures/pateintApi/pateintApi";
import Error from "../../../ui/Error";
import NoData from "../../../ui/NoData";
import Loading from "../../../utils/Loading";
import PatientsItem from "./PatientsItem";

const AllPatients = () => {
  const { data: allPatients, isError, isLoading } = useGetAllPatinetsQuery();
  let content = null;
  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <Error />;
  }
  if (!isLoading && !isError && !allPatients?.length > 0) {
    content = <NoData />;
  }
  if (!isLoading && !isError && allPatients?.length > 0) {
    content = allPatients?.map((patient, index) => (
      <PatientsItem patient={patient} key={index} />
    ));
  }
  return (
    <div>
      <p className="text-lg text-gray-700 font-semibold">All Patient</p>
      <div className="my-3">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Doctor Name</th>
                <th>Phone Number</th>
                <th>Email </th>
                <th>Member Since</th>
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

export default AllPatients;
