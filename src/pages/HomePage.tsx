import React from 'react';
import { useNavigate } from 'react-router-dom';
import Background from '../components/Background';
import Header from '../components/home/Header';
import Footer from '../components/home/Footer';
import TokenizationSection from '../components/home/TokenizationSection';
import LeafDecoration from '../components/home/LeafDecoration';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative">
      <LeafDecoration position="left" />
      <LeafDecoration position="right" />

      <Background />
      <Header />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4 pt-24 pb-40">
        <div className="text-center space-y-5 max-w-4xl mx-auto">
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm border border-emerald-200/50 flex items-center justify-center">
              <img
                src="https://i.imgur.com/WJxBtdL.png"
                alt="Sprout"
                className="w-10 h-10 object-contain"
              />
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-emerald-800">
              Welcome to Sprout.trading
            </h1>
            <p className="text-base text-emerald-600">
              Become part of a collaborative effort to nurture the growth of our sprout.
              Provide essential resources like{' '}
              <span className="inline-flex items-center gap-1">
                <img src="https://i.imgur.com/fiFmUCU.png" alt="Water" className="w-3.5 h-3.5" />
                <span className="text-blue-600">water</span>
              </span>
              ,{' '}
              <span className="inline-flex items-center gap-1">
                <img src="https://i.imgur.com/oZHaXEN.png" alt="Fertilizer" className="w-3.5 h-3.5" />
                <span className="text-stone-600">fertilizer</span>
              </span>
              , and{' '}
              <span className="inline-flex items-center gap-1">
                <img src="https://i.imgur.com/SpwFpMe.png" alt="Sunshine" className="w-3.5 h-3.5" />
                <span className="text-amber-600">sunshine</span>
              </span>
              {' '}to help it thrive, and earn Bloom Stage rewards as it completes growth cycles.
              Launch your own sprouts through our launchpad, automatically contributing to the ecosystem by purchasing Sprout tokens and allocating supply.
              Track and trade all Sprout-launched tokens in our Farm, where you can continue supporting projects with your gardening resources.
            </p>
          </div>

          <button
            onClick={() => navigate('/desktop')}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/50 backdrop-blur-sm rounded-lg border border-emerald-200 text-emerald-700 hover:bg-white/70 transition-all text-sm"
          >
            <img src="https://i.imgur.com/csxJfOP.png" alt="Desktop" className="w-4 h-4" />
            Launch Sprout Desktop
          </button>
        </div>

        <TokenizationSection />
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;