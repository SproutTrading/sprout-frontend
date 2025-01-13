import React from 'react';

const ProfileSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <p className="text-emerald-600">
        Your Sprout profile contains all your gardening information, statistics, and inventory management.
      </p>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-emerald-800">Profile Features</h2>
        
        <div className="grid gap-4">
          <div className="p-4 bg-white/50 rounded-lg border border-emerald-100">
            <div>
              <h3 className="font-medium text-emerald-800 mb-1">Gardener Information</h3>
              <p className="text-sm text-emerald-600">
                View your unique Gardener ID, registration date, and contribution statistics. Your Gardener ID is your unique identifier in the Sprout ecosystem.
              </p>
            </div>
          </div>

          <div className="p-4 bg-white/50 rounded-lg border border-emerald-100">
            <div>
              <h3 className="font-medium text-emerald-800 mb-1">Resource Management</h3>
              <p className="text-sm text-emerald-600">
                Monitor and manage your water, fertilizer, and sunshine resources. Claim new resources every hour to help nurture the community sprout.
              </p>
            </div>
          </div>

          <div className="p-4 bg-white/50 rounded-lg border border-emerald-100">
            <div>
              <h3 className="font-medium text-emerald-800 mb-1">Social Links</h3>
              <p className="text-sm text-emerald-600">
                Connect your social media accounts to engage with the Sprout community. Add your Twitter, Discord, Telegram, and GitHub profiles.
              </p>
            </div>
          </div>

          <div className="p-4 bg-white/50 rounded-lg border border-emerald-100">
            <div>
              <h3 className="font-medium text-emerald-800 mb-1">Wallet Integration</h3>
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