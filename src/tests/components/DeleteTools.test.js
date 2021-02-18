import renderWidthRouterAndRedux from '../testConfig';
import {toolRender, toolRender2, tools} from '../mockData';
import ToolsItem from '../../components/ToolsItem';
import {fireEvent} from '@testing-library/react';
import axios from "axios";
import DeleteTools from "../../components/DeleteTools";

jest.mock('axios');

describe('2 - [ TESTANDO A TELA DELETE TOOLS ]', () => {
  it('verifica se a se existe um a pagina de deletar', () => {
    const { getByTestId } = renderWidthRouterAndRedux(<ToolsItem tool={toolRender} />);
    const btnDelete = getByTestId('btn-delete-tool');

    fireEvent.click(btnDelete);

    const deleteContainer = getByTestId('tool-delete-container');
    expect(deleteContainer).toBeInTheDocument();
  });

  it('verifica se é possível remover uma nova ferramenta', () => {
    const { getByTestId } = renderWidthRouterAndRedux(
      <DeleteTools setToggle={() => {}} id={toolRender2.id} title={toolRender2.title} />
    );

    axios.delete.mockImplementation(() => {
      tools.pop();
      return Promise.resolve({});
    });

    const btnDelete = getByTestId('btn-delete');
    fireEvent.click(btnDelete);
    expect(tools.length).toBe(1);
  });
});