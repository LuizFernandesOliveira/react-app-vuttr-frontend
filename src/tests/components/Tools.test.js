import renderWidthRouterAndRedux from '../testConfig';
import Tools from '../../components/Tools';
import ToolsItem from '../../components/ToolsItem';
import {toolRender, tools} from '../mockData';

describe('2 - [ TESTANDO A TELA TOOLS ]', () => {
  it('verifica se a se existe um o component', () => {
    const {getByTestId} = renderWidthRouterAndRedux(
      <ToolsItem tool={toolRender} />
    );
    const container = getByTestId('tools-item-container');
    expect(container).toBeInTheDocument();
  });

  it('verificar se os tools estão renderizando corretamente', () => {
    const {getAllByTestId} = renderWidthRouterAndRedux(
      <Tools tools={tools} />
    );

    const toolAll = getAllByTestId('tools-item-container');
    expect(toolAll.length).toBe(2);
  });
});