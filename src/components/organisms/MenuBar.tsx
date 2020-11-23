import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CartIcon from '../atoms/CartIcon';
import ProfileIcon from '../atoms/ProfileIcon';

export default function MenuBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <CartIcon />
        <ProfileIcon />
      </Toolbar>
    </AppBar>
  );
}
