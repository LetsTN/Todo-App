import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 12.5rem;
  font-size: 2.5rem;
  font-weight: 700;
  color: ${ props => props.theme.colors.white };
`;