import ServiceItem from "./ServiceItem";
import nurology from "../../assets/services/neurology.png"
import dentist from "../../assets/services/dentist.png"
import cardiologist from "../../assets/services/cardiologist.png"
import urology from "../../assets/services/urology.png"
import orthopedic from "../../assets/services/orthopedic.png"

const itemsArr = [
    {
        id: 1,
        name: "Neorology",
        image: nurology
    },
    {
        id: 2,
        name: "Dentist",
        image: dentist
    },
    {
        id: 3,
        name: "Cardiologist",
        image: cardiologist
    },
    {
        id: 4,
        name: "Urology",
        image: urology
    },
    {
        id: 5,
        name: "Orthopedic",
        image: orthopedic
    },
]

const Service = () => {
    return (
        <div className="w-full lg:w-8/12 mx-auto  my-10 py-14 text-center px-2">
            <h1 className="text-2xl lg:text-5xl text-gray-700">Our Specialities Services</h1>
            <p className="text-sm lg:text-lg text-gray-700  lg:w-8/12 mx-auto my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            {/* service items */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 my-10">
                {
                    itemsArr?.map(service=><ServiceItem key={service.id} service={service}/>)
                }
            </div>
        </div>
    );
};

export default Service;