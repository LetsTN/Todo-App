import styled from 'styled-components';

export const Button = styled.div`
  height: 2.5rem;
  width: 2.5rem;

  background: url(${({ theme }) => theme.images.iconTheme });
  background-size: contain;

  cursor: pointer;
`;