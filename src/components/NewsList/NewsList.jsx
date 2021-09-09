import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { newsListRequestNews } from '../../store/actions';

import './news_list.css';
import News from '../News';
import Spinner from '../Spinner';

function NewsList() {
  const dispatch = useDispatch();
  const { requestNewsReducer } = useSelector((state) => state);

  useEffect(() => {
    dispatch(newsListRequestNews());
  }, [dispatch]);

  function refreshNewsHanlder() {
    dispatch(newsListRequestNews());
  }

  const newsListHtml = () => {
    if (requestNewsReducer.requestStatus === null) return null;
    if (requestNewsReducer.requestStatus === 'request') return <Spinner />;
    if (requestNewsReducer.requestStatus === 'failure')
      return <div className="news-list__request-failure bg-danger">Request Failure</div>;

    return (
      <>
        {requestNewsReducer.news.map((e) => (
          <News key={e.id} {...e} />
        ))}
      </>
    );
  };

  return (
    <div>
      <div className="new-list__button-container">
        <button onClick={refreshNewsHanlder} className="btn-primary btn  news-list__refresh-button">
          Refresh news
        </button>
      </div>
      <ul className="list-group">{newsListHtml()}</ul>
    </div>
  );
}

export default NewsList;
