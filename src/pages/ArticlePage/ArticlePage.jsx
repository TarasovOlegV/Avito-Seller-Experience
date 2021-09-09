import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Article from '../../components/Article';
import CommentsList from '../../components/CommentsList';
import useInterval from '../../hooks/useInterval';
import { commentsListRequestComments } from '../../store/actions';

function ArticlePage() {
  const { requestArticleReducer } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { id } = useParams();

  useInterval(
    () => dispatch(commentsListRequestComments(id)),
    requestArticleReducer.article.descendants > 0 ? 60000 : null
  );

  return (
    <>
      <h2>
        <Link to="/">All news</Link>{' '}
      </h2>
      <Article />
      {requestArticleReducer.article.descendants > 0 ? <CommentsList /> : null}
    </>
  );
}

export default ArticlePage;
