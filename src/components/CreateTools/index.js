import { useState } from 'react';
import PropTypes from 'prop-types';

import {
  ButtonSubmit,
  Container,
  Content,
  Form,
  Header,
  IconAddImg,
  IconCloseImg,
  InputLink,
  InputName,
  InputTags,
  Label,
  TextareaDescription,
  Title,
} from './styles';

import IconClose from '../../assets/icons/Icon-Close-2px.svg';
import IconAdd from '../../assets/icons/iconadd.svg';

const CreateTools = ({ toggle, setToggle }) => {
  const [inputs, setInputs] = useState({
    title: '', link: '', description: '', tags: '',
  });

  const changeInputs = ({ target }) => {
    const {name, value} = target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <Container toggle={toggle} data-testid="create-tools-container">
      <Content>
        <Header>
          <Title>
            <IconAddImg src={IconAdd} alt="add icon"/>
            Add new tool
          </Title>

          <IconCloseImg
            src={IconClose}
            alt="close"
            onClick={ () => setToggle(!toggle) }
          />
        </Header>
        <Form>
          <Label>
            Tool Name
            <InputName
              required
              type="text"
              name="title"
              onChange={ changeInputs }
              value={ inputs.title }
              data-testid="create-tool-title"
            />
          </Label>

          <Label>
            Tool Link
            <InputLink
              required
              type="text"
              name="link"
              onChange={ changeInputs }
              value={ inputs.link }
              data-testid="create-tool-link"
            />
          </Label>

          <Label>
            Tool Description
            <TextareaDescription
              required
              name="description"
              rows="5"
              onChange={ changeInputs }
              value={ inputs.description }
              data-testid="create-tool-description"
            >
            </TextareaDescription>
          </Label>

          <Label>
            Tags
            <InputTags
              required
              type="text"
              name="tags"
              onChange={ changeInputs }
              value={ inputs.tags }
              data-testid="create-tool-tags"
            />
          </Label>

          <ButtonSubmit
            data-testid="create-tool-btn-add"
          >
            Add tool
          </ButtonSubmit>
        </Form>
      </Content>
    </Container>
  );
}

CreateTools.propTypes = {
  toggle: PropTypes.bool.isRequired,
  setToggle: PropTypes.func.isRequired,
};

export default CreateTools;
