import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAddCounsultaionMutation } from "../../fetures/consultaionApi/consultationApi";
import BookingSummary from "./BookingSummary";

const CheckoutModal = ({ doctor, selected, slot }) => {
  const { user } = useSelector((state) => state?.userData);
  const [addCounsultaion, { data, isSuccess }] = useAddCounsultaionMutation();
  const { name, email, address, phone, image } = user || {};
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (data?.acknowledged === true && isSuccess === true) {
      toast.success("Booking Done");
      navigate("/");
    }
  }, [navigate, data, isSuccess]);

  const submitForm = (data) => {
    const patientName = name;
    const patientEmail = email;
    const patientAdress = address;
    const patientPhone = phone || null;
    const patientImage = image;
    const doctorEmail = doctor?.email;
    const consultationDate = selected;
    const consultationTime = slot;
    const pateintBlood = data.blood;
    const patietnDisease = data.disease;

    const consultaionData = {
      patientName,
      doctorEmail,
      patientAdress,
      patientEmail,
      patientPhone,
      patientImage,
      consultationDate,
      pateintBlood,
      patietnDisease,
      consultationTime,
      consultationStatus: "pending",
    };

    addCounsultaion(consultaionData);
  };

  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="checkoutModal" className="modal-toggle" />
      <div className="modal w-full">
        <div className="modal-box w-11/12 max-w-7xl relative p-10">
          <label
            htmlFor="checkoutModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="lg:flex gap-10">
            <div className="border rounded-lg p-5 lg:w-7/12">
              <h1 className="text-xl font-sans font-bold">
                Personal Information
              </h1>
              <hr className="w-full mt-2" />
              <form onSubmit={handleSubmit(submitForm)}>
                <div className="grid grid-cols-1 mt-8 lg:grid-cols-2 items-center gap-2">
                  <div className="w-full ">
                    <label>Name</label>
                    <input
                      type="text"
                      className="w-full border mt-2 border-gray-600 p-2 rounded-md"
                      value={name}
                      disabled
                    />
                  </div>
                  <div className="w-full ">
                    <label>Email</label>
                    <input
                      type="text"
                      className="w-full border mt-2 border-gray-600 p-2 rounded-md"
                      value={email}
                      disabled
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1  lg:grid-cols-2 items-center gap-2">
                  <div className="w-full mt-8 ">
                    <label>Adress</label>
                    <input
                      type="text"
                      className="w-full border mt-2 border-gray-600 p-2 rounded-md"
                      value={address}
                      disabled
                    />
                  </div>
                  <div className="w-full mt-8 ">
                    <label>Blood Group</label>
                    <select
                      className="select border border-gray-600 input w-full mt-4"
                      {...register("blood", {})}
                    >
                      <option value="" hidden>
                        Select Blood{" "}
                      </option>
                      <option value="A+">A+</option>
                      <option value="O+">O+</option>
                      <option value="B+">B+</option>
                      <option value="AB+">AB+</option>
                      <option value="A-">A-</option>
                      <option value="B-">B-</option>
                      <option value="O-">O-</option>
                      <option value="AB-">AB-</option>
                    </select>
                  </div>
                </div>
                <div className="">
                  <textarea
                    className="w-full border h-72 mt-5 border-gray-600 p-2 rounded-md"
                    placeholder="Describe Your Disease"
                    {...register("disease", {})}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full mt-8 py-2 text-white rounded-md bg-blue-500 hover:bg-blue-400 duration-300"
                  >
                    Confirm Booking
                  </button>
                </div>
              </form>
            </div>
            <div className="border rounded-lg p-5 lg:w-5/12">
              <BookingSummary doctor={doctor} selected={selected} slot={slot} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
