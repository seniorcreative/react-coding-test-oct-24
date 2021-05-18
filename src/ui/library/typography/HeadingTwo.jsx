import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node,
};

export const HeadingTwo = ({ children }) => (
  <h2 className="font-bold text-gray-700 text-xl">{children}</h2>
);

HeadingTwo.propTypes = propTypes;
