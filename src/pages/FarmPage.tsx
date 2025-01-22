import React, { useEffect, useState } from 'react';
import Background from '../components/Background';
import Header from '../components/home/Header';
import Footer from '../components/home/Footer';
import TokenGrid from '../components/farm/TokenGrid';
import WalletConnection from '../components/farm/WalletConnection';
import { axiosHttp, API_URL } from '../lib/axios';
import { usePumpFunTokensStore } from '../store/usePumpfunTokens';
import { useResourcesCtx } from '../context/ResourcesContext';

const FarmPage: React.FC = () => {
  const { tokens, setTokens } = usePumpFunTokensStore();
  const { resourceUpdated } = useResourcesCtx();
  const [page, setCurrentPage] = useState(1);
  const [count, setCount] = useState(1);

  useEffect(() => {
    getPumpfunFarmTokens();
  }, [page]);

  useEffect(() => {
    if (resourceUpdated && tokens.length > 0) {
      setTokens(tokens.map(token => {
        return {
          ...token,
          resources: token.resources && token.resources.id === resourceUpdated.id ? resourceUpdated : token.resources
        }
      }))
    }
  }, [resourceUpdated]);

  const getPumpfunFarmTokens = async () => {
    let { data: { ok, data: { token_data, count, page: currentPage } } } = await axiosHttp.get(`${API_URL}/pumpfun/farm?page=${page}`);
    if (ok) {
      setTokens(token_data);
      setCount(count);
      setCurrentPage(currentPage);
    }
  }

  const handleChange = async (_: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Background />
      <Header />

      <div className="flex-1 relative">
        <div className="absolute inset-0 overflow-y-auto">
          <div className="container max-w-7xl mx-auto px-4 py-24">
            <div className="space-y-8">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-emerald-800">The Farm</h1>
              </div>

              <div className="flex gap-8">
                {/* Left side - Farm info */}
                <div className="flex-1 space-y-4">
                  <p className="text-emerald-600">
                    Discover and track tokens launched through our Sprout Deployer
                  </p>
                  <p className="text-sm text-emerald-600">
                    When developers create tokens through the Sprout Deployer, they automatically purchase $25 worth of Sprout v1 tokens and allocate 0.5% of their new token supply. Both the Sprout v1 tokens and new token allocations are stored in our{' '}
                    <a
                      href="https://solscan.io/account/58t4B4BfPe7b6Wb7QqskSuTogwSnP2fEhu2EEeyVYXTf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 hover:text-emerald-800 transition-colors"
                      title="View on Solscan"
                    >
                      Sprout.trading: Collector
                    </a>
                    {' '}wallet.
                  </p>
                </div>

                {/* Vertical spacer */}
                <div className="w-px bg-emerald-200" />

                {/* Right side - Login section */}
                <WalletConnection />
              </div>

              <TokenGrid tokens={tokens} page={page} count={count} handleChange={handleChange} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FarmPage;