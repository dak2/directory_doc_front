import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CartIcon from '../atoms/CartIcon';
import ProfileIcon from '../atoms/ProfileIcon';
import styled from 'styled-components';

const IconWrapper = styled.div`
  margin-left: auto;
`
export default function MenuBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconWrapper>
          <CartIcon />
          <ProfileIcon />
        </IconWrapper>
      </Toolbar>
    </AppBar>
  );
}
