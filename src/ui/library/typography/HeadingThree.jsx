import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node,
};

export const HeadingThree = ({ children }) => (
  <h3 className="font-bold text-gray-700 text-md">{children}</h3>
);

HeadingThree.propTypes = propTypes;
