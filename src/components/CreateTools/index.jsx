import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';

import {createTool} from '../../store/tools/action';

import {
  ButtonSubmit, Container, Content,
  Form, Header, IconAddImg,
  IconCloseImg, InputLink, InputName,
  InputTags, Label, TextareaDescription,
  Title,
} from './styles';

import IconClose from '../../assets/icons/Icon-Close-2px.svg';
import IconAdd from '../../assets/icons/iconadd.svg';
import {INITIAL_STATE} from "../../store/tools/reducer";

const CreateTools = ({toggle, setToggle}) => {
  const dispatch = useDispatch();
  const {isFetching} = useSelector(({ tools }) => tools || INITIAL_STATE);
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

  const cleanState = () => {
    setTitle('');
    setLink('');
    setDescription('');
    setTags('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createTool({
      title, link, description, tags: tags.split(' '),
    }));
    cleanState();
  };

  const creatingTools = () => {
    return (
      <div>Creating Tools, Await...</div>
    );
  }

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
            onClick={() => setToggle(!toggle)}
          />
        </Header>
        {isFetching && creatingTools()}
        <Form>
          <Label>
            Tool Name
            <InputName
              required
              type="text"
              name="title"
              onChange={({ target }) => setTitle(target.value)}
              value={title}
              data-testid="create-tool-title"
            />
          </Label>

          <Label>
            Tool Link
            <InputLink
              required
              type="text"
              name="link"
              onChange={({ target }) => setLink(target.value)}
              value={link}
              data-testid="create-tool-link"
            />
          </Label>

          <Label>
            Tool Description
            <TextareaDescription
              required
              name="description"
              rows="5"
              onChange={({ target }) => setDescription(target.value)}
              value={description}
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
              onChange={({ target }) => setTags(target.value)}
              value={tags}
              data-testid="create-tool-tags"
            />
          </Label>

          <ButtonSubmit
            data-testid="create-tool-btn-add"
            onClick={handleSubmit}
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
