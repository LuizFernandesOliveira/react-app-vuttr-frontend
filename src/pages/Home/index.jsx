import React, { useEffect } from 'react';
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

  const {data, error, isFetching, message} = useSelector(
    ({ tools }) => tools || INITIAL_STATE,
  );
  return (
    <Container data-testid="home-page">
      <Content>
        <Header />
        {isFetching && <Loading>Carregando</Loading>}
        {error ? (
          <WarningMessage message={error} isDanger={true} />
        ) : data.length !== 0 ? (
          <Tools tools={data} />
        ) : message ? (
          <WarningMessage
            message={message}
            isDanger={false}
          />
        ) : (
          <WarningMessage
            isDanger={false}
            message="create new tool"
          />
        )}
      </Content>
    </Container>
  );
}

export default Home;
