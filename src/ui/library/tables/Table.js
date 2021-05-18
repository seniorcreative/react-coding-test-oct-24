import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node,
};

export const Table = ({ children }) => (
  <table className="my-2 table-auto w-full">{children}</table>
);

Table.propTypes = propTypes;
