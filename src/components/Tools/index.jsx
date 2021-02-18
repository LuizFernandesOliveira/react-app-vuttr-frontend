import React from 'react';
import PropTypes from 'prop-types';
import {Container, Content} from './styles';

import ToolsItem from '../ToolsItem';

const Tools = ({ tools }) => {
  return (
    <Container data-testid="tools-container">
      <Content>
        {tools.map((tool) => (
          <ToolsItem key={tool.id} tool={tool}/>
        ))}
      </Content>
    </Container>
  );
}

Tools.propTypes = {
  tools: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Tools;
