import {
  fetchTools,
  fetchToolsByTagsLike,
  fetchToolsByTitle,
} from '../../services/toolsAPI';

export const RECEIVE_GET_TOOLS_FAILURE = 'RECEIVE_GET_TOOLS_FAILURE';
export const RECEIVE_GET_TOOLS_SUCCESS = 'RECEIVE_GET_TOOLS_SUCCESS';
export const REQUEST_GET_TOOLS = 'REQUEST_GET_TOOLS';

const requestGetTools = () => ({
  type: REQUEST_GET_TOOLS,
});

const receiveGetToolsFailure = (error) => ({
  type: RECEIVE_GET_TOOLS_FAILURE,
  error,
});

const receiveGetToolsSuccess = (tools) => ({
  type: RECEIVE_GET_TOOLS_SUCCESS,
  tools,
});

export function getTools() {
  return (dispatch) => {
    dispatch(requestGetTools());
    return fetchTools()
      .then((response) => dispatch(receiveGetToolsSuccess(response)))
      .catch((error) => dispatch(receiveGetToolsFailure(error)));
  };
}

export function getToolsByTitle(q) {
  return (dispatch) => {
    dispatch(requestGetTools());
    return fetchToolsByTitle(q)
      .then((response) => dispatch(receiveGetToolsSuccess(response)))
      .catch((error) => dispatch(receiveGetToolsFailure(error)));
  };
}

export function getToolsByTag(tags) {
  return (dispatch) => {
    dispatch(requestGetTools());
    return fetchToolsByTagsLike(tags)
      .then((response) => dispatch(receiveGetToolsSuccess(response)))
      .catch((error) => dispatch(receiveGetToolsFailure(error)));
  };
}