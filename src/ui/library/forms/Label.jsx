import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node,
};

export const Label = ({ children }) => (
  <label className="block font-bold mb-1 text-gray-500 text-sm uppercase">
    {children}
  </label>
);

Label.propTypes = propTypes;
