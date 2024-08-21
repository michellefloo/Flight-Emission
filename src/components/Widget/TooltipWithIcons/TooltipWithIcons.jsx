import React from "react";
import PropTypes from "prop-types";
import styles from "./TooltipWithIcons.module.scss";

const TooltipWithIcons = ({ icon, tooltipText }) => {
  return (
    <div className={`${styles["container"]}`}>
      <div className={`${styles["icon"]}`}>
        {icon}
        <div className={`${styles["tooltip"]}`}>{tooltipText}</div>
      </div>
    </div>
  );
};

TooltipWithIcons.propTypes = {
  icon: PropTypes.element.isRequired,
  tooltipText: PropTypes.string.isRequired,
};

export default TooltipWithIcons;
