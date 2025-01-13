import React from 'react';
import { Star } from 'lucide-react';
import InventoryIcon from './icons/InventoryIcon';
import { useAuthStore } from '../store/useAuthStore';

const SproutProfile: React.FC = () => {
  const { profile, clearProfile } = useAuthStore();

  if (!profile) {
    return (
      <div className="h-full flex items-center justify-center">
        <p className="text-emerald-600">No profile found</p>
      </div>
    );
  }

  return (
    <div className="h-full flex items-center justify-center">
      <div className="w-full max-w-md space-y-4">
        <div className="space-y-2">
          <div className="p-2 bg-emerald-50 rounded border border-emerald-100">
            <div className="text-sm text-emerald-600 font-medium">Role</div>
            <div className="text-emerald-900 flex items-center gap-2">
              {String(profile.id).padStart(5, '0')}
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            </div>
          </div>

          <div className="p-2 bg-emerald-50 rounded border border-emerald-100">
            <div className="text-sm text-emerald-600 font-medium">Status</div>
            <div className="text-emerald-900">Demo User</div>
          </div>

          <div className="p-2 bg-emerald-50 rounded border border-emerald-100">
            <div className="text-sm text-emerald-600 font-medium">Date Joined</div>
            <div className="text-emerald-900">
              {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('openInventory'))}
            className="w-full p-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <InventoryIcon size={20} className="text-white" />
            View Inventory →
          </button>

          <button
            onClick={() => clearProfile()}
            className="w-full p-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default SproutProfile;