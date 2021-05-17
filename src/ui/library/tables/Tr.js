import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node,
};

export const Tr = ({ children }) => <tr className="border-b">{children}</tr>;

Tr.propTypes = propTypes;
