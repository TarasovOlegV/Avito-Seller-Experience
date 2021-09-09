import React from 'react';
import { Link } from 'react-router-dom';
import T from 'prop-types';

import './news.css';

function News({ id, by, score, time, title }) {
  return (
    <li className="list-group-item news">
      <div>
        <div className="fw-bold">
          <Link to={`article/${id}`}>{title && title}</Link>
          <span className="list-group-itembadge bg-primary rounded-pill news__score">{score && score}</span>
        </div>
        <div>
          <span className="news__author">{by && by}</span> {time && new Date(time * 1000).toLocaleString()}
        </div>
      </div>
    </li>
  );
}

News.propTypes = {
  id: T.number.isRequired,
  by: T.string,
  score: T.number,
  time: T.number,
  title: T.string,
};

export default News;
