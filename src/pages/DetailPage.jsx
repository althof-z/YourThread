import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../components/Loading';
import {
  asyncReceiveThreadDetail,
  asyncCreateComment,
  asyncUpVoteComment,
  asyncDownVoteComment,
  asyncNeutralizeVoteComment,
} from '../states/threadDetail/action';
import CommentInput from '../components/CommentInput';
import ThreadDetail from '../components/ThreadDetail';
import CommentList from '../components/CommentList';

function DetailPage() {
  const { threadId } = useParams();

  // const { threadDetail = [] } = useSelector((states) => states);

  const threadDetail = useSelector((states) => states.threadDetail);
  const authUser = useSelector((states) => states.authUser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(threadId));
  }, [threadId, dispatch]);

  const onComment = (text) => {
    dispatch(asyncCreateComment({ content: text, id: threadId }));
  };

  const onUpVoteComment = (commentId) => {
    dispatch(asyncUpVoteComment(threadId, commentId, authUser.id));
  };

  const onDownVoteComment = (commentId) => {
    dispatch(asyncDownVoteComment(threadId, commentId, authUser.id));
  };

  const onNeutralizeVoteComment = (commentId) => {
    dispatch(asyncNeutralizeVoteComment(threadId, commentId, authUser.id));
  };

  if (threadDetail === null) {
    return <Loading />;
  }

  return (
    <div className="detail-page d-flex justify-content-center">
      <main className="my-3 mx-5">
        <ThreadDetail
          title={threadDetail.title}
          body={threadDetail.body}
          category={threadDetail.category}
          owner={threadDetail.owner}
          createdAt={threadDetail.createdAt}
        />
        <div className="comment-section">
          <CommentInput addComment={onComment} />
          <CommentList
            comments={threadDetail.comments}
            threadId={threadId}
            authUser={authUser}
            upVote={onUpVoteComment}
            downVote={onDownVoteComment}
            neutralizeVote={onNeutralizeVoteComment}
          />
        </div>
      </main>
    </div>
  );
}

export default DetailPage;
