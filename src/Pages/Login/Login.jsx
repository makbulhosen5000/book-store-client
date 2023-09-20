import React, { useContext, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiFillGoogleCircle } from "react-icons/ai";
//import { AiFillEye } from "react-icons/ai";
import { AiOutlineLogin } from "react-icons/ai";
import toast from 'react-hot-toast';
import { saveUser } from '../../api/auth';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {

    const emailRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const { loading, setLoading, signIn, signInWithGoogle, resetPassword } =
      useContext(AuthContext);

    const handleGoogleSignIn = () => {
      signInWithGoogle()
        .then((result) => {
          console.log(result.user);
          //save user to DB //api/auth.js
          saveUser(result.user);
          navigate(from, { replace: true });
        })
        .catch((err) => {
          setLoading(false);
          console.log(err.message);
          toast.error(err.message);
        });
    };

    const handleLoginSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);
      signIn(email, password)
        .then((result) => {
          console.log(result.user);
          navigate(from, { replace: true });
        })
        .catch((err) => {
          setLoading(false);
          console.log(err.message);
          toast.error(err.message);
        });
    };

    const handleReset = () => {
      const email = emailRef.current.value;
      resetPassword(email)
        .then(() => {
          toast.success("Please check your email for password reset");
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err.message);
          toast.error(err.message);
        });
    };


    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg flex w-full md:w-3/4 lg:w-1/2">
          {/* Left Side (Input Fields) */}
          <div className="w-1/2 pr-8">
            <h1 className="text-2xl font-semibold mb-4">Login</h1>
            <form onSubmit={handleLoginSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-600 font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  ref={emailRef}
                  name="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Your email"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-gray-600 font-medium"
                  required
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Your password"
                />
              </div>
              <div className="flex">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                >
                  <AiOutlineLogin size={25} />
                </button>
                <div className="divider divider-horizontal">OR</div>
                <button
                  onClick={handleGoogleSignIn}
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                >
                  <AiFillGoogleCircle size={25} />
                </button>
              </div>
            </form>
            <div className="">
              <p className="mt-3">
                Don't Have An Account?
                <Link to="/register">
                  <span className="text-blue-600"> click here</span>
                </Link>{" "}
              </p>
              <p className="mt-3">
                Forget Password?
                <Link onClick={handleReset} to="">
                  <span className="text-blue-600"> click here</span>
                </Link>{" "}
              </p>
            </div>
          </div>

          {/* Right Side (Image) */}
          <div className="hidden md:block w-1/2">
            <img
              src={import.meta.env.VITE_LOGIN_IMG_URL}
              alt="Login Image"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    );
};

export default Login;