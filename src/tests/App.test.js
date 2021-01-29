import renderWidthRouterAndRedux from './testConfig';
import App from '../App';

describe('1 - [ TESTANDO A TELA HOME ]', () => {
  it('verifica se a routa para essa página é \'/\'', () => {
    const { history, getByTestId } = renderWidthRouterAndRedux(<App />);
    const homeComponent = getByTestId('home-page');

    expect(history.location.pathname).toBe('/');
    expect(homeComponent).toBeInTheDocument();
  });
});
