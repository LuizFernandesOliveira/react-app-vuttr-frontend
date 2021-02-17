import {
  fetchCreateTool,
  fetchTools,
  fetchToolsByTagsLike,
  fetchToolsByTitle,
} from '../../services/toolsAPI';

export const GET_TOOLS_FAILURE = 'GET_TOOLS_FAILURE';
export const GET_TOOLS_SUCCESS = 'GET_TOOLS_SUCCESS';
export const CREATE_TOOLS_SUCCESS = 'CREATE_TOOLS_SUCCESS';
export const CREATE_TOOLS_FAILURE = 'CREATE_TOOLS_FAILURE';
export const REQUEST_TOOLS = 'REQUEST_TOOLS';

const requestTools = () => ({
  type: REQUEST_TOOLS,
});

const getToolsFailure = (error) => ({
  type: GET_TOOLS_FAILURE,
  error,
});

const getToolsSuccess = (tools) => ({
  type: GET_TOOLS_SUCCESS,
  tools,
});

export function getTools() {
  return (dispatch) => {
    dispatch(requestTools());
    return fetchTools()
      .then((response) => dispatch(getToolsSuccess(response)))
      .catch((error) => dispatch(getToolsFailure(error)));
  };
}

export function getToolsByTitle(q) {
  return (dispatch) => {
    dispatch(requestTools());
    return fetchToolsByTitle(q)
      .then((response) => dispatch(getToolsSuccess(response)))
      .catch((error) => dispatch(getToolsFailure(error)));
  };
}

export function getToolsByTag(tags) {
  return (dispatch) => {
    dispatch(requestTools());
    return fetchToolsByTagsLike(tags)
      .then((response) => dispatch(getToolsSuccess(response)))
      .catch((error) => dispatch(getToolsFailure(error)));
  };
}

const createToolsFailure = (error) => ({
  type: CREATE_TOOLS_FAILURE,
  error,
});

const createToolsSuccess = (tool) => ({
  type: CREATE_TOOLS_SUCCESS,
  tool,
});

export function createTool(tool) {
  return (dispatch) => {
    dispatch(requestTools());
    return fetchCreateTool(tool)
      .then((response) => dispatch(createToolsSuccess(response)))
      .catch((error) => dispatch(createToolsFailure(error)));
  };
}