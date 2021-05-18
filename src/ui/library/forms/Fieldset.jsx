import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node,
};

export const Fieldset = ({ children }) => (
  <fieldset class="mt-2 mb-6">{children}</fieldset>
);

Fieldset.propTypes = propTypes;
