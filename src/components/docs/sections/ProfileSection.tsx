import React from 'react';
import { Share2 } from 'lucide-react';

const ProfileSection: React.FC = () => {
  return (
    <div className="space-y-8 animate-[fadeIn_0.3s_ease-out]">
      <div className="p-4 bg-gradient-to-br from-emerald-50 to-white rounded-lg border border-emerald-100">
        <p className="text-emerald-600 leading-relaxed">
          Your Sprout profile contains all your gardening information, statistics, and inventory management.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-emerald-800">Profile Features</h2>

        <div className="grid gap-4">
          <div className="p-4 bg-white/50 rounded-lg border border-emerald-100">
            <div>
              <h3 className="font-medium text-emerald-800 mb-1 flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center">
                  <img src="https://i.imgur.com/XgsT7SR.png" alt="ID" className="w-4 h-4" />
                </div>
                Gardener Information
              </h3>
              <p className="text-sm text-emerald-600">
                View your unique Gardener ID, registration date, and contribution statistics. Your Gardener ID is your unique identifier in the Sprout ecosystem.
              </p>
            </div>
          </div>

          <div className="p-4 bg-white/50 rounded-lg border border-emerald-100">
            <div>
              <h3 className="font-medium text-emerald-800 mb-1 flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center">
                  <img src="https://i.imgur.com/SpwFpMe.png" alt="Resources" className="w-4 h-4" />
                </div>
                Resource Management
              </h3>
              <p className="text-sm text-emerald-600">
                Monitor and manage your water, fertilizer, and sunshine resources. Claim new resources every hour to help nurture the community sprout and get rewards based of your allocation.
              </p>
              <div className="mt-2 grid grid-cols-3 gap-2">
                <div className="p-2 bg-blue-50 rounded border border-blue-100">
                  <div className="flex items-center gap-2">
                    <img src="https://i.imgur.com/fiFmUCU.png" alt="Water" className="w-4 h-4" />
                    <span className="text-sm text-blue-700">Water</span>
                  </div>
                </div>
                <div className="p-2 bg-stone-50 rounded border border-stone-100">
                  <div className="flex items-center gap-2">
                    <img src="https://i.imgur.com/oZHaXEN.png" alt="Fertilizer" className="w-4 h-4" />
                    <span className="text-sm text-stone-700">Fertilizer</span>
                  </div>
                </div>
                <div className="p-2 bg-amber-50 rounded border border-amber-100">
                  <div className="flex items-center gap-2">
                    <img src="https://i.imgur.com/SpwFpMe.png" alt="Sunshine" className="w-4 h-4" />
                    <span className="text-sm text-amber-700">Sunshine</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white/50 rounded-lg border border-emerald-100">
            <div>
              <h3 className="font-medium text-emerald-800 mb-1 flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center">
                  <img src="/images/social-links.png" alt="Wallet" className="w-4 h-4" />
                </div>
                Social Links
              </h3>
              <p className="text-sm text-emerald-600">
                Connect your social media accounts to engage with the Sprout community. Add your Twitter, Discord, Telegram, and GitHub profiles.
              </p>
            </div>
          </div>

          <div className="p-4 bg-white/50 rounded-lg border border-emerald-100">
            <div>
              <h3 className="font-medium text-emerald-800 mb-1 flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center">
                  <img src="/images/phantom-wallets.png" alt="Wallet" className="w-4 h-4" />
                </div>
                Wallet Integration
              </h3>
              <p className="text-sm text-emerald-600">
                Your connected wallet is used to verify your identity and will be used for future token distributions based on your contributions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;