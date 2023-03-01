import React from "react";

function Button(props) {
  return (
    <button
      className={`${
        props.isdanger ? "bg-[#D64214]" : "bg-primaryBlue"
      } px-4 py-2 text-white rounded-[10px] text-xs `}
      {...props}
    >
      {props.children}
    </button>
  );
}

export default Button;
