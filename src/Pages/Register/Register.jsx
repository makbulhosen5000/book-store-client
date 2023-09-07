import React from "react";
import { Link } from "react-router-dom";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaRegistered } from "react-icons/fa";
const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const image = from.image.files[0];
    const formData = new FormData();
    formData.append("image",image);
    const email = from.email.value;
    const password = from.password.value;
    console.log(name,email, password, image);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg flex w-full md:w-3/4 lg:w-1/2">
        {/* Left Side (Input Fields) */}
        <div className="w-1/2 pr-8">
          <h1 className="text-2xl font-semibold mb-4">Register</h1>
          <form onSubmit={handleRegister}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-gray-600 font-medium"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none"
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
