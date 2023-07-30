import React from 'react';
import UserMenu from './UserMenu';
import s from './header.module.css';

const Header = () => {
  return (
    <header>
      <div className={s.header_box}>
        <UserMenu />
      </div>
    </header>
  );
};

export default Header;
