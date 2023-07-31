import UseForm from '../../../shared/hooks/useForm';
import { initialState } from './iniialState';
import PropTypes from 'prop-types';
import TextFilds from '../../../shared/component/TextFild/index.js';
import { filds } from './filds';
import { Box, Button } from '@mui/material';
const RegisterForm = ({ onSubmit }) => {
  const { state, handleSubmit, handleChange } = UseForm({
    onSubmit,
    initialState,
  });
  const { name, email, password } = state;

  return (
    <Box
      onSubmit={handleSubmit}
      component="form"
      noValidate={false}
      sx={{ mt: 1, '& .MuiTextField-root': { m: 1, width: '25ch' } }}
    >
      <TextFilds
        value={name}
        onChange={handleChange}
        {...filds.name}
        fullWidth
      />
      <TextFilds
        value={email}
        onChange={handleChange}
        {...filds.email}
        fullWidth
      />
      <TextFilds
        value={password}
        onChange={handleChange}
        {...filds.password}
        fullWidth
        minLength="7"
      />

      <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} type="submit">
        Register
      </Button>
    </Box>
  );
};

export default RegisterForm;
RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
