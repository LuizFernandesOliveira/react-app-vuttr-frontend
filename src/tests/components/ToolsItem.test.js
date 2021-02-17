import renderWidthRouterAndRedux from '../testConfig';
import ToolsItem from '../../components/ToolsItem';
import {toolRender} from './mockData';

describe('2 - [ TESTANDO A TELA TOOLS ITEM ]', () => {
  it('verifica se a se existe um o component', () => {
    const {getByTestId} = renderWidthRouterAndRedux(
      <ToolsItem tool={toolRender} />
    );
    const container = getByTestId('tools-item-container');
    expect(container).toBeInTheDocument();
  });
});