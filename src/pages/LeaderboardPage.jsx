import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveLeaderboard } from '../states/leaderboard/action';
import LeaderboardList from '../components/LeaderboardList';

function LeaderboardPage() {
  // const { leaderboard = [] } = useSelector((states) => states);
  const leaderboard = useSelector((states) => states.leaderboard);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveLeaderboard());
  }, [dispatch]);

  return (
    <div>
      <section>
        <div className="container my-3 pb-3 text-white">
          <h4 className="text-white mb-5">Leaderboard</h4>
          <div className=" row mb-2">
            <div className="col-1 " />
            <div className="col-9">
              <h3>Name</h3>
            </div>
            <div className="col-2 d-flex justify-content-center">
              <h3>Score</h3>
            </div>
          </div>
          <div className="pb-5">
            <LeaderboardList leaderboard={leaderboard} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default LeaderboardPage;
