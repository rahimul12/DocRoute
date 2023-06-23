import { format } from "date-fns";
import { ImLocation } from "react-icons/im";

const BookingSummary = ({ doctor, selected, slot }) => {
  const { name, adress, specialist, image } = doctor || {};

  return (
    <div>
      <h1 className="text-xl font-sans font-bold">Booking Summary</h1>
      <hr className="w-full mt-2" />
      <div className="flex gap-6 my-5 items-center text-gray-700">
        <img src={image} alt="" className="w-3/12 rounded-md" />
        <div>
          <h1 className="text-2xl font-semibold">{name}</h1>
          <div className="my-2 flex items-center gap-1">
            <ImLocation className="text-xl" />
            <p>{adress}</p>
          </div>
          <h4 className="font-semibold">{specialist}</h4>
        </div>
      </div>
      <div className="flex justify-between font-sans font-semibold mx-5 text-lg">
        <p>Date :</p>
        <p> {format(selected, "PP")}</p>
      </div>
      <div className="flex justify-between font-sans font-semibold mx-5 mt-3 text-lg">
        <p>Time :</p>
        <p>{slot}</p>
      </div>
      <div className="flex justify-between font-sans font-semibold mx-5 text-lg my-3">
        <p>Consulting Fee :</p>
        <p>৳ 1000</p>
      </div>
      <hr className="my-3" />

      <div className="flex justify-between font-sans font-semibold mx-5 text-lg my-3">
        <h1 className="text-lg font-sans font-bold">Total:</h1>
        <p>৳ 1000</p>
      </div>
    </div>
  );
};

export default BookingSummary;
