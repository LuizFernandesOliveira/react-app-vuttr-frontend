import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';

import {deleteTool} from '../../store/tools/action';
import DeleteIcon from '../../assets/icons/delete.svg';

import {
  Button,
  Container,
  Content,
  DeleteIconImg,
  Description,
  Title,
} from './styles';

const DeleteTools = ({id, title, setToggle}) => {
  const dispatch = useDispatch();

  const handleDelete = (event, id) => {
    event.preventDefault();
    dispatch(deleteTool(id));
  }
  return (
    <Container data-testid="tool-delete-container">
      <Content>
        <Title>
          <DeleteIconImg
            src={DeleteIcon}
            alt="delete icon"
          />
          Remove Tool
        </Title>
        <Description>
          {`Are you sure you want to remove ${title}`}
        </Description>
        <Button
          data-testid="btn-delete"
          onClick={(event) => handleDelete(event, id)}
        >Yes, remove</Button>
        <Button
          data-testid="delete-cancel"
          onClick={() => setToggle(false)}
        >Cancel</Button>
      </Content>
    </Container>
  );
}

DeleteTools.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  setToggle: PropTypes.func.isRequired,
}


export default DeleteTools;
