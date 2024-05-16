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
        <div className="container my-3 text-body">
          <h4 className="text-body mb-5">Leaderboard</h4>
          <div className=" row mb-2">
            <div className="col-1 " />
            <div className="col-9">
              <h3>Name</h3>
            </div>
            <div className="col-2 d-flex justify-content-center">
              <h3>Score</h3>
            </div>
          </div>
          <LeaderboardList leaderboard={leaderboard} />
        </div>
      </section>
    </div>
  );
}

export default LeaderboardPage;
