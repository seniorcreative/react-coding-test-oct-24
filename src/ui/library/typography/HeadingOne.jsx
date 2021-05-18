import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export const HeadingOne = ({ children, className }) => (
  <h1
    className={classNames("font-bold", "text-gray-700", "text-2xl", className)}
  >
    {children}
  </h1>
);

HeadingOne.propTypes = propTypes;
