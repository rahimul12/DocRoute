import { format } from "date-fns";
import { useEffect, useState } from "react";
import CheckoutModal from "./CheckoutModal";
const ApoSlots = ({ selected, doctor }) => {
  const [slotsData, setSlotsData] = useState(null);
  const [slot, setSlot] = useState(null);

  useEffect(() => {
    fetch("/availableSlots.json")
      .then((res) => res.json())
      .then((data) => setSlotsData(data));
  }, []);

  return (
    <div className="mx-5 my-5 border border-gray-300  rounded-md p-6 ">
      <div className="flex justify-between items-centerw-full  lg:flex flex-reow items-center gap-5 mb-5 ">
        <h5 className="text-lg font-bold my-3 text-center lg:text-start  text-gray-700">
          Available Slots :{" "}
          <span className="text-blue-500">{slotsData?.slots?.length}</span>
        </h5>
        <h5 className="text-lg font-bold my-3 text-center lg:text-start  text-gray-700">
          {format(selected, "PP")}
        </h5>
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-3">
        {slotsData?.slots?.map((slot, indx) => (
          <button
            onClick={() => setSlot(slot)}
            className={`$ bg-gray-200 hover:bg-blue-500 px-5 py-1 rounded-md hover:text-white duration-200  active:bg-blue-500  focus:outline-none focus:ring focus:ring-blue-500`}
            key={indx}
          >
            {slot}
          </button>
        ))}
      </div>

      <label
        htmlFor="checkoutModal"
        className="block text-center text-white bg-blue-500 px-6 py-2 rounded-md  my-5 w-full hover:bg-blue-700 duration-150 disabled"
      >
        Book Now
      </label>
      <CheckoutModal selected={selected} slot={slot} doctor={doctor} />
    </div>
  );
};

export default ApoSlots;
