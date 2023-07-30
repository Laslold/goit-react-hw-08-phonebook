import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { nanoid } from '@reduxjs/toolkit';
import { TextField } from '@mui/material';

const TextFilds = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  required,
  type,
  margin,
  fullWidth,
  autoComplete,
  pattern,
  style,
}) => {
  const id = useMemo(() => nanoid(), []);
  return (
    <TextField
      label={label}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      type={type}
      margin={margin}
      fullWidth={fullWidth}
      autoComplete={autoComplete}
      pattern={pattern}
      style={style}
    ></TextField>
  );
};

export default TextFilds;
TextFilds.defultProps = {
  required: false,
  type: 'text',
};
TextFilds.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  margin: PropTypes.string,
  autoComplete: PropTypes.string,
  pattern: PropTypes.string,
  style: PropTypes.object,
  fullWidth: PropTypes.bool,
};
