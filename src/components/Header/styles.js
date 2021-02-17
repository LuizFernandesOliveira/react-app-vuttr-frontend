import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 10px;
`;

export const Content = styled.div``;

export const Title = styled.h1``;

export const Subtitle = styled.h3``;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;


export const LabelSearch = styled.label`
  display: flex;
  flex-direction: column;
`;

export const InputSearch = styled.input`
  border: 0.5px solid gray;
  border-radius: 10px;
  height: 35px;
  padding-left: 10px;
  width: 300px;
`;

export const LabelCheckbox = styled.label``;

export const CheckboxInput = styled.input``;

export const ButtonAdd = styled.button`
  align-items: center;
  background-color: var(--green-darker);
  border-radius: 10px;
  color: var(--white);
  display: flex;
  font-size: 16px;
  font-weight: bold;
  height: 35px;
  justify-content: center;
  width: 100px;
  img {
    margin-right: 4px;
  }
`;

export const ImgAdd = styled.img`
  background-color: var(--white);
  border-radius: 50%;
  height: 20px;
  width: 20px
`;

