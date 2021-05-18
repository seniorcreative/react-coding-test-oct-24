import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node,
};

export const HeadingOne = ({ children }) => (
  <h1 className="font-bold text-gray-700 text-xl">{children}</h1>
);

HeadingOne.propTypes = propTypes;
