const init = {
  requestStatus: null,
  comments: {},
};

export default function requestCommentsReducer(state = init, action) {
  switch (action.type) {
    case 'COMMENTS_LIST_REQUEST_COMMENTS':
      return { ...state, requestStatus: 'request' };
    case 'COMMENTS_LIST_REQUEST_COMMENTS_SUCCESS':
      return { requestStatus: 'success', comments: action.payload };
    case 'COMMENTS_LIST_REQUEST_COMMENTS_FAILURE':
      return { requestStatus: 'failure', comments: {} };
    default:
      return state;
  }
}
