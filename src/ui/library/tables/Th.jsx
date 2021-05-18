import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const propTypes = {
  children: PropTypes.node,
  textAlign: PropTypes.oneOf(["left", "center", "right"]),
};

export const Th = ({ children, textAlign }) => (
  <th
    className={classNames(
      "py-2",
      "px-2",
      "text-xs",
      "text-gray-400",
      "uppercase",
      {
        [`text-${textAlign}`]: textAlign ? textAlign : undefined,
      }
    )}
  >
    {children}
  </th>
);

Th.propTypes = propTypes;
