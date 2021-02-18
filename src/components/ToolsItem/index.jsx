import React from 'react';
import PropTypes from 'prop-types';
import IconClose from '../../assets/icons/Icon-Close-2px.svg';

import {
  ClearIcon,
  Container,
  Content,
  Description,
  Link,
  Tag,
  Tags,
  Title,
} from './styles';

const ToolsItem = ({tool}) => {
  const {id, title, description, tags, link} = tool;
  return (
    <Container data-testid="tools-item-container">
      <Content>
        <Title>
          <Link href={link} target="_blank">
            {title}
          </Link>
          <ClearIcon
            src={IconClose}
          />
        </Title>
        <Description>
          {description}
        </Description>
        <Tags>
          {tags.length && tags.map((tag) => (
            <Tag key={Math.random() * id}>{`#${tag}`}</Tag>
          ))}
        </Tags>
      </Content>
    </Container>
  );
}

ToolsItem.propTypes = {
  tool: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default ToolsItem;
