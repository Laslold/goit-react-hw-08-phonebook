import UseForm from '../../../shared/hooks/useForm';
import { initialState } from './iniialState';
import PropTypes from 'prop-types';
import TextFilds from '../../../shared/component/TextFild/index.js';
import { filds } from './filds';
import { Button } from '@mui/material';
const RegisterForm = ({ onSubmit }) => {
  const { state, handleSubmit, handleChange } = UseForm({
    onSubmit,
    initialState,
  });
  const { name, email, password } = state;

  return (
    <form onSubmit={handleSubmit}>
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
      />

      <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} type="submit">
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
