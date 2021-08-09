import React from 'react';

import { Button } from './styles'

interface Props {
  onChange(): void;
}

const ThemeButton: React.FC<Props> = ({ onChange }) => {
  return (
    <Button onClick={onChange}/>
  );
}

export default ThemeButton;