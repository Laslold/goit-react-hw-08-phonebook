import { useState } from 'react';
import { filds } from './filds';
import PropTypes from 'prop-types';
import { Box, Button } from '@mui/material';
import TextFilds from '../../../../shared/component/TextFild/';

const ContactForm = ({ onSubmit }) => {
  const [contact, setContact] = useState({
    name: '',
    number: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setContact(prevContact => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...contact });
    setContact({
      name: '',
      number: '',
    });
  };
  const { name, number } = contact;
  return (
    <Box
      component="form"
      noValidate
      sx={{ mt: 1 }}
      onSubmit={handleSubmit}
      action=""
      method="get"
    >
      <TextFilds
        onChange={handleChange}
        value={name}
        {...filds.name}
        fullWidth
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />

      <TextFilds
        onChange={handleChange}
        value={number}
        {...filds.number}
        fullWidth
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      />

      <div>
        <Button variant="contained" type="submit">
          Add contact
        </Button>
      </div>
    </Box>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default ContactForm;
