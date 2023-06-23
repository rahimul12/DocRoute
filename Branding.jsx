import doctorLogo from "../../assets/docIcon.png"
import consultentLogo from "../../assets/consultente.png"

const Branding = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center w-10/12 mx-auto gap-4 lg:gap-8 m-10">
            {/* card-1 */}
            <div className="lg:flex items-center shadow-md gap-4 shadow-gray-500 mx-3 my-3 bg-[#fbfbfb] p-4 rounded-lg m-h-36 space-y-4">
                <div>
                    <img src={doctorLogo} alt="doctor" className="mx-auto lg:m-0 w-36 h-full object-cover" />
                </div>
                <div className="text-center lg:text-left">
                    <h3 className="text-base md:text-md lg:text-xl font-bold mt-2">We have Qualified Doctors</h3>
                    <p className="text-gray-800 my-2 text-sm md:text-base">Now were up in the big leagues getting’ our turn at bat. And when the odds are against him and their.</p>
                </div>
            </div>
            {/* card-2 */}
            <div className="lg:flex items-center shadow-md gap-4 shadow-gray-500 mx-3 my-3 bg-[#fbfbfb] p-4 rounded-lg m-h-36 space-y-4">
                <dir className="p-0">
                    <img src={consultentLogo} alt="consulting" className="mx-auto lg:m-0 w-36 h-full object-cover" />
                </dir>
                <div className="text-center lg:text-left">
                    <h3 className="text-base md:text-md lg:text-xl font-bold mt-2">Professional Medical Consultation</h3>
                    <p className="text-gray-800 my-2 text-sm md:text-base">Now were up in the big leagues getting’ our turn at bat. And when the odds are against him and their.</p>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Branding;