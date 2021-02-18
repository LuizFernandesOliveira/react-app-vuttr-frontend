import React from 'react';
import PropTypes from 'prop-types';

import DeleteIcon from '../../assets/icons/delete.svg';

import {
  Button,
  Container,
  Content,
  DeleteIconImg, Description,
  Title,
} from './styles';

const DeleteTools = ({id, title, setToggle}) => {
  const handleDelete = (event, id) => {
    event.preventDefault();
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
          {`Are you sure you wont to remove ${title}`}
        </Description>
        <Button
          onClick={(event) => handleDelete(event, id)}
        >Yes, remove</Button>
        <Button
          data-testid="delete-cancel"
          onClick={() => setToggle(!toggle)}
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
