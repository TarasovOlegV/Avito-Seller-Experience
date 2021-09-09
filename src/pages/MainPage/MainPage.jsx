import React from 'react';
import { useDispatch } from 'react-redux';

import NewsList from '../../components/NewsList';
import useInterval from '../../hooks/useInterval';
import { newsListRequestNews } from '../../store/actions';

function MainPage() {
  const dispatch = useDispatch();

  useInterval(() => dispatch(newsListRequestNews()), 60000);

  return (
    <>
      <h2>Latest news</h2>
      <NewsList />
    </>
  );
}

export default MainPage;
