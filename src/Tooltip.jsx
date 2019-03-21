import * as React from "react";

function Tooltip({ children, text }) {
  return (
    <span href="#" class="tooltip-right" data-tooltip={text}>
      {children}
    </span>
  );
}

export default Tooltip;
