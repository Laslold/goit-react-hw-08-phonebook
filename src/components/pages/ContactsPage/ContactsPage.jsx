import React from 'react';
import { useEffect } from 'react';
import ContactForm from '../../modules/Contacts/ContactForm';
import Container from '../../modules/Contacts/Container';
import ContactList from '../../modules/Contacts/ContactList';
import Filter from '../../modules/Contacts/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { filter } from '../../../redux/phoneBook/phoneBook-slice';
import {
  getFilterContacts,
  getFilter,
} from '../../../redux/phoneBook/phoneBook-selector';
import {
  addContactsThunk,
  deleteContactsThunk,
  fetchContactsThunk,
} from '../../../redux/phoneBook/phoneBook-operation';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();
const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilterContacts);
  const filterValue = useSelector(getFilter);

  const onAddContacts = data => {
    const isInclude = contacts.find(
      ({ name }) => name.toLowerCase() === data.name.toLowerCase()
    );
    if (!isInclude) {
      dispatch(addContactsThunk(data));
      return;
    }
    alert(`${isInclude.name} is already in contacts`);
    return;
  };

  const onRemoveContact = id => {
    dispatch(deleteContactsThunk(id));
  };

  const onChangeFilter = ({ target }) => {
    dispatch(filter(target.value));
  };
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={5}
          sx={{
            backgroundImage:
              'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: t =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: ' 50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: '#fff',
            }}
          >
            <Container title="Phonebook">
              <ContactForm onSubmit={onAddContacts} />
              <Filter onChange={onChangeFilter} value={filterValue} />
            </Container>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div>
              <div>
                <Container title="Contacts">
                  <ContactList
                    contacts={contacts}
                    removeContact={onRemoveContact}
                  />
                </Container>
              </div>
            </div>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
// }

export default ContactsPage;
