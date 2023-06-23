import AppoienmentsCard from "./AppoienmentsCard";
import DoctorsCard from "./Cards";
import PatientsCard from "./PatientsCard";

const AdminDashboardData = () => {
  return (
    <div>
      <p className="text-xl text-gray-700 font-semibold">Overview</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <DoctorsCard />
        <PatientsCard />
        <AppoienmentsCard />
      </div>
    </div>
  );
};

export default AdminDashboardData;
