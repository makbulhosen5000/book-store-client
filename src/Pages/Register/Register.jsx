import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaRegistered } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-hot-toast";
import { saveUser } from "../../api/auth";
const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    loading,
    setLoading,
    createUser,
    updateUserProfile,
    signInWithGoogle,
  } = useContext(AuthContext);

   const handleGoogleSignIn = () => {
     signInWithGoogle()
       .then((result) => {
         console.log(result.user);
         //save user to DB //src/api/auth.js
         saveUser(result.user);
         navigate(from, { replace: true });
       })
       .catch((err) => {
         setLoading(false);
         console.log(err.message);
         toast.error(err.message);
       });
   };

  const handleRegister = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;
    const image = from.image.files[0];
    const formData = new FormData();
    formData.append("image",image);
     const url = `https://api.imgbb.com/1/upload?key=${
       import.meta.env.VITE_IMGBB_KEY
     }`;
     fetch(url, {
       method: "POST",
       body: formData,
     })
       .then((res) => res.json())
       .then((imageData) => {
         const imageUrl = imageData.data.display_url;
         createUser(email, password)
           .then((result) => {
             console.log(result.user);
             updateUserProfile(name, imageUrl)
               .then(() => {
                 toast.success("SignUp successfully");
                 //save user to DB //api/auth.js
                 saveUser(result.user);
               })
               .catch((err) => {
                 setLoading(false);
                 console.log(err.message);
                 toast.error(err.message);
               });
           })
           .catch((err) => {
             setLoading(false);
             console.log(err.message);
             toast.error(err.message);
           });
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
          <h1 className="text-2xl font-semibold mb-4">Register</h1>
          <form onSubmit={handleRegister}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-600 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none"
              />
            </div>
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
                name="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Your email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-600 font-medium"
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
            <div className="mb-6">
              <label
                htmlFor="Image"
                className="block text-gray-600 font-medium"
              >
                Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                className="w-full px-4 py-2 border rounded-md focus:outline-none"
              />
            </div>
            <div className="flex">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
              >
                <FaRegistered size={25} />
              </button>
              <div className="divider divider-horizontal">OR</div>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
                <AiFillGoogleCircle size={25} />
              </button>
            </div>
          </form>
          <div>
            <p className="mt-3">
              Have An Account?
              <Link to="/login">
                <span className="text-blue-600"> click here</span>
              </Link>{" "}
            </p>
          </div>
        </div>

        {/* Right Side (Image) */}
        <div className="hidden md:block w-2/4 mt-20">
          <img
            src={import.meta.env.VITE_REG_IMG_URL}
            alt="Register Image"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
