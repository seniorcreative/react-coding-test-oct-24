import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const propTypes = {
  children: PropTypes.node,
  textAlign: PropTypes.oneOf(["left", "center", "right"]),
};

export const Td = ({ children, textAlign }) => (
  <td
    className={classNames("py-6", "px-2", {
      [`text-${textAlign}`]: textAlign ? textAlign : undefined,
    })}
  >
    {children}
  </td>
);

Td.propTypes = propTypes;
