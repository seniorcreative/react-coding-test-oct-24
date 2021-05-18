import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export const HeadingTwo = ({ children, className }) => (
  <h2
    className={classNames("font-bold", "text-gray-700", "text-xl", className)}
  >
    {children}
  </h2>
);

HeadingTwo.propTypes = propTypes;
