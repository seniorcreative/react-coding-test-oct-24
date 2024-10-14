import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  name: PropTypes.string, // This is better done with typescript.
};

export const Radio = ({ name }) => (
  <input
    className="form-radio mr-2 rounded-full text-blue-500"
    name={name}
    type="radio"
  />
);

Radio.propTypes = propTypes;
