import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const propTypes = {
  children: PropTypes.node,
  textAlign: PropTypes.oneOf(["left", "center", "right"]),
  colspan: PropTypes.number
};

export const Td = ({ children, textAlign, colspan }) => (
  <td
    className={classNames("py-6", "px-2", {
      [`text-${textAlign}`]: textAlign ? textAlign : undefined,
    })}
    colSpan={colspan}
  >
    {children}
  </td>
);

Td.propTypes = propTypes;
