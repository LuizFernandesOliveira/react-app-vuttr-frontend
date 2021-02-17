import {
  RECEIVE_GET_TOOLS_SUCCESS,
  RECEIVE_GET_TOOLS_FAILURE,
  REQUEST_GET_TOOLS,
} from './action';

const INITIAL_STATE = {
  data: [],
  isFetching: false,
  error: '',
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
