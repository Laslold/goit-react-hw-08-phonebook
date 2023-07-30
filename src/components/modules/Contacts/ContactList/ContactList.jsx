import { Box, Button, Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, removeContact }) => {
  const elem = contacts.map(({ id, name, number }) => (
    <Stack spacing={2} p={1} key={id}>
      <Typography component="h4" variant="h5">
        <p>{name} : </p>{' '}
      </Typography>
      <Typography component="h4" variant="h5" sx={{ textAlign: 'right' }}>
        <p>{number} </p>
      </Typography>

      <Button onClick={() => removeContact(id)} variant="contained">
        Delete
      </Button>
    </Stack>
  ));
  return <Box sx={{ width: '100%' }}>{elem}</Box>;
};
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  removeContact: PropTypes.func.isRequired,
};
export default ContactList;
