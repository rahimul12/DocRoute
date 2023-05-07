const Header = () => {
    return (
        <div className="h-[550px] py-16  banner-sec">
            <div className="my-10 text-center w-full lg:w-8/12 mx-auto px-4">
                <h1 className="text-2xl lg:text-5xl  font-bold">Search Doctor, Make an Appointment</h1>
                <h4 className="text-lg lg:text-2xl my-5 ">Discover the best doctors, clinic & hospital the city nearest to you.</h4>
                <div className='border w-8/12 mx-auto border-gray-400 rounded flex justify-end items-center h-10'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <input type="text" className='w-full input-border-remove' placeholder='Search' />
                </div>
                <p className="text-gray-400 w-8/12 my-2 mx-auto text-start">Ex : Dental or Sugar Check up etc</p>
            </div>
        </div>
    );
};

export default Header;