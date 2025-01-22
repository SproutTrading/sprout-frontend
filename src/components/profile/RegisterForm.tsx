import React, { useState } from 'react';
import { Loader2, ArrowLeft, Check, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
import SuccessPopup from '../common/SuccessPopup';
import { API_URL, axiosHttp } from '../../lib/axios';
import { useWallet } from '../../hooks/useWallet';

interface RegisterFormProps {
  onBack: () => void;
}

const USERNAME_REGEX = /^[a-zA-Z0-9_-]{5,40}$/;

const RegisterForm: React.FC<RegisterFormProps> = ({ onBack }) => {
  const { connect, publicKey, signMessage } = useWallet();
  const navigate = useNavigate();
  const { setProfile } = useAuthStore();
  const [display_name, setDisplayName] = useState('');
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(false);
  const [availability, setAvailability] = useState<'available' | 'taken' | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [registrationData, setRegistrationData] = useState<{
    display_name: string;
    gardenerId: string;
    public_key: string;
  } | null>(null);

  const handleCheckAvailability = async () => {
    if (!display_name.trim()) return;

    setChecking(true);
    await axiosHttp.post(`${API_URL}/oauth/username/check`, { username: display_name.trim() }).then(data => {
      let { ok } = data.data;
      setTimeout(() => {
        if (ok) {
          setAvailability('available');
        } else {
          setAvailability('taken');
        }
      }, 2000);
    }).catch(_ => {
      setAvailability('taken');
    }).finally(() => {
      setTimeout(() => {
        setChecking(false);
      }, 2000);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    let address;
    let nonce;
    try {
      setLoading(true);
      if (!publicKey) {
        address = await connect();
      } else {
        address = publicKey;
      }
      let { data: { ok, data: response } } = await axiosHttp.post(`${API_URL}/oauth/nonce`, { address });
      if (ok) {
        nonce = response.nonce;
      } else {
        setShowSuccess(false);
      }

    } catch (error) {
      console.error('Registration error:', error);
      setShowSuccess(false);
    } finally {
      setLoading(false);
    }

    if (!nonce) {
      return;
    }


    try {
      setLoading(true);
      let signature = await signMessage(nonce);
      let { data: { ok, data: response } } = await axiosHttp.post(`${API_URL}/oauth/register`, { address, nonce, signature, username: display_name.trim() });
      if (ok) {
        setRegistrationData({
          display_name: response.display_name,
          gardenerId: response.id,
          public_key: response.public_key
        });

        const profileData = {
          id: response.id,
          group_id: response.group_id,
          role_id: response.role_id,
          display_name: response.display_name,
          public_key: response.public_key,
          isAdmin: false,
          date_joined: response.date_joined,
          jwt: response.jwt
        };
        setShowSuccess(true);
        setTimeout(() => {
          setProfile(profileData);

        }, 5000);
        // } else {
      } else {
        setShowSuccess(false);
      }
    } catch (error) {
      console.error('Registration error:', error);
      setShowSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    // Add a small delay before navigation to ensure popup animation completes
    setTimeout(() => {
      navigate('/desktop');
    }, 300);
  };

  return (
    <>
      <div className="w-full max-w-md mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-emerald-800">Create Account</h2>
          <p className="text-sm text-emerald-600 mt-2">
            Choose a username and connect your Phantom wallet
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="username" className="block text-sm font-medium text-emerald-700">
              Username
            </label>
            <div className="flex gap-2">
              <input
                id="username"
                type="text"
                value={display_name}
                onChange={(e) => {
                  setDisplayName(e.target.value);
                  setAvailability(null);
                }}
                className="block flex-1 px-3 py-2 bg-white border border-emerald-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
                minLength={5}
                maxLength={20}
                pattern="[a-zA-Z0-9_-]+"
                title="Username can only contain letters, numbers, underscores, and hyphens"
              />
              <button
                type="button"
                onClick={handleCheckAvailability}
                disabled={checking || !display_name.trim()}
                className="px-3 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {checking ? (
                  <Loader2 className="w-5 h-5 animate-spin text-white" />
                ) : (
                  <>
                    <Check className="w-5 h-5" />
                    Check
                  </>
                )}
              </button>
            </div>

            {/* Availability Status */}
            {availability && (
              <div className={`p-2 rounded-md flex items-center gap-2 text-sm ${availability === 'available'
                ? 'bg-green-50 text-green-700 border border-green-200'
                : 'bg-red-50 text-red-700 border border-red-200'
                }`}>
                {availability === 'available' ? (
                  <>
                    <Check className="w-4 h-4 text-green-500" />
                    Username is available!
                  </>
                ) : (
                  <>
                    <X className="w-4 h-4 text-red-500" />
                    {USERNAME_REGEX.test(display_name)
                      ? 'Username is already taken'
                      : 'Username must be 5-20 characters and can only contain letters, numbers, underscores, and hyphens'}
                  </>
                )}
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={loading || !display_name.trim() || availability !== 'available'}
            className="w-full flex items-center justify-center gap-2 p-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Creating Account...
              </>
            ) : (
              'Sign Wallet & Continue'
            )}
          </button>

          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="text-sm font-medium text-blue-800 mb-2">About Wallet Connection</h3>
            <p className="text-sm text-blue-600">
              To complete registration, you'll need to sign a message with your Phantom wallet. This is a secure process that:
            </p>
            <ul className="mt-2 space-y-1 text-sm text-blue-600">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                Only verifies your wallet ownership
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                Never gives us access to your funds
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                Can be done with an empty wallet for extra security
              </li>
            </ul>
          </div>

          <button
            type="button"
            onClick={onBack}
            className="w-full flex items-center justify-center gap-2 p-3 bg-white border border-emerald-200 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Login
          </button>
        </form>
      </div>

      <SuccessPopup
        isOpen={showSuccess}
        onClose={handleSuccessClose}
        display_name={registrationData?.display_name || ''}
        gardenerId={registrationData?.gardenerId || ''}
        public_key={registrationData?.public_key || ''}
        autoCloseDelay={5000}
      />
    </>
  );
};

export default RegisterForm;