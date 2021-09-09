const init = {
  requestStatus: null,
  article: {},
};

export default function requestArticleReducer(state = init, action) {
  switch (action.type) {
    case 'NEWS_LIST_REQUEST_ARTICLE':
      return { ...state, requestStatus: 'request' };
    case 'NEWS_LIST_REQUEST_ARTICLE_SUCCESS':
      return { requestStatus: 'success', article: action.payload };
    case 'NEWS_LIST_REQUEST_ARTICLE_FAILURE':
      return { requestStatus: 'failure', article: {} };
    default:
      return state;
  }
}
