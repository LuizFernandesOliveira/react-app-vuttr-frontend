import { fireEvent } from '@testing-library/react';
import renderWidthRouterAndRedux from '../testConfig';
import App from '../../app';
import CreateTools from "../../components/CreateTools";

describe('2 - [ TESTANDO A TELA CREATE TOOLS ]', () => {
  it('verifica se existe o component Create Tools', () => {
    const { getByTestId } = renderWidthRouterAndRedux(<App />);
    const createToolsContainer = getByTestId('create-tools-container');
    const btnAdd = getByTestId('btn-add');

    fireEvent.click(btnAdd);

    expect(createToolsContainer).toBeInTheDocument();
  });

  it('verifica se e existe os inputs corretos na pagina', () => {
    const { getByTestId } = renderWidthRouterAndRedux(
      <CreateTools setToggle={() => {}} toggle={true} />
    );

    const title = getByTestId('create-tool-title');
    const link = getByTestId('create-tool-link');
    const description = getByTestId('create-tool-description');
    const tags = getByTestId('create-tool-tags');

    expect(title).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(tags).toBeInTheDocument();
  });
});