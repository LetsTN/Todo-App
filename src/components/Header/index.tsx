import React from 'react';

import { Container } from './styles'

import ThemeButton from '../ThemeButton'

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <Container>
      T O D O
      <ThemeButton onChange={toggleTheme} />
    </Container>
  );
}

export default Header;