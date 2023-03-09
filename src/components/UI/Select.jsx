import React from "react";

const Select = ({ data, name }) => {
  return (
    <select name={name}>
      {data.map((item) => {
        <option value={item.title}>{item.title}</option>;
      })}
    </select>
  );
};

export default Select;
