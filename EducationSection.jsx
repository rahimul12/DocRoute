
const EducationSection = () => {
    return (
        <div className="flex  ">
            <div className="col-start-5 col-end-6  relative ">
                <div className="h-full w-4 flex items-center justify-center">
                    <div className="h-full w-[2px] bg-gray-400 pointer-events-none"></div>
                </div>
                <div
                    className="w-4 h-4 absolute top-1/2 -mt-3 rounded-full bg-blue-200  border-2 border-blue-500"
                ></div>
            </div>
            <div
                className="col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto text-gray-500 "
            >
                <h3 className="font-semibold text-md mb-1">American Dental Medical University</h3>
                <p className="leading-tight text-justify">
                BDS
                </p>
                <p className="leading-tight text-justify">
                 2016-2020
                </p>
            </div>
        </div>
    );
};

export default EducationSection;