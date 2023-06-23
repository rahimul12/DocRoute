const ServiceItem = ({service}) => {
   const {image,name}= service

    return (
       <div className="flex-col flex justify-center items-center">
         <div className="w-40 h-40 shadow-md   shadow-gray-400 rounded-full flex-col flex justify-center items-center">
           <img src={image} alt="" />           
        </div>
        <p className="my-5 text-lg font-semibold text-gray-900">{name}</p>
       </div>
    );
};

export default ServiceItem;