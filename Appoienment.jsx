import { Link } from "react-router-dom";
import doctorBg from "../../assets/appointment.png";
import doctor from "../../assets/doctor.png";

const Appoienment = () => {
  return (
    <section
      className="mt-32"
      style={{
        background: `url(${doctorBg})`,
      }}
    >
      <div className="hero h-auto p-0 md:p-4 lg:p-0">
        <div className="hero-content flex-col lg:flex-row md:p-0 self-end">
          <img
            src={doctor}
            alt="doctor"
            className="-mt-32 hidden md:block lg:w-1/2 rounded-lg"
          />
          <div className="text-center lg:text-left">
            <h4 className="text-lg text-white font-bold">Appointment</h4>
            <h1 className=" text-white text-2xl md:text-3xl lg:text-4xl font-bold">
              Make an appointment Today
            </h1>
            <p className="text-white py-6">
              At DocRoute, we are committed to revolutionizing the healthcare
              experience by offering a convenient and user-friendly platform for
              online doctor appointment booking, connecting patients with
              qualified medical professionals." "With a strong emphasis on
              efficiency, accessibility, and quality of care, we strive to
              enhance the patient-doctor relationship, making healthcare more
              accessible, convenient, and tailored to individual preferences.
            </p>
            <Link to="/doctors">
              <button className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-rose-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
                Appointment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appoienment;
