import PropTypes from 'prop-types'

import {
  Container,
  Content,
  Header,
  IconAddImg,
  IconCloseImg,
  Title,
} from './styles';

import IconClose from '../../assets/icons/Icon-Close-2px.svg';
import IconAdd from '../../assets/icons/iconadd.svg';

const CreateTools = ({ toggle, setToggle }) => {
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
      </Content>
    </Container>
  );
}

CreateTools.propTypes = {
  toggle: PropTypes.bool.isRequired,
  setToggle: PropTypes.func.isRequired,
};

export default CreateTools;
