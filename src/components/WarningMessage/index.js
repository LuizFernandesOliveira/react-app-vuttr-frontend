import React from 'react';
import PropTypes from 'prop-types';

import IconWarning from '../../assets/icons/Exclusion5.svg';

import {
  Container,
  WarningIcon,
} from './styles';

const WarningMessage = ({message, isDanger}) => {
  return (
    <Container isDanger={isDanger}>
      {isDanger && (<WarningIcon src={IconWarning}/>)}
      {message}
    </Container>
  );
}

WarningMessage.propTypes = {
  message: PropTypes.string.isRequired,
  isDanger: PropTypes.bool.isRequired,
}

export default WarningMessage;
