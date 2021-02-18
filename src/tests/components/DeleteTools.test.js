import renderWidthRouterAndRedux from '../testConfig';
import {toolRender, tools} from '../mockData';
import ToolsItem from '../../components/ToolsItem';
import {fireEvent} from '@testing-library/react';

describe('2 - [ TESTANDO A TELA DELETE TOOLS ]', () => {
  it('verifica se a se existe um a pagina de deletar', () => {
    const { getByTestId } = renderWidthRouterAndRedux(<ToolsItem tool={toolRender} />);
    const btnDelete = getByTestId('btn-delete-tool');

    fireEvent.click(btnDelete);

    const deleteContainer = getByTestId('tool-delete-container');
    expect(deleteContainer).toBeInTheDocument();
  });
});