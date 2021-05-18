import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const propTypes = {
  children: PropTypes.node,
  theme: PropTypes.oneOf(["success", "info", "warning", "danger"]),
};

export const Tag = ({ children, theme }) => {
  let themeClassNames;
  switch (theme) {
    case "success":
      themeClassNames = ["from-green-500", "to-green-400"];
      break;

    case "info":
      themeClassNames = ["from-blue-500", "to-blue-400"];
      break;

    case "alert":
      themeClassNames = ["from-yellow-400", "to-yellow-300"];
      break;

    case "warning":
      themeClassNames = ["from-yellow-600", "to-yellow-500"];
      break;

    case "danger":
      themeClassNames = ["from-red-600", "to-red-500"];
      break;

    default:
      themeClassNames = ["from-gray-500", "to-gray-400"];
      break;
  }

  return (
    <div
      className={classNames(
        "bg-gradient-to-t",
        "font-bold",
        "inline-block",
        "py-0.5",
        "px-2.5",
        "rounded-full",
        "text-white",
        "text-xs",
        "text-opacity-90",
        themeClassNames
      )}
    >
      {children}
    </div>
  );
};

Tag.propTypes = propTypes;
