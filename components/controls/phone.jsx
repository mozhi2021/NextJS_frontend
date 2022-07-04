import React from "react";
import { PropTypes } from "prop-types";
// import IMask from "imask";
import { FormHelperText } from "@mui/material";
import { InputLabel } from "@mui/material";
import { FormControl } from "@mui/material";
import Input from "@mui/material/Input";
import { TextField } from "@mui/material";
import { IMaskInput } from "react-imask";

const TextMaskPhone = React.forwardRef(function TextMaskPhone(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="(#00) 000-0000"
      definitions={{ "#": /[1-9]/ }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});
TextMaskPhone.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function phone(props) {
  const { name, label, value, onChange, error = null, required } = props;

  return (
    <FormControl {...(error && { error: true })} size="small">
      <InputLabel sx={{ mt: 1, ml: -2 }}>
        {required ? label + " *" : label}
      </InputLabel>
      <Input
        // <TextField
        value={value}
        onChange={onChange}
        name={name}
        inputComponent={TextMaskPhone}
        variant="standard"
      />
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
}
