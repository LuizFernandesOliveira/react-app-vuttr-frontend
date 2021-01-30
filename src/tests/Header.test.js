import renderWidthRouterAndRedux from './testConfig';
import App from '../App';

describe('2 - [ TESTANDO A TELA HEADER ]', () => {
  it('verifica se a se existe um heading \'VUTTR\'', () => {
    const { history, getByText } = renderWidthRouterAndRedux(<App />);
    const heading = getByText(/VUTTR/);

    expect(history.location.pathname).toBe('/');
    expect(heading).toBeInTheDocument();
  });
});
