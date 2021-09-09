import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { newsListArticle } from '../../store/actions';

import './article.css';

function Article() {
  const dispatch = useDispatch();
  const { requestArticleReducer } = useSelector((state) => state);
  const { id } = useParams();
  const { by, descendants, score, time, title, url } = requestArticleReducer.article;

  useEffect(() => {
    dispatch(newsListArticle(id));
  }, [dispatch, id]);

  return (
    <div className="article">
      <a href={url}>{title}</a> <span className="badge bg-primary rounded-pill article__score">{score}</span> <br />
      <span className="article__author">{by}</span> {new Date(time * 1000).toLocaleString()}
      <div>Comments: {descendants}</div>
    </div>
  );
}

export default Article;
