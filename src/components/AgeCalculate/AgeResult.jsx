import React from 'react';
import PropTypes from "prop-types";

const AgeResult = ({age}) => {
    return (
      <div>
        {age && (
          <p className="mt-3">
            You are {age?.years} years {age?.months} months days {age?.days} days old
          </p>
        )}
      </div>
    );
};
AgeResult.propTypes = {
  age: PropTypes.shape({
    years: PropTypes.number.isRequired,
    months: PropTypes.number.isRequired,
    days: PropTypes.number.isRequired,
  }),
};

export default AgeResult;