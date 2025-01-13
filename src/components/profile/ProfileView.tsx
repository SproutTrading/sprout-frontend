import React from 'react';
import { useAuthStore } from '../../store/useAuthStore';
import InventoryApp from '../inventory/InventoryApp';
import InventoryIcon from '../icons/InventoryIcon';
import SocialLinks from './SocialLinks';
import { LogOut } from 'lucide-react';
import { formatAddress } from '../../lib/format_address';
import { useResourceStore } from '../../store/useResourceStore';
import { formatDate } from '../../lib/format_date';

const ProfileView: React.FC = () => {
  const { profile, clearProfile } = useAuthStore();
  const { contributions } = useResourceStore();

  if (!profile) return null;

  const getRole = (id: number) => {
    return 'Gardener';
  }

  return (
    <div className="h-full flex flex-col">
      {/* Profile Section */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-emerald-800">Profile Details</h2>
        <div className="space-y-2">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <div className="p-2 bg-emerald-50 rounded-lg border border-emerald-100">
              <div className="text-xs text-emerald-600 font-medium flex items-center gap-2">
                <img src="https://i.imgur.com/S6Cdbf5.png" alt="Role" className="w-4 h-4" />
                Role
              </div>
              <div className="text-sm text-emerald-900">{getRole(profile.role_id)}</div>
            </div>

            <div className="p-2 bg-emerald-50 rounded-lg border border-emerald-100">
              <div className="text-xs text-emerald-600 font-medium flex items-center gap-2">
                <img src="https://i.imgur.com/XgsT7SR.png" alt="ID" className="w-4 h-4" />
                Gardener ID
              </div>
              <div className="text-sm text-emerald-900">#{String(profile.id).padStart(5, '0')}</div>
            </div>

            <div className="p-2 bg-emerald-50 rounded-lg border border-emerald-100">
              <div className="text-xs text-emerald-600 font-medium flex items-center gap-2">
                <img src="https://i.imgur.com/vhp38Ex.png" alt="Username" className="w-4 h-4" />
                Username
              </div>
              <div className="text-sm text-emerald-900">{profile.display_name}</div>
            </div>

            <div className="p-2 bg-emerald-50 rounded-lg border border-emerald-100">
              <div className="text-xs text-emerald-600 font-medium flex items-center gap-2">
                <img src="https://i.imgur.com/BAIl4Xz.png" alt="Date" className="w-4 h-4" />
                Date Joined
              </div>
              <div className="text-sm text-emerald-900">
                {formatDate(new Date(profile.date_joined))}
              </div>
            </div>

            <div className="p-2 bg-emerald-50 rounded-lg border border-emerald-100">
              <div className="text-xs text-emerald-600 font-medium flex items-center gap-2">
                <img src="https://i.imgur.com/SpwFpMe.png" alt="Contributions" className="w-4 h-4" />
                Total Contributions
              </div>
              <div className="text-sm text-emerald-900">{contributions}</div>
            </div>

            <div className="p-2 bg-emerald-50 rounded-lg border border-emerald-100">
              <div className="text-xs text-emerald-600 font-medium flex items-center gap-2">
                <img src="https://i.imgur.com/rjjjesY.png" alt="Wallet" className="w-4 h-4" />
                Public Address
              </div>
              <div className="text-sm text-emerald-900 truncate">{formatAddress(profile.public_key)}</div>
            </div>
          </div>

          <button
            onClick={clearProfile}
            className="w-full p-2 bg-red-50 rounded-lg border border-red-200 hover:bg-red-100 transition-colors text-left"
          >
            <div className="text-xs text-red-600 font-medium flex items-center gap-2">
              <LogOut className="w-4 h-4" />
              Session
            </div>
            <div className="text-sm text-red-900">Log Out</div>
          </button>
        </div>
      </div>

      {/* Social Links Section */}
      <div className="mt-6">
        <SocialLinks />
      </div>

      {/* Inventory Section */}
      <div className="mt-6 flex-1 flex flex-col">
        <h2 className="text-lg font-semibold text-emerald-800 mb-2 flex items-center gap-2">
          <InventoryIcon size={20} />
          Inventory
        </h2>
        <div className="flex-1 flex flex-col pb-4">
          <InventoryApp />
        </div>
      </div>
    </div>
  );
};

export default ProfileView;