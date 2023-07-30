import UseForm from 'shared/hooks/useForm';
import { initialState } from './iniialState';
import PropTypes from 'prop-types';
import TextFilds from '../../../shared/component/TextFild/index.js';
import { filds } from './filds';
import { Box, Button } from '@mui/material';

const LoginForm = ({ onSubmit }) => {
  const { state, handleSubmit, handleChange } = UseForm({
    onSubmit,
    initialState,
  });
  const { email, password } = state;

  return (
    <Box onSubmit={handleSubmit} component="form" noValidate sx={{ mt: 1 }}>
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
      />

      <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} type="submit">
        Login
      </Button>
    </Box>
  );
};

export default LoginForm;
LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
