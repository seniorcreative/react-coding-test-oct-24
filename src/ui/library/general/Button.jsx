import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export const Button = ({ children, onClick }) => (
  <button
    className="bg-gray-600 rounded-lg text-white py-0 px-2 text-lg"
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = propTypes;
