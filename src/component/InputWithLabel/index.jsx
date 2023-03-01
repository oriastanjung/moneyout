import React from "react";

function InputWithLabel(props) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-primaryBlue">{props.label} :</label>
      <input
        className="bg-[#f5f5f5] px-4 py-1 text-primaryBlue rounded text-primaryBlue"
        type={props.type}
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default InputWithLabel;
