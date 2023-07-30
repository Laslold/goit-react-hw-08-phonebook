import Header from 'components/modules/Header/Header';
import React from 'react';
import ContactsPage from '../ContactsPage/ContactsPage';
import s from './homePage.module.css';

const HomePage = () => {
  return (
    <div className={s.container}>
      <div>
        <Header />
      </div>
      <div>
        <ContactsPage />
      </div>
    </div>
  );
};

export default HomePage;
