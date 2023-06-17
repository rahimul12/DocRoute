import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginBanner from "../assets/login-banner.png";
import { UserAuth } from "../context/authProvider";
import { useGetUserDataQuery } from "../fetures/usersApi/usersApi";
import Loading from "./Loading";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [skip, setSkip] = useState(true);
  const [docEmail, setDocEmail] = useState(null);
  const { data: userData } = useGetUserDataQuery(docEmail, { skip });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { loging } = useContext(UserAuth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (userData?.email) {
      const data = JSON.stringify(userData);
      localStorage.setItem("user", data);
      reset();
      setLoading(false);
      navigate(from, { replace: true });
    }
  }, [userData, navigate, reset, from]);

  const submitForm = (data) => {
    setLoading(true);
    const email = data.email;
    const password = data.password;
    loging(email, password)
      .then((res) => {
        const user = res.user;
        if (user?.email) {
          setDocEmail(user?.email);
          setSkip(false);
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.message.slice(22, -2));
      });
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="block lg:flex items-center mx-10 ">
      <img src={loginBanner} alt="" className="w-2/4 hidden lg:block" />
      <div className="border border-gray-300 p-10 block lg:w-2/4 lg:mx-10 mt-5 rounded-md">
        <div className="flex items-center justify-between text-lg font-semibold text-gray-600">
          <p>Login</p>
        </div>
        <form onSubmit={handleSubmit(submitForm)}>
          <input
            type="email"
            name="email"
            className="w-full border my-5 border-gray-600 p-2 rounded-md"
            placeholder="Enter Email"
            id=""
            {...register("email", {
              required: "This is requerd fild",
            })}
          />
          {errors.email && (
            <p className="text-sm mt-2 text-red-700">{errors.email.message}</p>
          )}
          <input
            type="password"
            name="password"
            className="w-full border border-gray-600 p-2 rounded-md"
            placeholder="Enter Password"
            id=""
            {...register("password", {
              required: "This is requerd fild",
            })}
          />
          <button
            type="submit"
            className="w-full my-5 py-2 text-white rounded-md bg-green-400"
          >
            {loading ? "loading.." : "Login"}
          </button>
        </form>
        <div className="divider">OR</div>
        <div className="flex justify-center text-white gap-5">
          <button className="bg-blue-500 py-2 w-1/2 rounded-md">
            facebook{" "}
          </button>
          <button className="bg-red-500 py-2 w-1/2 rounded-md ">Google </button>
        </div>
        <p className="mt-10 text-center">
          Don’t have an account?
          <Link to="/register">
            <span className="text-blue-600 cursor-pointer">Register</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
