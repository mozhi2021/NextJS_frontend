import React from "react";
import { useState } from "react";
import { PropTypes } from "prop-types";
import Input from "@mui/material/Input";
import { TextField } from "@mui/material";

const initialFValues = {
  // id: 0,
  fullName: "",
};

export default function Name(props) {
  const [txt, setTxt] = useState("");

  const onInputChange = (e) => {
    const { value } = e.target;
    console.log("Input value: ", value);

    const re = /^[A-Za-z]+$/;
    if (value === "" || re.test(value)) {
      setTxt(value);
    }
  };
  const { name, label, value, onChange, error = null, required } = props;

  return (
    <Input
    // <TextField
      value={txt}
      // value={value}
      onChange={onInputChange}
      name={name}
      label={label}
      variant="standard"
      // required
      // inputProps={{
      //   inputmode: "autocapitalize"
      // }}
      // keyboardType="nemeric"
    />
  );
}