import React, { useState } from 'react';
import { verifyAdminCredentials, getAdminProfile } from '../../lib/auth';
import { ADMIN_WALLET } from '../../lib/constants';
import { useAuthStore } from '../../store/useAuthStore';

interface AdminLoginFormProps {
  onBack: () => void;
  onSuccess: () => void;
}

const AdminLoginForm: React.FC<AdminLoginFormProps> = ({ onBack, onSuccess }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { setProfile } = useAuthStore();

  const handleLogin = async () => {
    if (!password) {
      setError('Please enter the admin password');
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const adminUser = await verifyAdminCredentials(password);
      if (!adminUser) {
        setError('Invalid admin credentials');
        return;
      }

      const profile = await getAdminProfile();
      if (!profile) {
        setError('Failed to load admin profile');
        return;
      }

      setProfile({
        walletAddress: ADMIN_WALLET,
        gardenerId: profile.gardener_id,
        joinedAt: profile.created_at,
        isAdmin: true
      });

      onSuccess();
    } catch (err) {
      console.error('Error logging in:', err);
      setError(err instanceof Error ? err.message : 'Failed to log in');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter admin password"
          className="w-full p-2 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        {error && (
          <p className="text-sm text-red-600">{error}</p>
        )}
      </div>

      <div className="space-y-2">
        <button
          onClick={handleLogin}
          disabled={loading || !password}
          className="w-full p-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Logging in...' : 'Login as Admin'}
        </button>
        <button
          onClick={onBack}
          className="w-full p-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Back to Options
        </button>
      </div>
    </div>
  );
};

export default AdminLoginForm;