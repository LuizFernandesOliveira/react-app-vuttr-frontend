import { fireEvent } from '@testing-library/react';
import renderWidthRouterAndRedux from '../testConfig';
import App from '../../app';

describe('2 - [ TESTANDO A TELA CREATE TOOLS ]', () => {
  it('verifica se a se existe o component Create Tools', () => {
    const { getByTestId } = renderWidthRouterAndRedux(<App />);
    const createToolsContainer = getByTestId('create-tools-container');
    const btnAdd = getByTestId('btn-add');

    fireEvent.click(btnAdd);

    expect(createToolsContainer).toBeInTheDocument();
  });
});