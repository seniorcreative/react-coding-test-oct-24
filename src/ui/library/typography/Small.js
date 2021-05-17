import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node,
};

export const Small = ({ children }) => (
  <small className="text-xs text-gray-400">{children}</small>
);

Small.propTypes = propTypes;
