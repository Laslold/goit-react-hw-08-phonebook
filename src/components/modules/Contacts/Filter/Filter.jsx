import React from 'react';
import PropTypes from 'prop-types';

import TextFilds from '../../../../shared/component/TextFild/TextFild';
import { fild } from './fild';
import { Typography } from '@mui/material';

const Filter = ({ value, onChange }) => (
  <div style={{ marginTop: '20px' }}>
    <Typography component="h2" variant="h5">
      Find contacts by name
    </Typography>
    <TextFilds
      value={value}
      onChange={onChange}
      {...fild.filter}
      fullWidth
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    />
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
