import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import styled from 'styled-components';

const StyledCartIcon = styled(ShoppingCartIcon)`
  padding-right: 0.7em;
`

export default function CartIcon() {
  return (
    <StyledCartIcon />
  );
}
