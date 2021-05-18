import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node,
};

export const CheckLabel = ({ children }) => (
  <label className="flex items-center my-2 text-gray-600">{children}</label>
);

CheckLabel.propTypes = propTypes;
