import React, { useEffect } from 'react';
import LeaderboardList from '../components/leaderboard/LeaderboardList';
import LeaderboardStats from '../components/leaderboard/LeaderboardStats';
import Background from '../components/Background';
import Header from '../components/home/Header';
import Footer from '../components/home/Footer';
import { axiosHttp, API_URL } from '../lib/axios';
import { useResourcesCtx } from '../context/ResourcesContext';
import LeafDecoration from '../components/home/LeafDecoration';

const LeaderboardPage: React.FC = () => {
  const { sprouts, loading, error, setLoading, setSprouts, statistics, setStatistics } = useResourcesCtx();

  useEffect(() => {
    setLoading(true);
    axiosHttp.get(`${API_URL}/leaderboard`).then(({ data: { ok, data } }) => {
      if (ok) {
        setSprouts(data.users);
        setStatistics(data.statistics);
      }
    }).catch(_ => {

    }).finally(() => {
      setLoading(false);
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">

      <LeafDecoration position="left" />
      <LeafDecoration position="right" />


      <Background />
      <Header />

      <div className="flex-1 relative">
        <div className="absolute inset-0 overflow-y-auto">
          <div className="relative z-10">
            <div className="container max-w-4xl mx-auto px-4 py-24">
              <div className="space-y-8">
                <div className="text-center space-y-4">
                  <h1 className="text-3xl font-bold text-emerald-800">
                    Sprout Leaderboard
                  </h1>
                  <p className="text-emerald-600">
                    Top contributors helping our community sprout grow stronger
                  </p>
                </div>

                {loading ? (
                  <div className="text-center text-emerald-600">Loading leaderboard data...</div>
                ) : error ? (
                  <div className="text-center text-red-600">Error: {error}</div>
                ) : (
                  <div className="space-y-8 pb-8">
                    <LeaderboardStats statistics={statistics} />
                    <LeaderboardList sprouts={sprouts} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LeaderboardPage;