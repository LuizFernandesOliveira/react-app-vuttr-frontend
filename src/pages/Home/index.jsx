import { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {INITIAL_STATE} from '../../store/tools/reducer';

import {getTools} from '../../store/tools/action';

import Tools from '../../components/Tools';
import WarningMessage from '../../components/WarningMessage';
import Header from '../../components/Header';

import {Container, Content, Loading} from './styles';

function Home() {
  const dispatch = useDispatch();

  const dispatchTools = () => {
    dispatch(getTools());
  }

  useEffect(() => {
    dispatchTools();
  }, []);

  const {data, error, isFetching} = useSelector(
    ({ tools }) => tools || INITIAL_STATE,
  );
  return (
    <Container data-testid="home-page">
      <Content>
        <Header />
        {isFetching && <Loading>Carregando</Loading>}
        {error && <WarningMessage error={error} />}
        {data && <Tools tools={data} />}
      </Content>
    </Container>
  );
}

export default Home;
