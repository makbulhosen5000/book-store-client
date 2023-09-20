import React, { useState } from "react";
import PropTypes from 'prop-types';
import differenceInYears from "date-fns/differenceInYears";
import AgeResult from "./AgeResult";
import { differenceInDays, differenceInMonths } from "date-fns";

const AgeCalculate = () => {
  const [age,setAge] = useState(null);
  const [birthDate,setBirthDate] = useState('');

  const handleBirthDate=(e)=>{
    setBirthDate(e.target.value);
  }

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const ageYears = differenceInYears(today, birthDateObj);
    const ageMonths = differenceInMonths(today, birthDateObj);
    const ageDays = differenceInDays(today, birthDateObj);
    
    setAge({
      years: ageYears,
      months: ageMonths,
      days: ageDays,
    });
  };

  const handleSubmit =(e)=>{
    e.preventDefault();
    calculateAge(birthDate);
  }
  
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-blue-300 p-8 rounded-lg shadow-2xl flex w-full md:w-3/4 lg:w-1/2">
        {/* Left Side (Input Fields) */}

        <div className="w-full pr-8">
          <h1 className="text-2xl font-semibold mb-4">Age Calculator</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex gap-4 mb-4">
              <input
                type="date"
                value={birthDate}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                onChange={handleBirthDate}
              />
              <button
                disabled={!birthDate}
                type="submit"
                className="disabled:bg-gray-400 disabled:cursor-default bg-blue-900 text-white py-2 px-4 rounded-md transition duration-300"
                required
              >
                Calculate
              </button>
            </div>
          </form>
          {age && <AgeResult age={age} />}
        </div>
      </div>
    </div>
  );
};
AgeCalculate.propTypes = {
  calculateAge:PropTypes.func.isRequired,
};

export default AgeCalculate;
