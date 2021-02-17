import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background: rgba( 136, 237, 196, 0.6 );
  display: ${ (props) => props.toggle ? 'flex' : 'none' };
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

export const Header = styled.div`
  align-items: center;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h3`
  margin: 0;
  padding: 0;
`;

export const IconAddImg = styled.img`
  height: 20px;
  width: 20px;
`;

export const IconCloseImg = styled.img`
  height: 20px;
  width: 20px;
`;

export const Form = styled.form`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

export const Label = styled.label`
  color: gray;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: bold;
  margin: 5px 0;
  width: 100%;
`;

export const InputName = styled.input`
  border: 0.5px solid gray;
  border-radius: 5px;
  line-height: 25px;
  padding-left: 10px;
`;

export const InputLink = styled.input`
  border: 0.5px solid gray;
  border-radius: 5px;
  line-height: 25px;
  padding-left: 10px;
`;

export const InputTags = styled.input`
  border: 0.5px solid gray;
  border-radius: 5px;
  line-height: 25px;
  padding-left: 10px;
`;

export const TextareaDescription = styled.textarea`
  border: 0.5px solid gray;
  border-radius: 5px;
  box-sizing: border-box;
  height: 100%;
  padding: 10px;
  resize: vertical;
`;

export const ButtonSubmit = styled.button`
  background-color: var(--green-dark);
  border-radius: 5px;
  color: var(--white);
  font-weight: bolder;
  line-height: 20px;
  width: 100px;
`;
