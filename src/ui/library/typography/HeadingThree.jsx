import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export const HeadingThree = ({ children, className }) => (
  <h3
    className={classNames("font-bold", "text-gray-700", "text-md", className)}
  >
    {children}
  </h3>
);

HeadingThree.propTypes = propTypes;
