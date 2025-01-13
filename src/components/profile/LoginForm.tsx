import React, { useState } from 'react';
import { useAuthStore } from '../../store/useAuthStore';
import { Loader2, CheckCircle2, XCircle } from 'lucide-react';
import RegisterForm from './RegisterForm';
import { useWallet } from '../../hooks/useWallet';
import { axiosHttp, API_URL } from '../../lib/axios';

const LoginForm: React.FC = () => {
  const { connect, signMessage } = useWallet();
  const [showRegister, setShowRegister] = useState(false);
  const [status, setStatus] = useState<'initial' | 'checking' | 'found' | 'not_found'>('initial');
  const { setProfile } = useAuthStore();
  const { publicKey } = useWallet();

  const handleConnect = async () => {
    setStatus('checking');

    let address;
    let nonce;
    try {
      if (!publicKey) {
        address = await connect();
      } else {
        address = publicKey;
      }
      let { data: { ok, data: response } } = await axiosHttp.post(`${API_URL}/oauth/nonce`, { address });
      if (ok) {
        nonce = response.nonce;
      } else {
        setStatus('not_found');
      }

    } catch (error) {
      console.error('Registration error:', error);
      setStatus('not_found');
    } finally {
    }

    if (!nonce) {
      return;
    }

    try {
      let signature = await signMessage(nonce);
      let { data: { ok, data: response } } = await axiosHttp.post(`${API_URL}/oauth`, { address, nonce, signature });
      if (ok) {

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

        setProfile(profileData);
      } else {
        setStatus('not_found');
      }
    } catch (error) {
      setStatus('not_found');
    } finally {

    }
  };

  const handleSignIn = () => {
  };

  if (showRegister) {
    return <RegisterForm onBack={() => setShowRegister(false)} />;
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-emerald-800">Sprout.trading Login</h2>
      </div>

      <div className="space-y-4">
        {status === 'initial' && (
          <button
            onClick={handleConnect}
            className="w-full flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all"
          >
            <img src="https://i.imgur.com/k1c0SFG.png" alt="Phantom" className="w-5 h-5" />
            Sign with Phantom Wallet
          </button>
        )}

        {status === 'checking' && (
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center gap-2 text-blue-700">
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Checking your Gardener ID...</span>
            </div>
          </div>
        )}

        {status === 'found' && (
          <div className="space-y-4">
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
              <div className="flex items-center gap-2 text-emerald-700">
                <CheckCircle2 className="w-5 h-5" />
                <span>Successfully found Gardener #00001!</span>
              </div>
            </div>

            <button
              onClick={handleSignIn}
              className="w-full p-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
            >
              Sign In
            </button>
          </div>
        )}

        {status === 'not_found' && (
          <div className="space-y-4">
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center gap-2 text-red-700">
                <XCircle className="w-5 h-5" />
                <span>No Gardener ID has been found using your public address!</span>
              </div>
            </div>

            <button
              onClick={() => setShowRegister(true)}
              className="w-full p-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
            >
              Register New Account
            </button>
          </div>
        )}

        {status === 'initial' && (
          <>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gradient-to-br from-emerald-50/50 via-white to-emerald-50/50 text-gray-500">or</span>
              </div>
            </div>

            <button
              onClick={() => setShowRegister(true)}
              className="w-full p-3 bg-white border border-emerald-200 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors"
            >
              Register Account
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginForm;