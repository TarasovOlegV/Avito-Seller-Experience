import * as types from '../constants';
import { fetchNewsIds, fetchItem } from '../../services/api_hacker_news';

export const newsListRequestNews = () => async (dispatch) => {
  dispatch({ type: types.NEWS_LIST_REQUEST_NEWS });

  try {
    const result = await fetchNewsIds();

    const news = await Promise.all(
      result.slice(0, 100).map(async (newsId) => {
        const data = await fetchItem(newsId);
        // handle wrong news
        if (data === null) return null;

        const { by, id, score, time, title, kids } = data;
        return { by, id, score, time, title, kids };
      })
    );

    const filteredNews = news.filter((e) => e !== null);

    dispatch({
      type: types.NEWS_LIST_REQUEST_NEWS_SUCCESS,
      payload: filteredNews,
    });
  } catch (err) {
    console.error(err);
    dispatch({ type: types.NEWS_LIST_REQUEST_NEWS_FAILURE });
  }
};

export const newsListArticle = (id) => async (dispatch) => {
  dispatch({ type: types.NEWS_LIST_REQUEST_ARTICLE });

  try {
    const result = await fetchItem(id);

    if (result === null) dispatch({ type: types.NEWS_LIST_REQUEST_ARTICLE_FAILURE });

    dispatch({
      type: types.NEWS_LIST_REQUEST_ARTICLE_SUCCESS,
      payload: result,
    });
  } catch (err) {
    console.error(err);
    dispatch({ type: types.NEWS_LIST_REQUEST_ARTICLE_FAILURE });
  }
};

export const commentsListRequestComments = (newsId) => async (dispatch) => {
  dispatch({ type: types.COMMENTS_LIST_REQUEST_COMMENTS });
  try {
    const result = await fetchItem(newsId);

    const comments = await Promise.all(
      result.kids.map(async (commentId) => {
        const data = await fetchItem(commentId);
        // handle wrong comments
        if (data === null) return null;
        const { by, id, text, time, title, kids } = data;
        return { by, id, text, time, title, kids };
      })
    );

    const filteredComments = comments.filter((e) => e !== null);
    dispatch({
      type: types.COMMENTS_LIST_REQUEST_COMMENTS_SUCCESS,
      payload: filteredComments,
    });
  } catch (err) {
    console.error(err);
    dispatch({ type: types.COMMENTS_LIST_REQUEST_COMMENTS_FAILURE });
  }
};
