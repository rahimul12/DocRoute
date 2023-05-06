import { Link, useNavigate } from "react-router-dom";
import loginBanner from "../assets/login-banner.png"
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserAuth } from "../context/authProvider";
import { toast } from "react-hot-toast";

const Login = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const navigate = useNavigate();
    const { loging} = useContext(UserAuth)

   const submitForm = (data)=>{
    const email = data.email;
    const password = data.password;
    loging(email,password)
    .then(res=>{
        res.user;       
        navigate("/");
        
    }).catch(err=>toast.error(err.message.slice(22,-2)))
   }
    
    return (
        <div className="block lg:flex items-center mx-10 ">
            <img src={loginBanner} alt="" className="w-2/4 hidden lg:block" />
            <div className="border border-gray-300 p-10 block lg:w-2/4 lg:mx-10 mt-5 rounded-md">
                <p>Login Doc Route</p>
                <form onSubmit={handleSubmit(submitForm)} >
                    <input type="email" name="email" className="w-full border my-5 border-gray-600 p-2 rounded-md" placeholder="Enter Email" id=""  {...register("email", {
                        required: "This is requerd fild"
                    })}  />
                    {errors.email && <p className='text-sm mt-2 text-red-700'>{errors.email.message}</p>}
                    <input type="password" name="password" className="w-full border border-gray-600 p-2 rounded-md" placeholder="Enter Email" id=""  {...register("password", {
                        required: "This is requerd fild"
                    })}  />
                    <button type="submit" className="w-full my-5 py-2 text-white rounded-md bg-green-400">Login</button>

                </form>
                <div className="divider">OR</div>
                <div className="flex justify-center text-white gap-5">
                    <button className="bg-blue-500 py-2 w-1/2 rounded-md">facebook </button>
                    <button className="bg-red-500 py-2 w-1/2 rounded-md ">Google </button>
                   
                </div>
                <p className="mt-10 text-center">Don’t have an account?<Link to="/register"><span className="text-blue-600 cursor-pointer">Register</span></Link></p>
            </div>
        </div>
    );
};

export default Login;