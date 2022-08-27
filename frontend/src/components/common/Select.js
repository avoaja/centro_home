import React from "react";

const Select = ({ label, list, onChange, title }) => {
  if (!list || list?.length === 0) {
    return <></>;
  }
  return (
    <div className="flex gap-x-4">
      <p>{label ? label : "Select"}</p>
      <select onChange={({ target: { value } }) => onChange(value)}>
        <option value="">{title ? title : 'Select an option' }</option>
        {list.map((item, index) => (
          <option value={item?.date} key={index}>
            {item?.date}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
