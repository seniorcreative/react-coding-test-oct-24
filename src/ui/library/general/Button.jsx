import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node,
};

export const Button = ({ children }) => (
  <button className="bg-gray-600 rounded-lg text-white py-2 px-4">
    {children}
  </button>
);

Button.propTypes = propTypes;
