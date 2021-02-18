import styled from 'styled-components';

export const Container = styled.p`
  align-items: center;
  background-color: ${({isDanger}) => isDanger ? 'var(--yellow)' : 'var(--green)'};
  border-radius: 10px;
  display: flex;
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
`;

export const WarningIcon = styled.img`
  height: 30px;
  margin-right: 10px;
  width: 30px;
`;
