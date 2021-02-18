import { useState } from 'react';
import {getToolsByTag, getToolsByTitle} from '../../store/tools/action';
import CreateTools from '../CreateTools';
import {useDispatch} from 'react-redux';

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
import IconLogo from '../../assets/icons/icon-Settings-Tool.svg';

function Header() {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const [checked, setChecked] = useState(false);
  const [word, setWord] = useState('');

  const changeSearch = async (value) => {
    await setWord(value);
    if (checked) dispatch(getToolsByTag(value));
    else dispatch(getToolsByTitle(value));
  };

  return (
    <Container>
      <Title>
        <img src={IconLogo} alt="logo" />
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
              value={word}
              onChange={({target}) => changeSearch(target.value)}
            />

            <LabelCheckbox>
              <CheckboxInput
                type="checkbox"
                data-testid="input-checkbox"
                onChange={({target}) => setChecked(target.checked)}
              />
              search in tags only
            </LabelCheckbox>
          </LabelSearch>

          <ButtonAdd
            data-testid="btn-add"
            onClick={ () => setToggle(!toggle) }
          >
            <ImgAdd src={ IconAdd } />
            Add
          </ButtonAdd>
        </Wrapper>
        {toggle && (
          <CreateTools setToggle={setToggle} />
        )}
      </Content>
    </Container>
  );
}
export default Header;
