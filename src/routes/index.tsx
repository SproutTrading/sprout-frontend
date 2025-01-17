import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import DesktopPage from '../pages/DesktopPage';
import LeaderboardPage from '../pages/LeaderboardPage';
import DocsPage from '../pages/DocsPage';
import BrandingPage from '../pages/BrandingPage';
import FarmPage from '../pages/FarmPage';
import DeployerPage from '../pages/DeployerPage';
import { useSocket } from '../hooks/useSocket';
import { useAuthStore } from '../store/useAuthStore';
import { EpochResourcesStatistics } from '../components/conservatory/EpochProgress';
import { useEpochsCtx } from '../context/EpochsContext';
import { useResourcesCtx } from '../context/ResourcesContext';
import { PumpfunLogs, usePumpfunLogsStore } from '../store/usePumpfunLogs';
import { BuyLogs, useBuyLogsStore } from '../store/useBuyLogsStore';

const AppRoutes: React.FC = () => {
  const { setEpochs } = useEpochsCtx();
  const { setSprouts, setStatistics } = useResourcesCtx();
  const { socket, reconnect, disconnect } = useSocket();
  const { profile } = useAuthStore();
  const { addLogs } = usePumpfunLogsStore();
  const { setBuyLogs } = useBuyLogsStore();
  useEffect(() => {
    if (socket) {
      socket.on('connect', () => {
        console.log('Successfully connected');
      })
      socket.on("updateStatistics", (data: { epochs: EpochResourcesStatistics[], leaderboard: { users: any[], statistics: any } }) => {
        setEpochs(data.epochs);
        setSprouts(data.leaderboard.users);
        setStatistics(data.leaderboard.statistics);
      });

      socket.on('pumpfun', (data: PumpfunLogs) => {
        addLogs(data);
      });

      socket.on('buyTx', (data: BuyLogs) => {
        console.log(data);
        setBuyLogs(data);
      })
    } else {
      reconnect();
    }
  }, [socket]);

  useEffect(() => {
    return () => {
      disconnect();
    }
  }, [profile])

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/desktop" element={<DesktopPage />} />
      <Route path="/docs/*" element={<DocsPage />} />
      <Route path="/leaderboard" element={<LeaderboardPage />} />
      <Route path="/farm" element={<FarmPage />} />
      <Route path="/branding" element={<BrandingPage />} />
      <Route path="/deployer" element={<DeployerPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;