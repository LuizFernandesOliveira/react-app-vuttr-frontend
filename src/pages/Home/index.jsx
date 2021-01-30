import { Container, Content } from './styles';

import Header from '../../components/Header';

function Home() {
  return (
    <Container data-testid="home-page">
      <Content>
        <Header />
      </Content>
    </Container>
  );
}

export default Home;
