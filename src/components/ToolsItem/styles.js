import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--green-lighter);
  border-radius: 10px;
  box-shadow: 0 0 5px 1px var(--green-lighter);
  box-sizing: border-box;
  padding: 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  width: 100%;
`;

export const Link = styled.a``;

export const Description = styled.p``;

export const Tags = styled.div`
  display: flex;
  h4 + h4 {
    margin-left: 4px;
  }
`;

export const Tag = styled.h4`
  background-color: var(--green-light);
  border-radius: 5px;
  box-sizing: border-box;
  margin: 0;
  padding: 2px 4px;
`;

export const ClearIcon = styled.img`
  height: 15px;
  width: 15px;
`;
