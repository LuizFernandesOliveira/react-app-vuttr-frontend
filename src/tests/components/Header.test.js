import renderWidthRouterAndRedux from '../testConfig';
import App from '../../app';
import Header from "../../components/Header";

describe('2 - [ TESTANDO A TELA HEADER ]', () => {
  it('verifica se a se existe um heading \'VUTTR\'', () => {
    const { history, getByText } = renderWidthRouterAndRedux(<App />);
    const heading = getByText(/VUTTR/);

    expect(history.location.pathname).toBe('/');
    expect(heading).toBeInTheDocument();
  });

  it('verifica se existe os inputs de busca, checkbox e botao add', () => {
    const { getByTestId } = renderWidthRouterAndRedux(<Header />);
    const inputSearch = getByTestId('input-search');
    const inputCheckbox = getByTestId('input-checkbox');
    const btnAdd = getByTestId('btn-add');

    expect(inputSearch).toBeInTheDocument();
    expect(inputCheckbox).toBeInTheDocument();
    expect(inputCheckbox).toBeInTheDocument();
  });
});
