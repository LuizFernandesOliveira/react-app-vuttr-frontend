import {
  getTools,
  getToolsByTagsLike,
  getToolsByTitle,
} from '../../services/toolsAPI';

const RECEIVE_GET_TOOLS_FAILURE = 'RECEIVE_GET_TOOLS_FAILURE';
const RECEIVE_GET_TOOLS_SUCCESS = 'RECEIVE_GET_TOOLS_SUCCESS';
const REQUEST_GET_TOOLS = 'REQUEST_GET_TOOLS';

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

export function fetchGetTools() {
  return (dispatch) => {
    dispatch(requestGetTools());
    return getTools()
      .then((response) => dispatch(receiveGetToolsSuccess(response)))
      .catch((error) => dispatch(receiveGetToolsFailure(error)));
  };
}

export function fetchGetToolsByTitle(q) {
  return (dispatch) => {
    dispatch(requestGetTools());
    return getToolsByTitle(q)
      .then((response) => dispatch(receiveGetToolsSuccess(response)))
      .catch((error) => dispatch(receiveGetToolsFailure(error)));
  };
}

export function fetchGetToolsByTag(tags) {
  return (dispatch) => {
    dispatch(requestGetTools());
    return getToolsByTagsLike(tags)
      .then((response) => dispatch(receiveGetToolsSuccess(response)))
      .catch((error) => dispatch(receiveGetToolsFailure(error)));
  };
}

const INITIAL_STATE = {
  data: [],
  isFetching: false,
};

function ToolsReducer(state=INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_GET_TOOLS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_GET_TOOLS_SUCCESS:
      return {
        ...state,
        data: action.tools,
        isFetching: false,
      }
    case RECEIVE_GET_TOOLS_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      }
    default:
      return state;
  }
}

export default ToolsReducer;
