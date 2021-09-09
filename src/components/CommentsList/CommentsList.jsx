import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Comment from '../Comment';
import Spinner from '../Spinner';
import './comments_list.css';
import { commentsListRequestComments } from '../../store/actions';

function CommentsList() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { requestCommentsReducer } = useSelector((state) => state);

  useEffect(() => {
    dispatch(commentsListRequestComments(id));
  }, [dispatch, id]);

  function refreshCommentsHanlder() {
    dispatch(commentsListRequestComments(id));
  }

  const commentsListHtml = () => {
    if (requestCommentsReducer.requestStatus === null) return null;
    if (requestCommentsReducer.requestStatus === 'request') return <Spinner />;
    if (requestCommentsReducer.requestStatus === 'failure') {
      return <div className="comment-list__failure-request bg-danger">Request Failure</div>;
    }

    return (
      <>
        {requestCommentsReducer.comments.map((e) => (
          <Comment key={e.id} {...e} />
        ))}
      </>
    );
  };
  return (
    <div>
      <div className="comments-list__button-container">
        <button className="btn btn-primary comment" onClick={refreshCommentsHanlder}>
          Refresh comments
        </button>
      </div>
      <ul className="list-group">{commentsListHtml()}</ul>
    </div>
  );
}

export default CommentsList;
