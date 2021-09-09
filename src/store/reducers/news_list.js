const init = {
  requestStatus: null,
  news: [],
};

export default function requestNewsReducer(state = init, action) {
  switch (action.type) {
    case 'NEWS_LIST_REQUEST_NEWS':
      return { ...state, requestStatus: 'request' };
    case 'NEWS_LIST_REQUEST_NEWS_SUCCESS':
      return { requestStatus: 'success', news: action.payload };
    case 'NEWS_LIST_REQUEST_NEWS_FAILURE':
      return { requestStatus: 'failure', news: [] };
    default:
      return state;
  }
}
