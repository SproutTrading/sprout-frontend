import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import { EpochsProvider } from './context/EpochsContext';
import { ResourcesProvider } from './context/ResourcesContext';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { useMemo } from 'react';

function App() {
  const endpoint = 'https://api.mainnet-beta.solana.com';
  const wallets = useMemo(() => [], []);

  return (
    <BrowserRouter>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect={true}>
          <ResourcesProvider>
            <EpochsProvider>
              <AppRoutes />
            </EpochsProvider>
          </ResourcesProvider>
        </WalletProvider>
      </ConnectionProvider>
    </BrowserRouter>
  );
}

export default App;