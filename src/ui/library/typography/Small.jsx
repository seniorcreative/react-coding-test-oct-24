import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export const Small = ({ children, className }) => (
  <small className={classNames("text-xs", "text-gray-400", className)}>
    {children}
  </small>
);

Small.propTypes = propTypes;
