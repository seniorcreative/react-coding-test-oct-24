import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node,
};

export const Tbody = ({ children }) => (
  <tbody className="border-b">{children}</tbody>
);

Tbody.propTypes = propTypes;
