import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import asyncPopulateUsersandTalks from '../states/shared/action';
import {
  asyncCreateThread,
  asyncUpVoteThread,
  asyncDownVoteThread,
  asyncNeutralizeVoteThread,
} from '../states/threads/action';
import ThreadInput from '../components/ThreadInput';
import ThreadList from '../components/ThreadList';
import CategoryList from '../components/CategoryList';
import { asyncGetCategories } from '../states/category/action';

function HomePage() {
  const threads = useSelector((states) => states.threads);
  const users = useSelector((states) => states.users);
  const categories = useSelector((states) => states.categories);
  const authUser = useSelector((states) => states.authUser);
  const [activeCategory, setActiveCategory] = useState('all');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersandTalks());
    dispatch(asyncGetCategories());
  }, [dispatch]);

  const onAddThread = ({ title, body, category }) => {
    dispatch(asyncCreateThread({ title, body, category }));
  };

  const onUpVote = (threadId) => {
    dispatch(asyncUpVoteThread(threadId, authUser.id));
  };

  const onDownVote = (threadId) => {
    dispatch(asyncDownVoteThread(threadId, authUser.id));
  };

  const onNeutralizeVote = (threadId) => {
    dispatch(asyncNeutralizeVoteThread(threadId, authUser.id));
  };

  const threadList = threads.map((thread) => ({
    ...thread,
    owner: users.find((user) => user.id === thread.ownerId),
  }));

  return (
    <div className="home-page">
      <section>
        <div className="container my-3 text-body">
          <ThreadInput addThread={onAddThread} />
          <h4 className="text-white mb-2">Tags </h4>
          <div>
            <CategoryList
              categories={categories}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          </div>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4 className="text-white mb-0">See Threads </h4>
          </div>
          <ThreadList
            threads={threadList}
            category={activeCategory}
            upVote={onUpVote}
            downVote={onDownVote}
            neutralizeVote={onNeutralizeVote}
            authUser={authUser}
          />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
