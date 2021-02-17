import renderWidthRouterAndRedux from '../testConfig';
import Tools from '../../components/Tools';
import {tools} from '../mockData';

describe('2 - [ TESTANDO A TELA TOOLS ITEM ]', () => {
  it('verifica se a se existe o component', () => {
    const {getByTestId} = renderWidthRouterAndRedux(
      <Tools tools={tools}/>
    );
    const container = getByTestId('tools-container');
    expect(container).toBeInTheDocument();
  });
});