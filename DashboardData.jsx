import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetPatientsByEmailQuery } from "../../fetures/consultaionApi/consultationApi";
import Error from "../../ui/Error";
import NoData from "../../ui/NoData";
import Loading from "../../utils/Loading";
import AppoienmentItem from "./AppoienmentItem";

const DashboardData = () => {
  const [docEmail, setDocEmail] = useState(null);
  const [skip, setSkip] = useState(true);
  const { user } = useSelector((state) => state.userData);
  const {
    data: patients,
    isLoading,
    isError,
  } = useGetPatientsByEmailQuery(docEmail, { skip });

  useEffect(() => {
    if (user?.email) {
      setDocEmail(user?.email);
      setSkip(false);
    }
  }, [user]);

  let content = null;
  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <Error />;
  }
  if (!isLoading && !isError && !patients?.length > 0) {
    content = <NoData />;
  }
  if (!isLoading && !isError && patients?.length > 0) {
    content = patients?.map((patient) => (
      <AppoienmentItem patient={patient} key={patient?._id} />
    ));
  }

  return (
    <div>
      <p className="text-lg text-gray-700 font-semibold">
        {"Patient Appoinment"}
      </p>
      <div className="my-3">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Pateint Name</th>
                <th>Appt Date</th>
                <th>Type</th>
                <th>Paid Amount </th>
                <th></th>
              </tr>
            </thead>
            <tbody>{content}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardData;
