import React, { useState } from 'react';
import T from 'prop-types';

import { fetchItem } from '../../services/api_hacker_news';
import './comment.css';

function Comment({ by, time, text, kids, id }) {
  const [comments, setComments] = useState([]);

  async function requestComments(parentId) {
    try {
      const result = await fetchItem(parentId);

      const comments = await Promise.all(
        result.kids.map(async (commentId) => {
          const { by, id, text, time, title, kids } = await fetchItem(commentId);
          return { by, id, text, time, title, kids };
        })
      );
      setComments(comments);
    } catch (err) {
      console.log(err);
    }
  }

  function refreshButtonHandler() {
    requestComments(id);
  }

  function childCommentsHtml() {
    return comments.length > 0 ? (
      <ul>
        {comments.map((e) => (
          <Comment key={e.id} {...e} />
        ))}
      </ul>
    ) : null;
  }

  return (
    <li className="list-group-item comment">
      <div>
        <span className="comment__author"> {by && by}</span> {time && new Date(time * 1000).toLocaleString()}
      </div>
      <p dangerouslySetInnerHTML={{ __html: text }}></p>
      {kids ? (
        <button className="btn btn-primary" onClick={refreshButtonHandler}>
          more comments
        </button>
      ) : null}
      {childCommentsHtml()}
    </li>
  );
}

Comment.propTypes = {
  id: T.number.isRequired,
  by: T.string,
  score: T.number,
  time: T.number,
  title: T.string,
};

export default Comment;
