import {
  GET_TOOLS_SUCCESS,
  GET_TOOLS_FAILURE,
  REQUEST_TOOLS,
  CREATE_TOOLS_FAILURE,
  CREATE_TOOLS_SUCCESS,
} from './action';

export const INITIAL_STATE = {
  data: [],
  isFetching: false,
  message: '',
  error: '',
};

function ToolsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_TOOLS:
      return {
        ...state,
        isFetching: true,
      };
    case GET_TOOLS_SUCCESS:
      return {
        ...state,
        data: action.tools,
        isFetching: false,
      };
    case GET_TOOLS_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };
    case CREATE_TOOLS_SUCCESS:
      return {
        ...state,
        data: [...state.data || [], action.tool] || [],
        isFetching: false,
      };
    case CREATE_TOOLS_FAILURE:
      return {
        ...state,
        message: action.message,
        isFetching: false,
      };
    default:
      return state;
  }
}

export default ToolsReducer;
