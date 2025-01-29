import React from 'react';
import { Shield } from 'lucide-react';

const RegisteringSection: React.FC = () => {
  return (
    <div className="space-y-8 animate-[fadeIn_0.3s_ease-out]">
      <div className="p-4 bg-gradient-to-br from-emerald-50 to-white rounded-lg border border-emerald-100">
        <p className="text-emerald-600 leading-relaxed">
          Welcome to Sprout! Creating your gardener profile is the first step to participating in our unique ecosystem.
          Follow these simple steps to set up your profile and start contributing to our community sprout.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-emerald-800">
          Registration Process
        </h2>

        <div className="grid gap-4">
          <div className="p-4 bg-white/50 rounded-lg border border-emerald-100 hover:border-emerald-200 transition-colors">
            <div>
              <h3 className="font-medium text-emerald-800 mb-1">1. Install Phantom Wallet</h3>
              <p className="text-sm text-emerald-600 leading-relaxed">
                Download and install the Phantom wallet extension for your browser. This secure wallet will be used to verify your ownership of the public wallet address you'll use for your profile.
              </p>
              <div className="mt-2 p-3 bg-blue-50 rounded-lg border border-blue-100">
                <p className="text-sm text-blue-700">
                  <strong>Security Note:</strong> You can use an empty wallet for extra security. The wallet is only used for verification and future token allocations.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white/50 rounded-lg border border-emerald-100 hover:border-emerald-200 transition-colors">
            <div>
              <h3 className="font-medium text-emerald-800 mb-1">2. Create Your Profile</h3>
              <p className="text-sm text-emerald-600 leading-relaxed">
                Choose a unique username and connect your wallet:
              </p>
              <ul className="mt-2 space-y-1 text-sm text-emerald-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                  Enter your desired username
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                  Check username availability
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                  Connect your Phantom wallet
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                  Sign a verification message to confirm wallet ownership
                </li>
              </ul>
            </div>
          </div>

          <div className="p-4 bg-white/50 rounded-lg border border-emerald-100 hover:border-emerald-200 transition-colors">
            <div>
              <h3 className="font-medium text-emerald-800 mb-1">3. Receive Your Welcome Package</h3>
              <p className="text-sm text-emerald-600 leading-relaxed">
                Upon successful registration, you'll receive:
              </p>
              <ul className="mt-2 space-y-1 text-sm text-emerald-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                  Unique Gardener ID (e.g., "Gardener #00001")
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                  Initial resource allocation after claiming
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                  Access to the Conservatory
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-emerald-800 flex items-center gap-2">
          <Shield className="w-6 h-6" />
          About Message Signing
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-medium text-blue-800 mb-2">What Message Signing Does</h3>
            <ul className="space-y-1 text-sm text-blue-600">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                Proves you own the wallet
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                Creates a secure profile
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                Links your username to your wallet
              </li>
            </ul>
          </div>

          <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
            <h3 className="font-medium text-amber-800 mb-2">What Message Signing Cannot Do</h3>
            <ul className="space-y-1 text-sm text-amber-600">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                Access your wallet funds
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                Make any transactions
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                View your private keys
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisteringSection;