const PateintModal = ({ patientData, patietnDisease, pateintBlood }) => {
  console.log(
    "🚀 ~ file: PateintModal.jsx:2 ~ PateintModal ~ patientData:",
    patientData
  );
  const { name, image, age, address, phone } = patientData || {};
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div>
            <h1 className="text-xl font-sans font-bold">Patient Details</h1>
            <hr className="w-full mt-2" />
            <div className="flex gap-6 my-5 items-center text-gray-700">
              <img src={image} alt="" className="w-3/12 rounded-md" />
              <div>
                <h1 className="text-2xl font-semibold">{name}</h1>

                <p>
                  Adress : <span>{address}</span>
                </p>
                <p>
                  Phone : <span>{phone}</span>
                </p>
                <p>
                  Age : <span>{age}</span>
                </p>
                <p>
                  Blood : <span>{pateintBlood}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="my-5">
            <h4 className="text-xl font-bold">Disease</h4>
            <hr className="mb-5" />
            <p>{patietnDisease}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PateintModal;
