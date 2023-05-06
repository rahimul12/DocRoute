import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import loginBanner from "../assets/login-banner.png"
import { UserAuth } from "../context/authProvider";
import { useForm } from 'react-hook-form';
import { useAddPateintMutation } from '../fetures/pateintApi/pateintApi';
import { toast } from 'react-hot-toast';



const Register = () => {

    const [loading, setLoading] = useState(false)
    const [addPateint, { isSuccess }] = useAddPateintMutation()
    const { createUserAccount, updateName,goolgeLogin } = useContext(UserAuth)
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const navigate = useNavigate();

    useEffect(() => {

        if (isSuccess === true) {
            setLoading(false)
            reset()
            navigate('/')
        }
    }, [isSuccess, reset,navigate])

    // handle submit from
    const submitForm = (data) => {
        setLoading(true)
        const name = data.name
        const email = data.email
        const password = data.password
        const gender = data.gender
        const address = data.adress
        const phone = data.number
        const age = data.age



        //  host image in server
        const formData = new FormData();
        formData.append('image', data.photo[0]);
        fetch('https://api.imgbb.com/1/upload?key=2fbe1796a4bf3cd52ba5028ba7992a29', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                const image = result.data.display_url
                if (result.success) {
                    createUserAccount(email, password)
                        .then(res => {
                             res.user
                            updateName(name, image)
                                .then(() => {
                                    const currentUser = {
                                        name,
                                        email,

                                    }

                                    const peteintData = {
                                        name,
                                        age,
                                        email,
                                        gender,
                                        address,
                                        phone,
                                        image: result.data.display_url

                                    }
                                    addPateint(peteintData);

                                })
                                .catch(err => {
                                    setLoading(false)
                                    toast.error(err.message.slice(18,-1))
                                })
                        })
                        .catch(err => {
                            setLoading(false)
                            toast.error(err.message.slice(22,-2))
                        })
                }

            })


    }

    const handleFacebook = () => {
        toast.success("testing test")
    }

    const handleGoogle = ()=>{
        goolgeLogin()
        .then((res) => {
            const user = res.user
            const peteintData = {
                name:user.displayName,
                age:null,
                email:user.email,
                gender:null,
                address:null,
                phone:null,
                image:user?.photoURL

            }
            addPateint(peteintData);
           
        }).catch(err => {
            toast.err(err.message)
        })
    }

    return (
        <div className="block lg:flex items-center mx-10 ">
            <img src={loginBanner} alt="" className="w-2/4 hidden lg:block" />
            <div className="border border-gray-300 p-10 block lg:w-2/4 lg:mx-10 mt-5 rounded-md">
                <div className="flex items-center justify-between text-lg font-semibold text-gray-600">
                    <p>Patient Register</p>
                    <Link to="/add-doctor"> <p className="text-cyan-500">Are you a Doctor?</p></Link>
                </div>
                <form onSubmit={handleSubmit(submitForm)}>
                    <input type="text" className="w-full border mt-5 border-gray-600 p-2 rounded-md" placeholder="Enter Full Name" id="" {...register("name", {
                        required: "This is requerd fild"
                    })} />
                    {errors.name && <p className='text-sm mt-2 text-red-700'>{errors.name.message}</p>}
                    <input type="email" className="w-full border my-5 border-gray-600 p-2 rounded-md" placeholder="Enter Email" id="" {...register("email", {
                        required: "This is requerd fild",
                    })} />
                    {errors.email && <p className='text-sm mt-2 text-red-700'>{errors.email.message}</p>}
                    <input type="password" className="w-full border border-gray-600 p-2 rounded-md" placeholder="Enter Password" id="" {...register("password", {
                        required: "This is requerd fild"
                    })} />
                    {errors.password && <p className='text-sm mt-2 text-red-700'>{errors.password.message}</p>}
                    <input type="text" className="w-full border mt-4 border-gray-600 p-2 rounded-md" placeholder="Enter Phone Number" id="" {...register("number", {
                        required: "This is requerd fild"
                    })} />
                    {errors.number && <p className='text-sm mt-2 text-red-700'>{errors.number.message}</p>}
                    <input type="text" className="w-full border mt-4 border-gray-600 p-2 rounded-md" placeholder="Enter Adress" id="" {...register("adress", {
                        required: "This is requerd fild"
                    })} />
                    {errors.adress && <p className='text-sm mt-2 text-red-700'>{errors.adress.message}</p>}
                    <input type="text" className="w-full border mt-4 border-gray-600 p-2 rounded-md" placeholder="Enter Age" id="" {...register("age", {
                        required: "This is requerd fild"
                    })} />
                    {errors.age && <p className='text-sm mt-2 text-red-700'>{errors.age.message}</p>}
                    <select className="select input-bordered input w-full mt-4" {...register("gender", {
                        required: "This is requerd fild"
                    })}>
                        <option value="" hidden>Select Gender </option>
                        <option value="Male">Male </option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                    </select>
                    {errors.gender && <p className='text-sm mt-2 text-red-700'>{errors.gender.message}</p>}
                    <label className="label">
                        <span className="label-text">Upload Your Photo</span>
                    </label>
                    <input type="file" className="file-input w-full border-gray-400" {...register("photo", {
                        required: "This is requerd fild"
                    })} />
                    {errors.photo && <p className='text-sm mt-2 text-red-700'>{errors.photo.message}</p>}
                    <button disabled={loading} type='submit' className="w-full my-5 py-2 text-white rounded-md bg-green-400">{loading ? "Loading.." : "Register"}</button>


                </form>
                <div className="divider">OR</div>
                <div className="flex justify-center text-white gap-5">
                    <button onClick={handleFacebook} className="bg-blue-500 py-2 w-1/2 rounded-md">facebook </button>
                    <button onClick={handleGoogle} className="bg-red-500 py-2 w-1/2 rounded-md ">Google </button>

                </div>
                <p className="mt-10 text-center">Already have an account?<Link to="/login"><span className="text-blue-600 cursor-pointer">Login</span></Link></p>
            </div>
        </div>
    );
};

export default Register;