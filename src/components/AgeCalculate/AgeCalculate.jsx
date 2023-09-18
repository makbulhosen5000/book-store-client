import React from "react";

const AgeCalculate = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-blue-300 p-8 rounded-lg shadow-2xl flex w-full md:w-3/4 lg:w-1/2">
        {/* Left Side (Input Fields) */}
        <div className="w-full pr-8">
          <h1 className="text-2xl font-semibold mb-4">Age Calculator</h1>
          <form>
            <div className="flex gap-4 mb-4">
              <input
                type="date"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Calculate
              </button>
            </div>
          </form>
          <div className="">
            <p className="mt-3">Don't Have An Account?</p>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default AgeCalculate;
