import React from 'react';
import PropTypes from 'prop-types';
import {Container, Content} from './styles';

import ToolsItem from '../ToolsItem';
import WarningMessage from '../WarningMessage';

const Tools = ({ tools }) => {
  return (
    <Container data-testid="tools-container">
      <Content>
        {tools.map((tool) => (
          <ToolsItem key={tool.id} tool={tool}/>
        ))}
        {tools.length === 0 && (
          <WarningMessage
            error={`No tools found`}
          />
        )}
      </Content>
    </Container>
  );
}

Tools.propTypes = {
  tools: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Tools;
