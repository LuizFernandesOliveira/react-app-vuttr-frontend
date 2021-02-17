import React from 'react';
import PropTypes from 'prop-types';

import IconWarning from '../../assets/icons/Exclusion5.svg';

import {
  Container,
  WarningIcon,
} from './styles';

const WarningMessage = ({error}) => {
  return (
    <Container>
      <WarningIcon src={IconWarning}/>
      {error}
    </Container>
  );
}

WarningMessage.propTypes = {
  error: PropTypes.string.isRequired,
}

export default WarningMessage;
