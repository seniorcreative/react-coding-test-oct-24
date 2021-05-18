import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node,
};

export const Thead = ({ children }) => (
  <thead className="border-b">{children}</thead>
);

Thead.propTypes = propTypes;
