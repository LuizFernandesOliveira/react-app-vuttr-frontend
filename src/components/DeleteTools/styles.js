import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background: rgba( 136, 237, 196, 0.6 );
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
`;

export const Content = styled.div`
  background-color: var(--green-lightest-most);
  border-radius: 10px;
  box-shadow: 0 0 5px 1px gray;
  box-sizing: border-box;
  padding: 10px;
  width: 500px;
`;

export const Title = styled.h3`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin-top: 0;
`;

export const Description = styled.p``;

export const DeleteIconImg = styled.img`
  height: 15px;
  margin-right: 10px;
  width: 15px;
`;

export const Button = styled.button`
  background-color: var(--green-dark);
  border-radius: 5px;
  color: white;
  float: right;
  font-size: 16px;
  font-weight: bolder;
  line-height: 20px;
  width: 120px;
  
  + button {
    background-color: var(--red-dark);
  }
`;
