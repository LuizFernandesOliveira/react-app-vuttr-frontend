import {
  Container,
  Content,
  Title,
  Subtitle,
  Wrapper,
  LabelSearch,
  InputSearch,
  LabelCheckbox,
  CheckboxInput,
  ButtonAdd,
  ImgAdd,
} from './styles';

import IconAdd from '../../assets/icons/iconadd.svg';

function Header() {
  return (
    <Container>
      <Title>
        VUTTR
      </Title>

      <Subtitle>
        Very Useful Tools to Remember
      </Subtitle>

      <Content>
        <Wrapper>
          <LabelSearch>
            <InputSearch
              data-testid="input-search"
              type="text"
              placeholder="search"
            />

            <LabelCheckbox>
              <CheckboxInput
                type="checkbox"
                data-testid="input-checkbox"
              />
              search in tags only
            </LabelCheckbox>
          </LabelSearch>

          <ButtonAdd
            data-testid="btn-add"
          >
            <ImgAdd src={ IconAdd } />
            Add
          </ButtonAdd>
        </Wrapper>
      </Content>
    </Container>
  );
}
export default Header;
