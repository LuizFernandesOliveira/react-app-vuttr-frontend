import { fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWidthRouterAndRedux from '../testConfig';
import App from '../../app';
import CreateTools from "../../components/CreateTools";
import axios from "axios";
import {tool} from './mockData';

jest.mock('axios');


const tools = [];

describe('2 - [ TESTANDO A TELA CREATE TOOLS ]', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  })
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

  it('verifica se é possível adicionar uma nova ferramenta', () => {
    const { getByTestId } = renderWidthRouterAndRedux(
      <CreateTools setToggle={() => {}} toggle={true} />
    );

    axios.post.mockImplementation((response) => {
      tools.push(response);
      return Promise.resolve(tool);
    });

    const title = getByTestId('create-tool-title');
    const link = getByTestId('create-tool-link');
    const description = getByTestId('create-tool-description');
    const tags = getByTestId('create-tool-tags');
    const createToolBtnAdd = getByTestId('create-tool-btn-add');

    userEvent.type(title, tool.title);
    userEvent.type(link, tool.link)
    userEvent.type(description, tool.description);
    userEvent.type(tags, tool.tags);

    fireEvent.click(createToolBtnAdd);

    expect(tools.length).toBe(1)
  });
});